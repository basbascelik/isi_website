/* ===== GALERIJA ===== */
const grid = document.getElementById('grid');
let current = [];
function renderGrid(cat) {
  current = cat === 'all' ? PHOTOS : cat === 'top' ? PHOTOS.filter(p => p.top) : PHOTOS.filter(p => p.cat === cat);
  grid.innerHTML = current.map((p, i) => `
    <figure class="ph" data-i="${i}" style="animation-delay:${Math.min(i, 20) * 25}ms">
      <img src="img/thumbs/${p.src}" loading="lazy" alt="${p.cap}">
      <p>${p.cap}</p>
    </figure>`).join('');
}
document.querySelectorAll('.tabs button').forEach(b => b.addEventListener('click', () => {
  document.querySelector('.tabs .on').classList.remove('on');
  b.classList.add('on');
  renderGrid(b.dataset.cat);
}));
renderGrid('top');

/* lightbox */
const lb = document.getElementById('lb'), lbImg = document.getElementById('lbImg'), lbCap = document.getElementById('lbCap');
let idx = 0;
function show(i) {
  idx = (i + current.length) % current.length;
  lbImg.src = 'img/' + current[idx].src;
  lbCap.textContent = current[idx].cap;
  lb.hidden = false;
}
grid.addEventListener('click', e => { const f = e.target.closest('.ph'); if (f) show(+f.dataset.i); });
lb.querySelector('.lb-x').onclick = () => lb.hidden = true;
lb.querySelector('.lb-prev').onclick = () => show(idx - 1);
lb.querySelector('.lb-next').onclick = () => show(idx + 1);
lb.addEventListener('click', e => { if (e.target === lb) lb.hidden = true; });
document.addEventListener('keydown', e => {
  if (lb.hidden) return;
  if (e.key === 'Escape') lb.hidden = true;
  if (e.key === 'ArrowLeft') show(idx - 1);
  if (e.key === 'ArrowRight') show(idx + 1);
});

/* ===== FRIZURE ===== */
const hImg = document.getElementById('hairImg'), hRange = document.getElementById('hairRange'), hStrip = document.getElementById('hairStrip');
hRange.max = HAIR.length - 1;
hStrip.innerHTML = HAIR.map((h, i) => `<button data-i="${i}" aria-label="${h.name}"><img src="img/thumbs/${h.src}" style="object-position:${h.pos}" loading="lazy" alt=""><span>v${i + 1}.0</span></button>`).join('');
function setHair(i) {
  const h = HAIR[i];
  hImg.src = 'img/' + h.src; hImg.style.objectPosition = h.pos;
  document.getElementById('hairVer').textContent = `v${i + 1}.0`;
  document.getElementById('hairNum').textContent = `FRIZURA ${i + 1} / ${HAIR.length}`;
  document.getElementById('hairName').textContent = h.name;
  document.getElementById('hairCap').textContent = h.cap;
  hRange.value = i;
  hStrip.querySelectorAll('button').forEach((b, j) => b.classList.toggle('on', j === i));
}
hRange.addEventListener('input', () => setHair(+hRange.value));
hStrip.addEventListener('click', e => { const b = e.target.closest('button'); if (b) setHair(+b.dataset.i); });
setHair(0);

/* ===== IsidoraGPT ===== */
const cBody = document.getElementById('chatBody'), cForm = document.getElementById('chatForm'), cIn = document.getElementById('chatInput');
const pick = a => a[Math.floor(Math.random() * a.length)];
let lastReply = '';
function addMsg(text, who) {
  const m = document.createElement('div');
  m.className = 'msg ' + who; m.textContent = text;
  cBody.appendChild(m); cBody.scrollTop = cBody.scrollHeight;
  return m;
}
function isidoraSays(input) {
  const t = input.toLowerCase(), words = t.split(/[^a-zčćšđž0-9]+/i).filter(Boolean);
  const hits = CHAT.filter(c => c.keys.some(k => k.includes(' ') ? t.includes(k) : words.some(w => w === k || (k.length > 3 && w.startsWith(k)))));
  let pool = hits.length ? hits.flatMap(h => h.reply) : CHAT_FALLBACK;
  if (pool.length > 1) pool = pool.filter(r => r !== lastReply);
  return lastReply = pick(pool);
}
function send(text) {
  text = text.trim(); if (!text) return;
  addMsg(text, 'me'); cIn.value = '';
  const typing = addMsg('Isidora kuca…', 'her typing');
  setTimeout(() => { typing.remove(); addMsg(isidoraSays(text), 'her'); }, 700 + Math.random() * 900);
}
cForm.addEventListener('submit', e => { e.preventDefault(); send(cIn.value); });
addMsg('Ćao! 👋 Kratko molim te, imam sastanak.', 'her');

/* ===== TERMOSTAT ===== */
const tR = document.getElementById('tRange'), tImg = document.getElementById('tImg');
const TH = [
  [16, 'cape', '🥶 KRITIČNO', 'Ko smanjuje grejanje po ovoj firmi...?'],
  [19, 'cape', '🥶 HLADNO', 'Hladno mi je. (Ćebe je već na njoj.)'],
  [22, 'chin', '😒 I DALJE HLADNO', 'Ostatak kancelarije skida džempere. Isidora traži drugi džemper.'],
  [25, 'chin', '🤔 PODNOŠLJIVO', '25°C? To nije temperatura, to je emocionalno izazovan vazduh.'],
  [27, 'coffee', '☕ SKORO', 'Može… uz čaj. Vrući. Dva.'],
  [28, 'gown', '💜 IDEALNO', 'IDEALNO! Sad mogu da treniram modele. I da plešem paso doble.'],
  [31, 'excited', '🔥 RAJ', 'Kolege se tope. Isidora tek ulazi u flow.'],
  [34, 'jump1', '🏖️ MORE MODE', 'Konačno temperatura kao more koje priznaje. Odmor odobren!'],
];
function setT(v) {
  let row = TH[0]; TH.forEach(t => { if (v >= t[0]) row = t; });
  document.getElementById('tVal').textContent = v;
  document.getElementById('tMsg').textContent = row[3];
  document.getElementById('tBadge').textContent = row[2];
  const src = 'img/stickers/' + row[1] + '.webp';
  if (!tImg.src.endsWith(src)) { tImg.classList.remove('swap'); void tImg.offsetWidth; tImg.src = src; tImg.classList.add('swap'); }
  const p = (v - 16) / 20;
  tR.style.setProperty('--p', p * 100 + '%');
  document.querySelector('.thermo-read').style.color = `hsl(${220 + p * 110},75%,48%)`;
  if (v === 28 && !setT.done) { burst(14); setT.done = true; }
}
tR.addEventListener('input', () => setT(+tR.value));
setT(21);

/* ===== PORUKE ===== */
const wall = document.getElementById('wall');
const colors = ['#fff38a', '#ffd1e8', '#e3d0ff', '#c9f1ff', '#d6ffd0', '#ffe0c2'];
let html = QUOTES.map((q, i) => {
  const rot = ((i * 37) % 7 - 3) * 0.8;
  return `<div class="note ${q.text.length > 120 ? 'big' : ''}" style="background:${colors[i % colors.length]};transform:rotate(${rot}deg)">
    „${q.text.replace(/^„|”$/g, '')}”<span class="who">— ${q.author || 'kolega_inica'}</span></div>`;
}).join('');
if (!QUOTES.length) html = `<div class="note pending">📨 Poruke kolega stižu uskoro…</div>`;
wall.innerHTML = html;

/* ===== SAT ===== */
function tick() {
  const d = new Date(), hh = String(d.getHours()).padStart(2, '0'), mm = String(d.getMinutes()).padStart(2, '0');
  document.querySelectorAll('.clock').forEach(c => c.textContent = `${hh}:${mm}`);
  const cs = document.querySelector('.clock-s'); if (cs) cs.textContent = ':' + String(d.getSeconds()).padStart(2, '0');
  const h = d.getHours() + d.getMinutes() / 60, n = document.getElementById('clockNote');
  if (!n) return;
  n.textContent = h < 11 ? 'Pre 11h. Ako je sastanak — protest je opravdan.'
    : h < 13 ? 'Uskoro ručak. Isidora je već gladna.'
    : h < 17 ? 'Radno vreme. Jira tiketi — done.'
    : h < 22 ? 'Posle posla. Piće sa ekipom, pa na ples?'
    : 'Kasno je. Isidora bi rekla: „Hladno mi je, idem kući.”';
}
tick(); setInterval(tick, 1000);

/* ===== SRCA ===== */
function burst(n) {
  const e = ['💜', '💖', '🩷', '✨', '💃'];
  for (let i = 0; i < n; i++) {
    const h = document.createElement('div');
    h.className = 'heart';
    h.textContent = e[Math.floor(Math.random() * e.length)];
    h.style.left = Math.random() * 100 + 'vw';
    h.style.fontSize = 1.2 + Math.random() * 2 + 'rem';
    h.style.setProperty('--r', (Math.random() * 120 - 60) + 'deg');
    h.style.animationDuration = 2.5 + Math.random() * 2.5 + 's';
    h.style.animationDelay = Math.random() * .6 + 's';
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 6000);
  }
}
document.getElementById('hug').onclick = () => burst(60);
