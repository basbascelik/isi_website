/* ===== GALERIJA ===== */
const grid = document.getElementById('grid');
let current = [];
function renderGrid(cat) {
  current = cat === 'all' ? PHOTOS : PHOTOS.filter(p => p.cat === cat);
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
renderGrid('all');

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

/* ===== KVIZ ===== */
const qc = document.getElementById('quiz');
let qi = 0, score = 0;
function renderQ() {
  if (qi >= QUIZ.length) return renderEnd();
  const q = QUIZ[qi];
  qc.innerHTML = `
    <div class="q-bar"><i style="width:${qi / QUIZ.length * 100}%"></i></div>
    <div class="q-num">PITANJE ${qi + 1} / ${QUIZ.length}</div>
    <div class="q-text">${q.q}</div>
    <div class="q-opts">${q.a.map((a, i) => `<button data-i="${i}">${a}</button>`).join('')}</div>
    <div class="q-fb"></div>`;
  qc.querySelectorAll('.q-opts button').forEach(b => b.onclick = () => answer(+b.dataset.i, b));
}
function answer(i, btn) {
  const q = QUIZ[qi], btns = qc.querySelectorAll('.q-opts button'), fb = qc.querySelector('.q-fb');
  btns.forEach(b => b.disabled = true);
  if (q.ok === -1) {            // trik pitanje: svi odgovori su pogrešni
    btn.classList.add('wrong'); fb.textContent = q.no; score++;
  } else if (i === q.ok) {
    btn.classList.add('right'); fb.textContent = q.yes; score++; burst(6);
  } else {
    btn.classList.add('wrong'); btns[q.ok].classList.add('right'); fb.textContent = q.no;
  }
  const nx = document.createElement('button');
  nx.className = 'btn q-next';
  nx.textContent = qi === QUIZ.length - 1 ? 'Rezultati →' : 'Sledeće →';
  nx.onclick = () => { qi++; renderQ(); };
  qc.appendChild(nx);
}
function renderEnd() {
  const pct = Math.round(score / QUIZ.length * 100);
  const msg = pct === 100 ? 'Ti si definitivno iz Kancelarije 23. 💜'
    : pct >= 60 ? 'Solidno! Isidora je ponosna (ali bi htela 100%).'
    : 'Hm. Predlažemo dodatni upitnik. U Microsoft Forms-u, naravno.';
  qc.innerHTML = `<div class="q-end">
    <div class="q-num">REZULTAT</div>
    <div class="big">${score}/${QUIZ.length}</div>
    <p class="q-fb">${msg}</p>
    <button class="btn q-next" id="again">Ponovo ↻</button></div>`;
  document.getElementById('again').onclick = () => { qi = 0; score = 0; renderQ(); };
  if (pct >= 60) burst(30);
}
renderQ();

/* ===== STONI FUDBAL ===== */
const yes = document.getElementById('yesFoos'), area = document.getElementById('foosArea'), fmsg = document.getElementById('foosMsg');
const dodges = ['Isidora je odbila poziv.', 'Ne, hvala. (opet)', 'Jel može tenis umesto toga? 🎾', 'Request denied: 403 Foosball Forbidden', 'Probaj sledeće godine.'];
let d = 0;
function dodge() {
  const ar = area.getBoundingClientRect(), br = yes.getBoundingClientRect();
  const x = (Math.random() - .5) * (ar.width - br.width), y = (Math.random() - .5) * (ar.height - br.height);
  yes.style.left = x + 'px'; yes.style.top = y + 'px';
  fmsg.textContent = dodges[d++ % dodges.length];
}
yes.addEventListener('mouseenter', dodge);
yes.addEventListener('click', e => { e.preventDefault(); dodge(); });
document.getElementById('noFoos').onclick = () => { fmsg.textContent = 'Tačan odgovor! Ovo je prava Isidora. 💜'; burst(12); };

/* ===== PORUKE ===== */
const wall = document.getElementById('wall');
const colors = ['#fff38a', '#ffd1e8', '#e3d0ff', '#c9f1ff', '#d6ffd0', '#ffe0c2'];
const fresh = QUOTES.filter(q => q.tag !== 'arhiva'), archive = QUOTES.filter(q => q.tag === 'arhiva');
let html = '';
if (!fresh.length) html += `<div class="note pending">📨 Ovde stižu poruke kolega…<br>uskoro!</div>`;
[...fresh, ...archive].forEach((q, i) => {
  const rot = ((i * 37) % 7 - 3) * 0.8;
  html += `<div class="note ${q.text.length > 90 && q.tag !== 'arhiva' ? 'big' : ''}" style="background:${colors[i % colors.length]};transform:rotate(${rot}deg)">
    ${q.tag === 'arhiva' ? '<span class="tag">kviz 2026</span>' : ''}
    „${q.text.replace(/^„|”$/g, '')}”
    <span class="who">— ${q.author || 'kolega_inica'}</span></div>`;
});
wall.innerHTML = html;

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
