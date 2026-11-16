# Sajt za Isidoru 💜

Statički sajt (HTML/CSS/JS), radi na besplatnom GitHub Pages.

## Objavljivanje (besplatno, .github.io)
1. Na GitHub-u napravi novi **public** repo, npr. `isidora`.
2. Uploaduj SAV sadržaj ovog foldera (index.html, style.css, app.js, data.js, .nojekyll, img/) u root repoa
   (Add file → Upload files, ili `git push`).
3. Settings → Pages → Source: **Deploy from a branch** → Branch: `main` / `(root)` → Save.
4. Za minut-dva sajt je na: `https://<tvoj-username>.github.io/isidora/`

## Dodavanje citata kolega
Otvori `data.js` i u niz `QUOTES`, između strelica, dodaj:
```js
{ text: "Poruka za Isidoru", author: "Ime", tag: "nova" },
```
Čim postoji bar jedna nova poruka, kartica „uskoro” nestaje.

## Dodavanje slika
1. Velika slika → `img/<folder>/ime.jpg`, umanjena (≈640px) → `img/thumbs/<folder>/ime.jpg`
2. U `data.js` → `PHOTOS` dodaj red: `{ src: "<folder>/ime.jpg", cat: "ekipa", cap: "Opis" },`
   Kategorije: kancelarija, teren, bina, smesne, vanposla, ekipa.
