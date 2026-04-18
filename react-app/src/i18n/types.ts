export type Lang = "en" | "de" | "fr";

export interface FaqItem {
  c: "clinical" | "setup" | "account" | "security";
  q: string;
  a: string;
}

export interface ReleaseGroup { h: string; items: string[]; }
export interface ReleaseItem {
  ver: string;
  date: string;
  tag: "new" | "improved" | "fixed" | "security";
  title: string;
  summary: string;
  groups: ReleaseGroup[];
}

export interface ManualNotifType { n: string; d: string; }
export interface ManualItem { t: string; d: string; }

export interface Translations {
  meta: { lang: string; dir: "ltr" | "rtl"; siteTitle: string; siteDescription: string };
  nav: { home: string; manual: string; faq: string; releases: string; contact: string; login: string; requestDemo: string };
  lang: { switch: string; en: string; de: string; fr: string };
  hero: {
    eyebrow: string; title1: string; title2: string; sub: string;
    ctaPrimary: string; ctaSecondary: string;
    meta1: string; meta2: string; meta3: string;
    dashTitle: string; dashSubtitle: string;
    hrLabel: string; brLabel: string; bedLabel: string;
    statusOk: string; statusWarn: string;
  };
  trust: { label: string };
  features: {
    eyebrow: string; title: string; sub: string;
    f1title: string; f1body: string;
    f2title: string; f2body: string;
    f3title: string; f3body: string;
    f4title: string; f4body: string;
    f5title: string; f5body: string;
    f6title: string; f6body: string;
  };
  how: {
    eyebrow: string; title: string; sub: string;
    s1t: string; s1b: string; s2t: string; s2b: string;
    s3t: string; s3b: string; s4t: string; s4b: string;
    mockTitle: string; mockHR: string; mockBR: string; mockBed: string;
    mockLast: string; mockZone: string; mockZoneVal: string;
  };
  stats: {
    eyebrow: string; title: string; sub: string;
    s1n: string; s1l: string; s2n: string; s2l: string;
    s3n: string; s3l: string; s4n: string; s4l: string;
  };
  cta: { title: string; sub: string; primary: string; secondary: string };
  footer: {
    tagline: string; product: string; resources: string; company: string;
    productLinks: string[]; resourcesLinks: string[]; companyLinks: string[];
    copyright: string; legal: string[];
  };
  download: {
    pdf: string;
    pdfSub: string;
    pdfMeta: string;
    pdfCta: string;
  };
  manual: ManualContent;
  faq: FaqContent;
  releases: ReleasesContent;
}

export interface ManualContent {
  breadcrumb: string; eyebrow: string; title: string; intro: string; tocTitle: string;
  sections: Record<
    "s1" | "s11" | "s12" | "s13" | "s2" | "s21" | "s22" | "s23" | "s24" |
    "s3" | "s31" | "s32" | "s4" | "s41" | "s42" | "s43" | "s44" |
    "s5" | "s51" | "s52" | "s53" | "s6" | "s7" | "s71" | "s72" | "s73" |
    "s8" | "s9",
    string
  >;
  s1: {
    lead: string;
    scope: { title: string; body: string };
    safety: { title: string; points: string[]; warn: string };
    roles: { title: string; lead: string; tHead: string[]; rows: string[][]; key: string };
    abbr: { title: string; rows: string[][] };
  };
  s2: {
    login: { title: string; body: string; steps: string[] };
    menu: { title: string; body: string; items: string[] };
    navbar: { title: string; body: string; items: string[] };
    dash: {
      title: string; lead: string; zones: string; views: string; filter: string;
      search: string; color: string; sideTitle: string; sideBody: string;
    };
  };
  s3: {
    lead: string; columns: string[];
    searchTitle: string; searchBody: string;
    createTitle: string; createBody: string; createFields: string[];
    createConflict: string; createManual: string; createSave: string;
  };
  s4: {
    lead: string;
    overview: { title: string; body: string; details: string[]; indiv: string[] };
    trends: { title: string; body: string; missing: string };
    notif: { title: string; body: string; presets: string[]; review: string; filter: string };
    audit: { title: string; body: string };
  };
  s5: {
    lead: string; tabs: string[];
    overview: { title: string; body: string };
    medical: { title: string; body: string; types: ManualNotifType[]; defaults: string };
    bed: { title: string; body: string; rules: string[]; bedtime: string };
  };
  s6: { lead: string; cols: string[]; detail: string };
  s7: {
    lead: string;
    zones: { title: string; body: string };
    locations: { title: string; body: string };
    users: { title: string; body: string };
  };
  s8: { lead: string; items: string[]; save: string };
  s9: { lead: string; items: ManualItem[]; faqCta: string };
}

export interface FaqContent {
  breadcrumb: string; eyebrow: string; title: string; sub: string;
  searchPlaceholder: string;
  categories: Record<"all" | "clinical" | "setup" | "account" | "security", string>;
  items: FaqItem[];
  contactTitle: string; contactSub: string;
  emailLabel: string; phoneLabel: string;
  hoursLabel: string; hoursValue: string;
}

export interface ReleasesContent {
  breadcrumb: string; eyebrow: string; title: string; sub: string;
  filters: Record<"all" | "new" | "improved" | "fixed" | "security", string>;
  subscribe: string; sideTitle: string; sideSub: string;
  items: ReleaseItem[];
}
