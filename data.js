/* =========================================================
   SVE ŠTO SE MENJA NA SAJTU JE OVDE 👇
   - CITATI: dodaj u niz QUOTES (ime može da ostane prazno)
   - SLIKE: ubaci sliku u img/<folder>/ + umanjenu u img/thumbs/<folder>/
            pa dodaj red u PHOTOS
   ========================================================= */

/* ---------- PORUKE KOLEGA ----------
   Primer novog citata:
   { text: "Hvala ti na svemu!", author: "Pera", tag: "nova" },
   tag "arhiva" = odgovori iz rođendanskog kviza 2026.
*/
const QUOTES = [
  // ⬇️⬇️⬇️  OVDE DODAJ NOVE PORUKE KOLEGA  ⬇️⬇️⬇️

  // ⬆️⬆️⬆️  ------------------------------  ⬆️⬆️⬆️

  { text: "Prehladno. To nije „more”, to je emocionalno izazovna tečnost.", author: "anonimni ispitanik", tag: "arhiva" },
  { text: "Ponedeljak. Jedva čeka da vidi svoje kolege, a weekly ne može da dočeka!", author: "anonimni ispitanik", tag: "arhiva" },
  { text: "Utorak, zato što je Aleksandra tad remote.", author: "anonimni ispitanik", tag: "arhiva" },
  { text: "Subota, jer voli prekovremeno.", author: "anonimni ispitanik", tag: "arhiva" },
  { text: "Petak, ja se nadam. U suprotnom – nemam objašnjenje.", author: "anonimni ispitanik", tag: "arhiva" },
  { text: "Onaj u kome je istrenirani model dao odlične rezultate, nedeljni sastanak je otkazan, a Jira je podmirena.", author: "anonimni ispitanik", tag: "arhiva" },
  { text: "Prehladno. Ni skalarima ne odgovara temperatura od 25°C.", author: "anonimni ispitanik", tag: "arhiva" },
  { text: "Temperatura mora ispod 28 stepeni je neprihvatljiva.", author: "anonimni ispitanik", tag: "arhiva" },
  { text: "Prehladno, ona je jedna zimogrožljivica.", author: "anonimni ispitanik", tag: "arhiva" },
  { text: "Isidora voli sve dugine boje.", author: "anonimni ispitanik", tag: "arhiva" },
  { text: "Utorak. Jer više nije ponedeljak, a još uvek ima nade da će se pojesti dobar burger.", author: "anonimni ispitanik", tag: "arhiva" },
];

/* ---------- SLIKE ----------
   cat: kancelarija | teren | bina | smesne | vanposla | ekipa
*/
const PHOTOS = [
  // Kancelarija 23
  { src: "kancelarija/kancelarija-01.jpg", cat: "kancelarija", cap: "Code review, ali sa stavom" },
  { src: "kancelarija/kancelarija-02.jpg", cat: "kancelarija", cap: "Standing desk, standing call" },
  { src: "kancelarija/kancelarija-03.jpg", cat: "kancelarija", cap: "Debugovanje sa poda – nova metodologija" },
  { src: "kancelarija/kancelarija-04.jpg", cat: "kancelarija", cap: "Skrivanje od još jednog upitnika" },
  { src: "kancelarija/kancelarija-05.jpg", cat: "kancelarija", cap: "Sama u sali za sastanke. Weekly je otkazan?" },
  { src: "kancelarija/kancelarija-06.jpg", cat: "kancelarija", cap: "„Ko je opet spustio klimu?”" },
  { src: "kancelarija/kancelarija-07.jpg", cat: "kancelarija", cap: "Čeka da se model istrenira" },
  { src: "smesne/smesne-01.jpg", cat: "kancelarija", cap: "Lazy bag mode: ON" },
  { src: "smesne/smesne-09.jpg", cat: "kancelarija", cap: "Ozbiljan posao, ozbiljan laptop" },
  { src: "smesne/smesne-17.jpg", cat: "kancelarija", cap: "Pogled koji kaže: „Imam meeting za 2 minuta”" },
  { src: "smesne/smesne-18.jpg", cat: "kancelarija", cap: "Provera temperature napolju. Prehladno." },

  // Na terenu: Alpack, Toza Marković, Argus
  { src: "alpack/alpack-01.jpg", cat: "teren", cap: "Alpack: pre fabrike, briefing" },
  { src: "alpack/alpack-02.jpg", cat: "teren", cap: "Alpack: setup ekipa" },
  { src: "alpack/alpack-03.jpg", cat: "teren", cap: "Alpack: tri monitora, jedna Isidora" },
  { src: "alpack/alpack-04.jpg", cat: "teren", cap: "Alpack: „Jel neko nešto rekao?”" },
  { src: "alpack/alpack-05.jpg", cat: "teren", cap: "Alpack: modni trend sezone – kapica za kosu" },
  { src: "alpack/alpack-06.jpg", cat: "teren", cap: "Alpack: ML u belom mantilu" },
  { src: "alpack/alpack-07.jpg", cat: "teren", cap: "Alpack: inspekcija modela na licu mesta" },
  { src: "toza/toza-01.jpg", cat: "teren", cap: "Toza Marković: kamere, stativi, crep" },
  { src: "toza/toza-02.jpg", cat: "teren", cap: "Toza Marković: ruke na terminalu" },
  { src: "toza/toza-03.jpg", cat: "teren", cap: "Toza Marković: „Radi. Ne diraj.”" },
  { src: "toza/toza-04.jpg", cat: "teren", cap: "Toza Marković: još jedan test" },
  { src: "toza/toza-06.jpg", cat: "teren", cap: "Toza Marković: fabrička hala, AI edition" },
  { src: "toza/toza-07.jpg", cat: "teren", cap: "Toza Marković: deploy na licu mesta" },
  { src: "toza/toza-08.jpg", cat: "teren", cap: "Toza Marković: proizvodna linija" },
  { src: "toza/toza-09.jpg", cat: "teren", cap: "Toza Marković: kancelarija je gde je laptop" },
  { src: "toza/toza-10.jpg", cat: "teren", cap: "Kad model prepozna kolegu umesto crepa" },
  { src: "toza/toza-11.jpg", cat: "teren", cap: "Toza Marković: monitoring" },
  { src: "argus/argus-01.jpg", cat: "teren", cap: "Argus era: rad u ambijentu" },
  { src: "argus/argus-02.jpg", cat: "teren", cap: "Argus era: remote, ali sa stilom" },

  // Na bini
  { src: "vanposla/vanposla-07.jpg", cat: "bina", cap: "Berlin: pre Argus NLP talka" },
  { src: "vanposla/vanposla-08.jpg", cat: "bina", cap: "Berlin: Argus NLP na velikoj sceni" },
  { src: "vanposla/vanposla-09.jpg", cat: "bina", cap: "Berlin: publika sluša, Isidora objašnjava" },
  { src: "vanposla/vanposla-19.jpg", cat: "bina", cap: "SPlitech: The Pipeline Overview" },
  { src: "vanposla/vanposla-20.jpg", cat: "bina", cap: "SPlitech: kad slajd ima tabelu, a ti imaš odgovor" },
  { src: "vanposla/vanposla-21.jpg", cat: "bina", cap: "SPlitech: pipeline, korak po korak" },
  { src: "vanposla/vanposla-22.jpg", cat: "bina", cap: "SPlitech: „Pitanja?”" },
  { src: "vanposla/vanposla-23.jpg", cat: "bina", cap: "SPlitech: ruke govore pola prezentacije" },
  { src: "vanposla/vanposla-24.jpg", cat: "bina", cap: "SPlitech: Thank you!" },
  { src: "smesne/smesne-10.jpg", cat: "bina", cap: "Interni talk: slajd sa šarenom slikom" },
  { src: "smesne/smesne-11.jpg", cat: "bina", cap: "Interni talk: tišina u sali" },
  { src: "smesne/smesne-12.jpg", cat: "bina", cap: "Interni talk: ozbiljan deo" },
  { src: "smesne/smesne-13.jpg", cat: "bina", cap: "Interni talk: neko na stonom fudbalu u pozadini? Ne." },

  // Smešne
  { src: "smesne/smesne-02.jpg", cat: "smesne", cap: "Model: „Isidora, full body, catalog pose”" },
  { src: "smesne/smesne-03.jpg", cat: "smesne", cap: "Snimanje dataseta, take 47" },
  { src: "smesne/smesne-04.jpg", cat: "smesne", cap: "Data labeling ekipa u akciji" },
  { src: "smesne/smesne-05.jpg", cat: "smesne", cap: "Ovaj crep je 100% outlier" },
  { src: "smesne/smesne-06.jpg", cat: "smesne", cap: "Užina ispod table OPASNOST – OTROV" },
  { src: "smesne/smesne-07.jpg", cat: "smesne", cap: "Rizik je deo posla" },
  { src: "smesne/smesne-08.jpg", cat: "smesne", cap: "Gde je ekipa? Ostavili me sa crepovima." },
  { src: "smesne/smesne-16.jpg", cat: "smesne", cap: "Paso doble u kancelariji. Normalan utorak." },
  { src: "smesne/smesne-19.jpg", cat: "smesne", cap: "Kad ti daju papir sa još jednim pitanjem" },
  { src: "smesne/smesne-20.jpg", cat: "smesne", cap: "Tenis > stoni fudbal. Zauvek." },
  { src: "smesne/smesne-21.jpg", cat: "smesne", cap: "Servis!" },
  { src: "smesne/smesne-22.jpg", cat: "smesne", cap: "Kancelarija je dovoljno velika za teren" },
  { src: "smesne/smesne-23.jpg", cat: "smesne", cap: "Forehand iz open space-a" },

  // Van posla
  { src: "vanposla/vanposla-02.jpg", cat: "vanposla", cap: "Mašna veća od motivacije za ponedeljak" },
  { src: "vanposla/vanposla-03.jpg", cat: "vanposla", cap: "Pauza na prozoru" },
  { src: "vanposla/vanposla-04.jpg", cat: "vanposla", cap: "Prag: konačno toplo?" },
  { src: "vanposla/vanposla-06.jpg", cat: "vanposla", cap: "Pomfrit, sok i dramatični pogledi" },
  { src: "vanposla/vanposla-11.jpg", cat: "vanposla", cap: "Cveće stiglo, srce puno" },
  { src: "vanposla/vanposla-12.jpg", cat: "vanposla", cap: "Ko je ovo poslao?! 🥹" },
  { src: "vanposla/vanposla-13.jpg", cat: "vanposla", cap: "Buket od kolega_inica" },
  { src: "vanposla/vanposla-14.jpg", cat: "vanposla", cap: "Srećan rođendan, 25 zauvek" },

  // Ekipa (grupne)
  { src: "vanposla/vanposla-01.jpg", cat: "ekipa", cap: "Noćni selfi sa pogledom" },
  { src: "vanposla/vanposla-05.jpg", cat: "ekipa", cap: "Ekipa na brodu" },
  { src: "vanposla/vanposla-10.jpg", cat: "ekipa", cap: "Večera u kafani" },
  { src: "vanposla/vanposla-15.jpg", cat: "ekipa", cap: "Postrojavanje" },
  { src: "vanposla/vanposla-16.jpg", cat: "ekipa", cap: "Postrojavanje, take 2" },
  { src: "vanposla/vanposla-17.jpg", cat: "ekipa", cap: "SPlitech ekipa" },
  { src: "vanposla/vanposla-18.jpg", cat: "ekipa", cap: "SPlitech: move beyond." },
  { src: "vanposla/vanposla-25.jpg", cat: "ekipa", cap: "SPlitech: posle talka" },
  { src: "vanposla/vanposla-26.jpg", cat: "ekipa", cap: "SPlitech: misija uspela" },
  { src: "smesne/smesne-14.jpg", cat: "ekipa", cap: "Cela firma, jedan ekran" },
  { src: "smesne/smesne-15.jpg", cat: "ekipa", cap: "Tim, slikaj se!" },
  { src: "smesne/smesne-24.jpg", cat: "ekipa", cap: "Slatki sto, slatka ekipa" },
  { src: "smesne/smesne-25.jpg", cat: "ekipa", cap: "Ko je uzeo poslednju krofnu?" },
  { src: "smesne/smesne-26.jpg", cat: "ekipa", cap: "Kancelarijski momenat" },
  { src: "kancelarija/kancelarija-08.jpg", cat: "ekipa", cap: "Kancelarija 23 – postava" },
  { src: "toza/toza-05.jpg", cat: "ekipa", cap: "Selfi sa terena" },
];

/* ---------- KVIZ ---------- */
const QUIZ = [
  {
    q: "Koja je Isidorina omiljena tehnika prikupljanja podataka?",
    a: ["Web scraping", "Microsoft Forms", "Pitam ChatGPT", "Intervju u kuhinji"],
    ok: 1,
    yes: "MICROSOFT FORMS!!! 💜 Sad je mnogo bolje :3",
    no: "Ne. Odgovor je uvek Microsoft Forms. Uvek."
  },
  {
    q: "Isidora je 31.1.2026. napunila koliko godina? (Vodi računa šta bi ona želela da pročita.)",
    a: ["25", "26", "28"],
    ok: 0,
    yes: "Tačno! 25. Zauvek. Ne pitaj dalje.",
    no: "Hmm. Zvanični odgovor sa rođendanskog kviza je 25. Ne raspravljamo."
  },
  {
    q: "Omiljena boja? (Isidora je feministkinja.)",
    a: ["#ADD8E6", "Teget", "Ljubičasta", "La vie en rose"],
    ok: 2,
    yes: "Ljubičasta – boja feminizma. Zato je ceo ovaj sajt ljubičast 💜",
    no: "Ljubičasta! Pogledaj oko sebe, ceo sajt ti je dao hint."
  },
  {
    q: "More od 25°C je po Isidorinom mišljenju…",
    a: ["Idealno", "Prehladno", "Pretoplo"],
    ok: 1,
    yes: "PREHLADNO. To nije „more”, to je emocionalno izazovna tečnost.",
    no: "Prehladno! Sve ispod 28°C je neprihvatljivo."
  },
  {
    q: "Isidorin omiljeni ples?",
    a: ["Tango", "Kolo", "Paso doble", "Makarena"],
    ok: 2,
    yes: "PASO DOBLE! 💃 Olé!",
    no: "Vaš odgovor je: POGREŠAN. Tačan odgovor je… PASO DOBLE."
  },
  {
    q: "Koju domaću seriju su kolege proglasile Isidorinom #1?",
    a: ["Selo gori a baba se češlja", "Stižu dolari", "Otvorena vrata", "Ranjeni orao"],
    ok: 2,
    yes: "Otvorena vrata! (Kao i sva vrata koja ti se sada otvaraju 🚪✨)",
    no: "Otvorena vrata! Male sredine, devedesete, nostalgija."
  },
  {
    q: "Šta Isidora misli o stonom fudbalu?",
    a: ["Obožava ga", "Igra svaki dan u pauzi", "Ne, hvala.", "Šampionka firme"],
    ok: 2,
    yes: "Ne, hvala. Tenis u open space-u je druga priča 🎾",
    no: "Ne. Ne. I ne. Isidora i stoni fudbal nisu u istom datasetu."
  },
  {
    q: "Koja je Isidorina pozicija u timu?",
    a: ["Team Lead", "AI Developer", "Aleksandrin mentor", "Product Owner"],
    ok: -1,
    yes: "",
    no: "KAŽE SE DEVELOPERKA. 💅"
  },
];
