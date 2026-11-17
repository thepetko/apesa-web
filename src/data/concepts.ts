import { programs, emailLink } from './home';

export type Concept = 'a' | 'b';
export const concepts: Record<Concept, { name: string; description: string }> = {
  a: { name: 'Blízko praxe', description: 'Fotografický úvod, ľudia pri učení a otvorená ponuka vzdelávania.' },
  b: { name: 'Priestor pre učenie', description: 'Výrazná modrá, vrstvené fotografie a vzdelávanie ako spoločná skúsenosť.' },
};
export const conceptNavigation = [
  { label: 'Vzdelávanie', href: '#vzdelavanie' },
  { label: 'Program Azor', href: '#azor' },
  { label: 'Kontakt', href: '#kontakt' },
];
export const azor = {
  title: 'Môj psík Azor dáva pozor!',
  audience: 'Vzdelávanie školiteľov',
  lead: 'Deti učia psíka. A pritom sa učia samy.',
  description: 'Spoznajte program, ktorý rozvíja pozornosť, pamäť a ďalšie zručnosti detí cez spoločnú hru. Pre odborníkov, ktorí pracujú s deťmi v predškolskom veku.',
  points: [
    { title: 'Hra, ktorá má zmysel', text: 'Deti sa stávajú trénermi plyšového psíka. Úlohy dostávajú zmysel v spoločnom príbehu.' },
    { title: 'Priestor aj na chybu', text: 'Šteniatko sa ešte len učí. Chyba je prirodzenou súčasťou tréningu.' },
    { title: 'Zo škôlky aj domov', text: 'Aktivity prepájajú prácu v materskej škole so spoločnou hrou detí a rodičov.' },
  ],
  detail: 'Vzdelávanie je určené budúcim školiteľom programu. Samotný program pre deti vo veku 5 až 7 rokov prebieha počas ôsmich týždňov a využíva tematickú a rolovú hru, plyšového psíka a autorské pracovné listy. O obsahu školenia, termíne a podmienkach účasti sa informujte v APESA.',
  source: 'https://azordavapozor.sk/',
  inquiry: emailLink(programs[0].emailSubject),
  photoCaption: 'Zo života programu Môj psík Azor dáva pozor!',
};
export const conceptCopy = {
  hero: { title: 'Vzdelávanie, ktoré prenesiete do praxe.', description: 'Pre pedagógov, psychológov a všetkých, ktorí pomáhajú deťom a mladým ľuďom rásť.', action: 'Pozrieť vzdelávanie' },
  education: { title: 'Čo práve riešite vo svojej praxi?', description: 'Pozornosť detí. Vzťahy v skupine. Priestor na spoločné učenie. Vyberte si tému, ktorá je blízka vašej práci.' },
  image: { alt: 'Ilustračná scéna: pedagógovia si v triede spoločne skúšajú vzdelávaciu aktivitu.', caption: 'Ilustračná fotografia · vytvorená pomocou AI' },
};
