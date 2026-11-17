# APESA — dva návrhy nového webu

Funkčné návrhy na vizuálne posúdenie organizáciou. Obsahujú úvod, ponuku programu Azor, nadväznosť na vzdelávanie k vedeniu tínedžerských skupín a kontakt.

- **Návrh A — Blízko praxe:** https://thepetko.github.io/apesa-web/navrhy/a/
- **Návrh B — Priestor pre učenie:** https://thepetko.github.io/apesa-web/navrhy/b/

Hlavný odkaz https://thepetko.github.io/apesa-web/ otvorí návrh A. Horná lišta prepína oba smery. Nejde o finálny web organizácie. Fotografia úvodu je dočasná AI ilustrácia a je tak označená; fotografie programu Azor pochádzajú z jeho webu. Zdrojové odkazy sú v ASSETS.md.

## Lokálne spustenie

Node.js 24, npm. Astro 7.4.12, TypeScript a CSS; statický web bez Reactu a externých fontov.

```sh
npm ci
npm run dev
```

Lokálna adresa: http://127.0.0.1:4321/apesa-web/

```sh
npm run check
npm run build
npm run preview
```

## Úprava obsahu

- `src/data/concepts.ts`: texty porovnávacích návrhov a údaje programu Azor.
- `src/data/home.ts`: kontakty APESA a existujúca ponuka vzdelávania.
- `src/pages/navrhy/[variant].astro`: rozloženie návrhov A/B.
- `src/styles/concepts.css`: vzhľad a responzívne pravidlá.
- `src/assets`: pôvodné logo a použité fotografie; Astro pri zostavení vytvára responzívne WebP varianty.
- `public/fonts`: lokálne fonty Nunito Sans a licencia OFL.

## Publikovanie

GitHub Pages cez `.github/workflows/deploy.yml`. Každý push do `main` spustí kontrolu typov, zostavenie a nasadenie. Nastavenie `site` a `base` v `astro.config.mjs` zodpovedá projektovej adrese `/apesa-web/` podľa [oficiálneho návodu Astro](https://docs.astro.build/en/guides/deploy/github/).

Všetky stránky majú `noindex, nofollow`; je to pokyn pre vyhľadávače, nie ochrana prístupu. Náhľad je dostupný cez verejný odkaz. Obsah formulára sa neodosiela: tlačidlá záujmu otvoria e-mailový klient s adresou APESA a predmetom programu.
