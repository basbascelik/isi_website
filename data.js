/* =========================================================
   SVE ŠTO SE MENJA NA SAJTU JE OVDE 👇
   - CITATI: dodaj u niz QUOTES (ime može da ostane prazno)
   - SLIKE: ubaci sliku u img/<folder>/ + umanjenu u img/thumbs/<folder>/
            pa dodaj red u PHOTOS
   ========================================================= */

/* ---------- PORUKE KOLEGA ----------
   Primer novog citata:
   { text: "Hvala ti na svemu!", author: "Pera", tag: "nova" },
*/
const QUOTES = [
  // ⬇️⬇️⬇️  OVDE DODAJ NOVE PORUKE KOLEGA  ⬇️⬇️⬇️
  { text: "E sad i ti odlaziš! Dobrodošla u klub bivših. Nisam radila na puno projekata sa Isidorom, iako sam baš htela, ali to nas nije sprečilo da se družimo po hodnicima i van posla. Bili ste najbolji kanc, gde su ljudi dolazili kod vas da se ispovedaju i pričaju, a to je realno zbog Isidore. Iako fizički malecna, jedna od najvećih osoba u firmi sa svojom iskrenošću i moralom (jer se zna sa kime sam mogla da pričam o ozbiljnim stvarima, a realno i da tračarim, haha). Srećno u nastavku karijere i vidimo se brzo! Šaljem pozdrave (i nazdravljam pivom) iz Belgije!! 🍺🇧🇪", author: "Tamara" },
  { text: "Isidora i ja smo u firmu došle istog dana, mislim da se čak sećam i mantila u kom je bila kad smo došle. Pamtiću naša druženja, rafting, more, posvećenost, njenu iskrenost, dobrotu i osećaj da u njoj uvek možeš imati saborca za borbu protiv mizoginije.", author: "Slađa V." },
  { text: "Meni je najviše iconic Isi momenat bio kad smo bili zajedno u Tozi i bili jedni drugima mentalna podrška da preživimo taj haos.", author: "Zoli" },
  { text: "Nije baš vezano za rad, ali zauvek ću pamtiti što me je naučila par step-dancing plesnih koraka.", author: "Skrobi" },
  { text: "U lepom sećanju mi ostaje naše putešestvije do Berlina autom i druženje po Pragu, Berlinu i Bratislavi.", author: "Skrobi" },

  { text: "Jooooj, nisam ni verovao da će mi ovo toliko teško pasti! Koleginice, nedostajaćeš mi, ali već sada znaš da ćeš sve tračeve prva saznati, možda i pre mene! A van toga, kao što bi rekli u leksikonu iz osnovne škole: Sve znaš! Šta ti poručujem kroz pesmu: Pamti samo srećne dane!", author: "Dami" },
  { text: "Malo je teško odvojiti rad sa Isidorom od svega ostalog, pošto smo za ovih 10+ godina stigli da budemo kolege, saradnici, prijatelji, cimeri, saučesnici u raznim projektima i verovatno još ponešto što sam zaboravio.\n\nMislim da smo tokom godina zajedno prošli kroz dovoljno projekata, radova, rokova, Petnice, posla i raznih drugih avantura da više ni ne znam šta bih izdvojio kao najluđe – verovatno je najluđe to što i dalje dobrovoljno ulazimo u nove zajedničke stvari.\n\nPosebno mi je drago što smo došli do one tačke prijateljstva na kojoj jedno drugom uglavnom ne moramo mnogo da objašnjavamo šta mislimo – najčešće se uhvatimo već na pola rečenice, a kad ne, svakako imamo dovoljno volje da neku temu zajedno razvlačimo dok je ne istrošimo do kraja.", author: "Miloš" },
  { text: "S profesionalne strane – vrhunsko iskustvo. Najodgovornija osoba koju znam, koja će svoj posao odraditi fenomenalno. Sa privatne – jako, jako fun: fenomenalne debate o filmovima, muško-ženskim pravima i pravopisu (ovde mi je baš trebala pomoć).\n\nNajluđe što smo odradili? Upregnuli smo migrante da, noseći, pomognu u stvaranju sistema koji ih menja.\n\nNajviše će mi nedostajati prelepe rasprave sa vrlo jakim argumentima za pobediti – i sprdnja koja ide uz to.", author: "Jović" },
  { text: "Utorkom sam se besramno pridruživao AI timu na našem weekly sastanku, iako već nedeljama unazad nisam imao nijedan tiket. Ali to je bilo vreme da se čujem sa svojim AI saborcima, koji su me u kompletu dočekali ovog septembra u WDS-u, a sada ih ispraćam na ista vrata koja su mi ne samo širom otvorili, nego me i gurnuli kroz njih svojim toplim preporukama.\n\nE pa, Isidora, udarna iglo tog sjajnog tima, da ne pravim žalopojku od ovoga – samo da ti se zahvalim na rečima preporuke, na brizi dok ste sa mnom čekali lepu vest da sam postao otac, i na tome što ni svaki sledeći put nisi zaboravila da pitaš kako je beba, kako sam ja.\n\nNedostajaće tvoj ubrzani hod (slobodno mogu reći trčanje) kroz hol kancelarije, humor i „Agentkinja Izi”-like predavanja.\n\nŽelim ti 0 prekovremenih sati, stoga koristi ovaj naš poklon kao podsetnik na svoje dragoceno vreme i na to da je uvek pravo vreme za pivo u Motopabu. 🍺", author: "Luka" },
  { text: "Isi je jedna od najjačih osoba koje poznajem, uvek puna podrške i spremna da se bori za ono što smatra ispravnim. Mnogo volim da provodim vreme s njom, jer svojim osmehom i energijom ume da mi ulepša i najnaporniji dan. Baš će mi nedostajati na poslu, ali se radujem svim našim druženjima koja tek dolaze.", author: "Nemac" },
  { text: "Nedostajaće mi moja drugarica, januarska vodolija! Budi uvek svoja – drugačija i posebna! Srećno u nove pobede! Vidimo se na šminkanju! 💄", author: "Jovana" },
  { text: "Kad već nismo u kancu zajedno kao od početka, preživeću i ovo. Kao što sam spomenuo u jednom od review-a koje smo imali naviku da zajedno popunjavamo, Isidora je jedna od najboljih i najmoralnijih osoba koje možete sresti u životu. Ja sam imao sreću da je sretnem već na prvom poslu. Kancelarija 23 <3", author: "Deki" },
  { text: "Nedostajaće mi kada galami na mene.", author: "Joca" },
  // ⬆️⬆️⬆️  ------------------------------  ⬆️⬆️⬆️

];

/* ---------- SLIKE ----------
   cat: kancelarija | teren | bina | smesne | vanposla | ekipa
   top: true  = slika se vidi u tabu „Izdvojeno” (prikazuje se prva)
*/
const PHOTOS = [
  // Kancelarija 23
  { src: "kancelarija/kancelarija-01.jpg", cat: "kancelarija", cap: "Code review, ali sa stavom" },
  { src: "kancelarija/kancelarija-02.jpg", cat: "kancelarija", cap: "Standing desk, standing call" },
  { src: "kancelarija/kancelarija-03.jpg", cat: "kancelarija", cap: "Debugovanje sa poda – nova metodologija", top: true },
  { src: "kancelarija/kancelarija-04.jpg", cat: "kancelarija", cap: "Skrivanje od još jednog upitnika" },
  { src: "kancelarija/kancelarija-05.jpg", cat: "kancelarija", cap: "Sama u sali za sastanke. Weekly je otkazan?" },
  { src: "kancelarija/kancelarija-06.jpg", cat: "kancelarija", cap: "„Ko je opet spustio klimu?”" },
  { src: "kancelarija/kancelarija-07.jpg", cat: "kancelarija", cap: "Čeka da se model istrenira" },
  { src: "smesne/smesne-01.jpg", cat: "kancelarija", cap: "Lazy bag mode: ON", top: true },
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
  { src: "argus/argus-01.jpg", cat: "teren", cap: "Argus era: rad iz Venecije, jer smo zaboravili da zakažemo odmor" },

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
  { src: "smesne/smesne-11.jpg", cat: "bina", cap: "Interni talk: tišina u sali", top: true },
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
  { src: "smesne/smesne-16.jpg", cat: "smesne", cap: "Paso doble u kancelariji. Normalan utorak.", top: true },
  { src: "smesne/smesne-19.jpg", cat: "smesne", cap: "Kad ti daju papir sa još jednim pitanjem" },
  { src: "smesne/smesne-20.jpg", cat: "smesne", cap: "Tenis > stoni fudbal. Zauvek." },
  { src: "smesne/smesne-21.jpg", cat: "smesne", cap: "Servis!" },
  { src: "smesne/smesne-22.jpg", cat: "smesne", cap: "Kancelarija je dovoljno velika za teren" },
  { src: "smesne/smesne-23.jpg", cat: "smesne", cap: "Forehand iz open space-a" },
  { src: "nove/nove-05.jpg", cat: "smesne", cap: "Isidora, spikerka za WeFlow 🎙️" },
  { src: "nove/nove-06.jpg", cat: "smesne", cap: "Najbolji kadar je uvek ispod stola" },

  // Van posla
  { src: "vanposla/vanposla-02.jpg", cat: "vanposla", cap: "Mašna veća od motivacije za ponedeljak" },
  { src: "vanposla/vanposla-03.jpg", cat: "vanposla", cap: "Pauza na prozoru" },
  { src: "vanposla/vanposla-04.jpg", cat: "vanposla", cap: "Prag: konačno toplo?" },
  { src: "vanposla/vanposla-06.jpg", cat: "vanposla", cap: "Pomfrit, sok i dramatični pogledi u Berlinu" },
  { src: "vanposla/vanposla-11.jpg", cat: "vanposla", cap: "Cveće stiglo, srce puno" },
  { src: "vanposla/vanposla-12.jpg", cat: "vanposla", cap: "Ko je ovo poslao?! 🥹" },
  { src: "vanposla/vanposla-13.jpg", cat: "vanposla", cap: "Buket od kolega_inica" },
  { src: "vanposla/vanposla-14.jpg", cat: "vanposla", cap: "Srećan rođendan, 25 zauvek" },

  { src: "nove/nove-02.jpg", cat: "vanposla", cap: "Prag: fotografkinja na zadatku 📸" },
  { src: "nove/nove-04.jpg", cat: "vanposla", cap: "Prag: snima Staroměstsku kulu, ignoriše hladnoću" },
  { src: "nove/nove-03.jpg", cat: "vanposla", cap: "Prag: selfi sa praškim sokacima" },

  // Ekipa (grupne)
  { src: "nove/nove-01.jpg", cat: "ekipa", cap: "Prag noću, ekipa na okupu" },
  { src: "vanposla/vanposla-01.jpg", cat: "ekipa", cap: "Skrobi, Isi i Dami – put za Petnicu", top: true },
  { src: "vanposla/vanposla-05.jpg", cat: "ekipa", cap: "Ekipa na brodu", top: true },
  { src: "vanposla/vanposla-10.jpg", cat: "ekipa", cap: "Večera u kafani", top: true },
  { src: "vanposla/vanposla-15.jpg", cat: "ekipa", cap: "Postrojavanje" },
  { src: "vanposla/vanposla-17.jpg", cat: "ekipa", cap: "SPlitech ekipa" },
  { src: "vanposla/vanposla-18.jpg", cat: "ekipa", cap: "SPlitech: move beyond." },
  { src: "vanposla/vanposla-25.jpg", cat: "ekipa", cap: "SPlitech: posle talka" },
  { src: "vanposla/vanposla-26.jpg", cat: "ekipa", cap: "SPlitech: misija uspela" },
  { src: "smesne/smesne-14.jpg", cat: "ekipa", cap: "Cela firma, jedan ekran" },
  { src: "smesne/smesne-15.jpg", cat: "ekipa", cap: "Tim, slikaj se!" },
  { src: "smesne/smesne-24.jpg", cat: "ekipa", cap: "Slatki sto, slatka ekipa" },
  { src: "smesne/smesne-25.jpg", cat: "ekipa", cap: "Ko je uzeo poslednju krofnu?" },
  { src: "smesne/smesne-26.jpg", cat: "ekipa", cap: "Bebac Uki u poseti 👶💜", top: true },
  { src: "kancelarija/kancelarija-08.jpg", cat: "ekipa", cap: "Isidora, Deki i Dami – tračerski odsek Kancelarije 23", top: true },
  { src: "toza/toza-05.jpg", cat: "ekipa", cap: "Selfi sa terena" },
];

/* ---------- FRIZURE ----------
   pos = koji deo slike se vidi (x% y%) – da lice bude u kadru
*/
const HAIR = [
  { src: "smesne/hair-v1.jpg", pos: "50% 25%", name: "Kratka plava v1.0 ✂️", cap: "Inicijalni commit. Kratko, plavo, palac gore – spremna za Jiru (HaHa!)." },
  { src: "smesne/smesne-06.jpg", pos: "50% 45%", name: "Žuti alarm ⚠️", cap: "Toliko jarka da je stala ispod table OPASNOST – OTROV. Slučajno? Ne verujemo." },
  { src: "kancelarija/kancelarija-07.jpg", pos: "45% 30%", name: "Bakarna faza 🦊", cap: "Rebrending. Kolege su je dva dana tražile po kancelariji." },
  { src: "alpack/alpack-04.jpg", pos: "38% 70%", name: "Ombre 🍯", cap: "Bakar izlazi, med ulazi. Prelazni rok, ali sa stilom." },
  { src: "smesne/smesne-17.jpg", pos: "50% 30%", name: "Pletenica 🥨", cap: "Prirodna boja + pletenica = mod „Ne smetaš, reci”." },
  { src: "vanposla/vanposla-13.jpg", pos: "55% 22%", name: "Šiška + naočare 🤓", cap: "Najopasnija kombinacija: izgleda kao da je već pročitala tvoj kod." },
  { src: "smesne/smesne-19.jpg", pos: "50% 25%", name: "Plavi talasi 🌊", cap: "Talasi – jedini koje priznaje, jer more je ionako prehladno." },
  { src: "vanposla/vanposla-07.jpg", pos: "50% 35%", name: "Berlin blond 💅", cap: "Konferencijska verzija. Optimizovana za scenu." },
  { src: "smesne/hair-v9.jpg", pos: "50% 20%", name: "Agentkinja Izi 🕶️ (latest)", cap: "Najnoviji release: zalizan rep i „Tajni dosije agenta Izija” na ekranu. Sledeća misija je strogo poverljiva. Changelog: nema." },
];

/* ---------- IsidoraGPT ----------
   keys = reči na koje reaguje; reply = šta „Isidora” kaže
*/
const CHAT = [
  { keys: ["rag", "llm", "ai", "model", "gpt", "embedding", "vektor", "ml", "chatgpt"], reply: ["Dakle, RAG nije isto što i LLM...", "Dakle, RAG nije isto što i LLM... Hajde ispočetka."] },
  { keys: ["hladno", "zima", "temperatura", "toplo", "more", "klima", "stepeni"], reply: ["Hladno mi je.", "Ko smanjuje grejanje po ovoj firmi...?"] },
  { keys: ["grejanje", "radijator", "termostat"], reply: ["Ko smanjuje grejanje po ovoj firmi...?"] },
  { keys: ["jesti", "ručak", "rucak", "hrana", "doručak", "dorucak", "burger", "pica", "gladna", "gladan", "jelo", "užina", "uzina"], reply: ["Gladna sam."] },
  { keys: ["ne slažem", "ne slazem", "mislim da", "nisi u pravu", "pogrešno", "pogresno", "ali", "rasprav"], reply: ["Ja tebe međusobno uvažavam, ali..."] },
  { keys: ["stoni", "fudbal", "loptic", "partija", "igra"], reply: ["Ukrašću im loptice za stoni fudbal."] },
  { keys: ["sastanak", "meeting", "weekly", "call", "poziv", "teams", "sync", "standup"], reply: ["Kad mi je ovaj sastanak?", "Sastanak pre 11???"] },
  { keys: ["jutro", "rano", "9h", "10h", "devet", "deset", "11"], reply: ["Sastanak pre 11???"] },
  { keys: ["muzika", "pesma", "pevač", "pevac", "rozga", "severina", "žurka", "zurka", "izlazak", "ples"], reply: ["Rozga vs Severina?"] },
  { keys: ["jira", "tiket", "task", "sprint", "board", "backlog"], reply: ["Jira tiketi – done. ✅"] },
  { keys: ["izveštaj", "izvestaj", "report", "dokument", "rezultat", "šef", "sef", "rok", "deadline"], reply: ["Napravila sam izveštaj."] },
];
const CHAT_FALLBACK = [
  "Dakle, RAG nije isto što i LLM...", "Hladno mi je.", "Ko smanjuje grejanje po ovoj firmi...?",
  "Gladna sam.", "Ja tebe međusobno uvažavam, ali...", "Ukrašću im loptice za stoni fudbal.",
  "Kad mi je ovaj sastanak?", "Rozga vs Severina?", "Jira tiketi – done. ✅",
  "Napravila sam izveštaj.", "Sastanak pre 11???",
];
