export interface ProgramFormat {
  label: string;
  name: string;
  topics: string[];
}

export interface Program {
  id: string;
  title: string;
  audience: string;
  context?: string;
  description: string;
  detail: string;
  emailSubject: string;
  formats: ProgramFormat[];
  sourceUrl: string;
}

export const organization = {
  name: 'APESA',
  legalName: 'APESA · občianske združenie',
  email: 'ladislav.olik@apesa.sk',
  chair: 'Ing. Ladislav Olík',
  ico: '57 041 652',
  dic: '2122575928',
  website: 'https://www.apesa.sk/',
  calendar: 'https://calendar.google.com/calendar/embed?src=ladislav.olik%40apesa.sk&ctz=Europe%2FPrague',
};

export const navigation = [
  { label: 'Vzdelávanie', href: '#vzdelavanie' },
  { label: 'Náš prístup', href: '#nas-pristup' },
  { label: 'O APESA', href: '#o-apesa' },
  { label: 'Kontakt', href: '#kontakt' },
];

export const copy = {
  title: 'APESA — vzdelávanie, ktoré prenesiete do praxe',
  description: 'Praktické vzdelávanie pre pedagógov, psychológov a pomáhajúce profesie. Spoznajte program Môj psík Azor dáva pozor! a vzdelávanie k vedeniu tínedžerských skupín.',
  hero: {
    line: 'Vzdelávanie, ktoré',
    emphasis: 'prenesiete do praxe.',
    description: 'Pre pedagógov, psychológov a všetkých, ktorí pomáhajú deťom a mladým ľuďom rásť.',
    action: 'Pozrieť vzdelávanie',
    imageAlt: 'Ilustračná fotografia dospelých diskutujúcich pri spoločnom stole na workshope.',
    imageCaption: 'Ilustračná fotografia',
    imageNote: 'Priestor pre skúsenosti. Aj tie vaše.',
  },
  education: {
    title: 'Čo chcete priniesť\ndo svojej praxe?',
    description: 'Vyberte si tému, ktorá je blízka vašej práci. Spoznajte obsah vzdelávania a napíšte nám.',
    inquiry: 'Informovať sa o vzdelávaní',
    details: 'Čo vzdelávanie zahŕňa',
    terms: 'Termín a podmienky účasti si overte priamo u nás.',
    calendar: 'Pozrieť kalendár aktivít',
    azorLink: 'Spoznať program Azor',
  },
  approach: {
    title: 'Skúsenosti zdieľame.\nPoznatky používame.',
    description: 'Vo vzdelávaní prepájame praktické témy, skúsenosti z terénu a priestor na spoločné premýšľanie. Podporujeme odborný rast aj starostlivosť o vlastné duševné zdravie.',
    stepsTitle: 'Od témy k prvému kontaktu',
    steps: [
      { title: 'Vyberte si tému', text: 'Čo práve potrebujete pri práci s deťmi alebo dospievajúcimi?' },
      { title: 'Spoznajte obsah', text: 'Pozrite si zameranie programu a jednotlivé formy vzdelávania.' },
      { title: 'Ozvite sa nám', text: 'Napíšte nám, ktoré vzdelávanie vás zaujalo.' },
    ],
  },
  about: {
    title: 'Odborníci. Rodiny.\nKomunity. Spoločne.',
    description: 'APESA spája ľudí, ktorým záleží na duševnom zdraví, vzdelávaní a kvalitných vzťahoch. Podporujeme prostredie, v ktorom môžu deti rásť bezpečne, s radosťou a rešpektom.',
    link: 'Spoznajte APESA',
    areasTitle: 'Vzdelávaním sa to nekončí',
    areasDescription: 'Venujeme sa aj ďalším oblastiam podpory detí, rodín a odborníkov.',
  },
  contact: {
    title: 'Nájdime tému\npre vašu prax.',
    description: 'Zaujalo vás vzdelávanie alebo hľadáte priestor na spoluprácu? Napíšte nám, čomu sa venujete a čo vás zaujíma.',
    action: 'Napísať APESA',
    emailSubject: 'Záujem o vzdelávanie a spoluprácu s APESA',
  },
  footer: {
    chairRole: 'predseda združenia',
    back: 'Späť hore',
    motto: 'K zručnosti, cez skúsenosť, s múdrosťou.',
    calendar: 'Kalendár aktivít',
  },
};

export const programs: Program[] = [
  {
    id: 'azor',
    title: 'Môj psík Azor\ndáva pozor!',
    audience: 'Vzdelávanie školiteľov',
    context: 'Pre prácu s deťmi v škôlkach, školách a rodinách.',
    description: 'Podporte pozornosť, pamäť a exekutívne funkcie detí prostredníctvom tematickej a rolovej hry.',
    detail: 'Deti sa v osemtýždňovom stimulačnom programe stávajú trénermi psíka Azorka. Tréningové výzvy a autorské pracovné listy získavajú zmysel v spoločnej hre. APESA je odborným garantom a realizátorom programu a podporuje jeho využitie v škôlkach, školách aj rodinách.',
    emailSubject: 'Záujem o vzdelávanie školiteľov — Môj psík Azor dáva pozor!',
    formats: [],
    sourceUrl: 'https://www.azordavapozor.sk/',
  },
  {
    id: 'tinedzerske-skupiny',
    title: 'Ako viesť\ntínedžerské skupiny',
    audience: 'Pre pomáhajúce profesie',
    description: 'Od prvého stretnutia po náročné situácie. Spoznajte možnosti, ako vytvárať bezpečné prostredie a pracovať so skupinou dospievajúcich.',
    detail: 'Vzdelávanie tvoria dve formy: online webinár zameraný na tvorbu a vedenie skupín a prezenčný workshop so zážitkovými aktivitami. O termínoch a možnostiach účasti vás radi informujeme e-mailom.',
    emailSubject: 'Záujem o vzdelávanie — vedenie tínedžerských skupín',
    sourceUrl: 'https://www.apesa.sk/vzdel%C3%A1vanie-odborn%C3%ADkov',
    formats: [
      {
        label: 'Online webinár',
        name: 'Od nápadu k praxi: Tvorba a vedenie tínedžerských skupín',
        topics: ['Ako prilákať tínedžerov', 'Bezpečné a dôverné prostredie', 'Štruktúra skupiny a výber aktivít', 'Konflikty a náročné situácie'],
      },
      {
        label: 'Prezenčný workshop',
        name: 'Zážitkové aktivity s dospievajúcimi',
        topics: ['Začiatok skupiny a tvorba bezpečia', 'Interakcia, komunikácia a tímová spolupráca', 'Sociálne siete a sebaobraz tínedžerov', 'Zvládanie stresu a psychohygiena'],
      },
    ],
  },
];

export const areas = [
  { label: 'Duševné zdravie a wellbeing', href: 'https://www.apesa.sk/du%C5%A1evn%C3%A9-zdravie-wellbeing' },
  { label: 'Podpora rodiny', href: 'https://www.apesa.sk/podpora-rodiny' },
  { label: 'Komunitné a voľnočasové aktivity', href: 'https://www.apesa.sk/komunitn%C3%A9-a-vo%C4%BEno%C4%8Dasov%C3%A9-aktivity' },
  { label: 'Spolupráca odborníkov', href: 'https://www.apesa.sk/spolupr%C3%A1ca-odborn%C3%ADkov' },
  { label: 'Rozvoj zručností a kreativita', href: 'https://www.apesa.sk/rozvoj-zru%C4%8Dnost%C3%AD-kreativita' },
];

export const emailLink = (subject: string) => `mailto:${organization.email}?subject=${encodeURIComponent(subject)}`;
