// Static site generator for Haithem Mezni's academic website.
// Usage: node build.js [https://your-site-address]
const fs = require("fs");
const path = require("path");
const C = require("./content.js");
const lucide = require("lucide");
const simpleIcons = require("simple-icons");

const SITE_URL = (process.argv[2] || "https://VOTRE-SITE").replace(/\/$/, "");
const OUT = path.join(__dirname, "dist");
const PREVIEW_FILE = path.join(__dirname, "preview.html");
const BUILD_DATE = new Date();
const LANGS = ["en", "fr"];
const PAGES = ["home", "research", "publications", "code", "teaching", "cv", "contact"];
const FILE = p => (p === "home" ? "index" : p) + ".html";

/* ---------------- Interface text ---------------- */
const T = {
en: {
  name: "Haithem Mezni", role: "Associate Professor of Computer Science",
  nav: {home:"Home", research:"Research", publications:"Publications", code:"Code", teaching:"Teaching", cv:"CV", contact:"Contact"},
  title: {home:"Haithem Mezni, Associate Professor of Computer Science", research:"Research", publications:"Publications", code:"Source code and implementations", teaching:"Teaching", cv:"Curriculum vitae", contact:"Contact"},
  desc: {
    home:"Haithem Mezni, Associate Professor of Computer Science, University of Jendouba (Tunisia): service composition, recommender systems, cloud and agentic AI.",
    research:"Research areas, funded projects, guest editing, events, reviewing and supervision of Haithem Mezni, University of Jendouba.",
    publications:"Complete list of publications of Haithem Mezni: journal articles, conference papers, book chapters, with DOI and BibTeX.",
    code:"Open-source implementations of the approaches of Haithem Mezni and his team: service composition, LLM agents, MCP toolkits, IoT and drone delivery.",
    teaching:"Courses taught by Haithem Mezni since 2005 at the University of Jendouba, Taibah University and other institutions.",
    cv:"Education, positions and academic service of Haithem Mezni, Associate Professor at the University of Jendouba.",
    contact:"Contact Haithem Mezni by email, phone, WhatsApp or through the contact form."
  },
  skip: "Skip to content", menu: "Main menu", switchLang: "Version française", langShort: "FR", theme: "Switch between light and dark mode",
  affil: "University of Jendouba, Tunisia", lab: "SMART Lab, Service & Cloud Computing team",
  contactBtn: "Contact me", cvBtn: "Download CV", interests: "Research interests",
  about: "About", glance: "At a glance",
  tiles: { pubs:"publications", proj:"funded research projects", events:"events organized or chaired", students:"PhD and master’s students supervised" },
  news: "News", olderNews: "Earlier news", allEvents: "All events and activities",
  areasIntro: "My research areas include (but are not limited to):",
  rIntro: "I work in service-oriented computing: how services are described, selected, composed, deployed in the cloud, adapted at runtime and recommended to users.",
  onThisPage: "On this page",
  sec: { areas:"Research areas", projects:"Funded projects", editing:"Guest editing", events:"Events", reviewing:"Reviewing", supervision:"Supervision" },
  evGroups: { org:"Organization", chair:"Chairing", pc:"Program committees" },
  evRole: { org:"Organizer", chair:"Chair", pc:"Committee" },
  reviewText: "I review for journals and conferences including:",
  phd: "PhD students", msc: "Master’s students", showMsc: "Show the master’s theses", origTitles: "",
  mapCap: "Research map: select a topic to filter the list, and select it again to clear.",
  topicsLabel: "Topics", typeLabel: "Publication type", searchLabel: "Search publications",
  search: "Search by title, author or venue",
  kinds: { all:"All", j:"Journal and editorial papers", c:"Book chapters and conference papers" },
  kindOne: { j:"Journal", c:"Conference", ch:"Book chapter" },
  showing: "{n} of {t} entries", onTopic: " on “{x}”", clear: "Clear filters",
  noMatch: "No publication matches these filters. Clear the search or choose another topic.",
  papers: "papers", publisher: "Publisher page", copyBib: "Copy BibTeX", copied: "Copied", bibHelp: "Select the text below to copy it.",
  tIntro: "I have taught computer science since 2005, from introductory programming to master’s courses on distributed systems, service-oriented architectures and Web intelligence.",
  current: "Current teaching", masterLvl: "Master’s level", underLvl: "Undergraduate level", now: "Current",
  cvIntro: "A summary of my education, positions and academic service. The full CV is available as a PDF.",
  education: "Education", positions: "Positions", service: "Academic service", other: "Other activities", present: "present",
  ways: "Reach me directly", formTitle: "Send me a message",
  m: { email:"Institutional email", email2:"Personal email", primary:"Preferred", phone:"Phone", wa:"WhatsApp",
       write:"Write an email", call:"Call", chat:"Open a chat" },
  f: { name:"Your name", email:"Your email", topic:"Topic", msg:"Message", send:"Send message",
       topics:["Research collaboration","PhD or master’s supervision","Teaching","Reviewing or events","Other"],
       eName:"Enter your name.", eEmail:"Enter a valid email address.", eMsg:"Write a message of at least 10 characters.",
       sent:"Thank you, your message has been sent.",
       prefix:"[Website]",
       preview:"This preview cannot send messages. On the published website, the form sends your message directly. Meanwhile you can send it with your email app or WhatsApp:",
       viaMail:"Send by email", viaWa:"Send on WhatsApp", waHello:"Hello Dr. Mezni, " },
  footer: { rights:"Haithem Mezni, University of Jendouba", updated:"Last updated", profiles:"Profiles" },
  code: { intro:"Source code, datasets and experiments of our approaches, published on GitHub so that the results can be reproduced and reused.",
          org:"Research code of Haithem Mezni and his team", view:"View on GitHub", impl:"Implementations", other:"Other repositories",
          source:"Source code", paper:"Paper", pub:"Public", repos:"repositories" },
  dateFmt: d => d.toLocaleDateString("en-GB", {day:"numeric", month:"long", year:"numeric"})
},
fr: {
  name: "Haithem Mezni", role: "Maître de conférences en informatique",
  nav: {home:"Accueil", research:"Recherche", publications:"Publications", code:"Codes", teaching:"Enseignement", cv:"CV", contact:"Contact"},
  title: {home:"Haithem Mezni, maître de conférences en informatique", research:"Recherche", publications:"Publications", code:"Codes sources et implémentations", teaching:"Enseignement", cv:"Curriculum vitae", contact:"Contact"},
  desc: {
    home:"Haithem Mezni, maître de conférences en informatique, Université de Jendouba (Tunisie) : composition de services, recommandation, cloud et IA agentique.",
    research:"Axes de recherche, projets financés, numéros spéciaux, événements, expertise et encadrement de Haithem Mezni, Université de Jendouba.",
    publications:"Liste complète des publications de Haithem Mezni : articles de revues, communications, chapitres de livres, avec DOI et BibTeX.",
    code:"Implémentations open source des approches de Haithem Mezni et de son équipe : composition de services, agents LLM, outils MCP, IoT et livraison par drone.",
    teaching:"Enseignements assurés par Haithem Mezni depuis 2005 à l’Université de Jendouba, à l’Université Taibah et dans d’autres établissements.",
    cv:"Formation, parcours et responsabilités de Haithem Mezni, maître de conférences à l’Université de Jendouba.",
    contact:"Contacter Haithem Mezni par email, téléphone, WhatsApp ou via le formulaire de contact."
  },
  skip: "Aller au contenu", menu: "Menu principal", switchLang: "English version", langShort: "EN", theme: "Basculer entre mode clair et mode sombre",
  affil: "Université de Jendouba, Tunisie", lab: "Laboratoire SMART, équipe Service & Cloud Computing",
  contactBtn: "Me contacter", cvBtn: "Télécharger le CV", interests: "Thèmes de recherche",
  about: "Présentation", glance: "En bref",
  tiles: { pubs:"publications", proj:"projets de recherche financés", events:"événements organisés ou présidés", students:"doctorants et étudiants de master encadrés" },
  news: "Actualités", olderNews: "Actualités précédentes", allEvents: "Tous les événements et activités",
  areasIntro: "Mes axes de recherche incluent notamment :",
  rIntro: "Je travaille en informatique orientée services : comment les services sont décrits, sélectionnés, composés, déployés dans le cloud, adaptés à l’exécution et recommandés aux utilisateurs.",
  onThisPage: "Sur cette page",
  sec: { areas:"Axes de recherche", projects:"Projets financés", editing:"Numéros spéciaux", events:"Événements", reviewing:"Expertise", supervision:"Encadrement" },
  evGroups: { org:"Organisation", chair:"Présidence", pc:"Comités de programme" },
  evRole: { org:"Organisateur", chair:"Président", pc:"Comité" },
  reviewText: "J’évalue des articles pour des revues et conférences, dont :",
  phd: "Doctorants", msc: "Étudiants de master", showMsc: "Afficher les mémoires de master", origTitles: "Les sujets sont indiqués dans leur langue d’origine.",
  mapCap: "Carte de recherche : choisissez un thème pour filtrer la liste, puis choisissez-le à nouveau pour annuler.",
  topicsLabel: "Thèmes", typeLabel: "Type de publication", searchLabel: "Rechercher une publication",
  search: "Rechercher par titre, auteur ou revue",
  kinds: { all:"Tout", j:"Articles de revues et éditoriaux", c:"Chapitres de livres et communications" },
  kindOne: { j:"Revue", c:"Conférence", ch:"Chapitre de livre" },
  showing: "{n} entrées sur {t}", onTopic: " sur le thème «\u00A0{x}\u00A0»", clear: "Effacer les filtres",
  noMatch: "Aucune publication ne correspond à ces filtres. Effacez la recherche ou choisissez un autre thème.",
  papers: "articles", publisher: "Page de l’éditeur", copyBib: "Copier le BibTeX", copied: "Copié", bibHelp: "Sélectionnez le texte ci-dessous pour le copier.",
  tIntro: "J’enseigne l’informatique depuis 2005, de l’initiation à la programmation jusqu’aux cours de master sur les systèmes distribués, les architectures orientées services et l’intelligence du Web.",
  current: "Enseignements actuels", masterLvl: "Niveau master", underLvl: "Niveau licence", now: "En cours",
  cvIntro: "Un résumé de ma formation, de mon parcours et de mes responsabilités. Le CV complet est disponible en PDF.",
  education: "Formation", positions: "Parcours professionnel", service: "Responsabilités universitaires", other: "Autres activités", present: "aujourd’hui",
  ways: "Me joindre directement", formTitle: "M’envoyer un message",
  m: { email:"Email institutionnel", email2:"Email personnel", primary:"À privilégier", phone:"Téléphone", wa:"WhatsApp",
       write:"Écrire un email", call:"Appeler", chat:"Ouvrir une discussion" },
  f: { name:"Votre nom", email:"Votre email", topic:"Objet", msg:"Message", send:"Envoyer le message",
       topics:["Collaboration de recherche","Encadrement de thèse ou de master","Enseignement","Expertise ou événements","Autre"],
       eName:"Indiquez votre nom.", eEmail:"Indiquez une adresse email valide.", eMsg:"Écrivez un message d’au moins 10 caractères.",
       sent:"Merci, votre message a bien été envoyé.",
       prefix:"[Site web]",
       preview:"Cet aperçu ne peut pas envoyer de messages. Sur le site publié, le formulaire envoie votre message directement. En attendant, vous pouvez l’envoyer avec votre messagerie ou WhatsApp :",
       viaMail:"Envoyer par email", viaWa:"Envoyer sur WhatsApp", waHello:"Bonjour Dr Mezni, " },
  footer: { rights:"Haithem Mezni, Université de Jendouba", updated:"Dernière mise à jour", profiles:"Profils" },
  code: { intro:"Codes sources, jeux de données et expérimentations de nos approches, publiés sur GitHub pour que les résultats puissent être reproduits et réutilisés.",
          org:"Codes de recherche de Haithem Mezni et de son équipe", view:"Voir sur GitHub", impl:"Implémentations", other:"Autres dépôts",
          source:"Code source", paper:"Article", pub:"Public", repos:"dépôts" },
  dateFmt: d => d.toLocaleDateString("fr-FR", {day:"numeric", month:"long", year:"numeric"})
}};

/* ---------------- Helpers ---------------- */
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const entities = s => [...s].map(ch => `&#${ch.charCodeAt(0)};`).join(""); // comment K2: emails written as character entities
const norm = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[\u2010-\u2015-]/g, " ");
const toPascal = n => n.replace(/(^|-)([a-z0-9])/g, (m, a, b) => b.toUpperCase());
const USED = new Set();
function I(name, cls = "") { USED.add(name); return `<svg class="i ${cls}" aria-hidden="true" focusable="false"><use href="#i-${name}"/></svg>`; }
// Brand icons (Simple Icons, CC0): "si-googlescholar", "si-orcid", "si-dblp", "si-github", "si-whatsapp", "si-gmail"
const B = (slug, cls = "") => I("si-" + slug, `brand b-${slug} ${cls}`);
function sprite(names) {
  const sym = [...names].sort().map(n => {
    if (n.startsWith("si-")) {
      const s = simpleIcons["si" + n.slice(3).charAt(0).toUpperCase() + n.slice(4)];
      if (!s) throw new Error("Unknown brand icon " + n);
      return `<symbol id="i-${n}" viewBox="0 0 24 24" fill="currentColor"><path d="${s.path}"/></symbol>`;
    }
    const icon = lucide.icons[toPascal(n)];
    if (!icon) throw new Error("Unknown icon " + n);
    const kids = icon[2].map(([tag, attrs]) => `<${tag} ${Object.entries(attrs).map(([k, v]) => `${k}="${v}"`).join(" ")}/>`).join("");
    return `<symbol id="i-${n}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${kids}</symbol>`;
  }).join("");
  return `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>${sym}</defs></svg>`;
}
const doiOf = url => { const m = url && url.match(/(10\.\d{4,9}\/[^\s?#]+)/); return m ? m[1].replace(/\/$/, "") : ""; };
const baseTitle = t => t.replace(/\s*\((poster|extended abstract|editorial)\)\s*$/i, "").toLowerCase();
const DISTINCT = C.P.length;
const EV_COUNT = C.EVENTS.filter(e => e[1] !== "pc").length;           // comment A4

/* ---------------- Context: static pages vs single-file preview ---------------- */
function ctx(lang, page, preview) {
  const other = lang === "en" ? "fr" : "en";
  return {
    lang, page, preview, t: T[lang], other,
    id: name => preview ? `${lang}-${page}-${name}` : name,
    href: (p, anchor) => preview ? `#${lang}-${p}${anchor ? "--" + anchor : ""}` : (p === page && anchor ? `#${anchor}` : `${FILE(p)}${anchor ? "#" + anchor : ""}`),
    alt: () => preview ? `#${other}-${page}` : `../${other}/${FILE(page)}`,
    asset: f => preview ? null : `../assets/${f}`,
    L: (en, fr) => lang === "fr" ? fr : en
  };
}
const ext = 'target="_blank" rel="noopener"';
const h2 = (x, icon, text, idName, soft = "") => `<h2 class="h2" id="${x.id(idName)}"><span class="badge-ico ${soft}">${I(icon)}</span>${text}</h2>`;

/* ---------------- Layout ---------------- */
function header(x, photoSrc) {
  const nav = PAGES.map(p => `<li><a href="${x.href(p)}"${p === x.page ? ' aria-current="page"' : ""}>${x.t.nav[p]}</a></li>`).join("");
  return `
<a class="skip" href="${x.preview ? `#${x.lang}-${x.page}--main` : "#main"}">${x.t.skip}</a>
<header class="site-header">
  <div class="bar">
    <a class="brand" href="${x.href("home")}"><img src="${photoSrc}" alt="" width="36" height="36"><span>Haithem Mezni</span></a>
    <nav class="nav" aria-label="${x.t.menu}"><ul>${nav}</ul></nav>
    <div class="tools">
      <a class="tool" href="${x.alt()}" hreflang="${x.other}" lang="${x.other}" data-set-lang="${x.other}" title="${x.t.switchLang}">${I("languages")}<span>${x.t.langShort}</span><span class="sr"> – ${x.t.switchLang}</span></a>
    </div>
  </div>
</header>`;
}
function footer(x) {
  return `
<footer class="site-footer">
  <div class="wrap foot">
    <div>
      <p class="foot-title">${x.t.footer.profiles}</p>
      <ul class="profiles">
        <li><a href="${C.LINKS.scholar(x.lang)}" ${ext}>${B("googlescholar")}Google Scholar</a></li>
        <li><a href="${C.LINKS.dblp}" ${ext}>${B("dblp")}DBLP</a></li>
        <li><a href="${C.LINKS.orcid}" ${ext}>${B("orcid")}ORCID</a></li>
        <li><a href="${C.LINKS.github}" ${ext}>${B("github")}GitHub</a></li>
      </ul>
    </div>
    <p class="fine">© ${BUILD_DATE.getFullYear()} ${x.t.footer.rights}<br>${x.t.footer.updated}${x.lang === "fr" ? "\u00A0:" : ":"} ${x.t.dateFmt(BUILD_DATE)}</p>
  </div>
</footer>`;
}

/* ---------------- Pages ---------------- */
function pHome(x, photoSrc) {
  const t = x.t;
  const item = n => `<li class="row">${I(n[0], "row-ico")}<p>${x.L(n[1], n[2])}</p></li>`;
  const recent = C.NEWS.slice(0, C.NEWS_VISIBLE).map(item).join("");
  const older = C.NEWS.slice(C.NEWS_VISIBLE).map(item).join("");
  const bio = C.BIO[x.lang].map(p => `<p>${p.replace("{scholar}", C.LINKS.scholar(x.lang))}</p>`).join("");
  return `
<section class="hero">
  <div class="wrap hero-in">
    <img class="portrait" src="${photoSrc}" alt="${x.L("Portrait of Haithem Mezni", "Portrait de Haithem Mezni")}" width="200" height="200" fetchpriority="high">
    <div class="hero-text">
      <h1>Haithem Mezni</h1>
      <p class="hero-role">${t.role}</p>
      <ul class="facts">
        <li>${I("building-2")}${t.affil}</li>
        <li>${I("flask-conical")}${t.lab}</li>
      </ul>
      <div class="actions">
        <a class="btn btn-light" href="${x.href("contact")}">${I("send")}${t.contactBtn}</a>
      </div>
    </div>
  </div>
  <div class="wrap"><div class="interests-wrap"><div class="interests">
    <span>${t.interests}</span>
    <ul>${C.AREAS.map(a => `<li><a href="${x.href("research", "areas")}">${I(a[0])}${x.L(a[1], a[2])}</a></li>`).join("")}</ul>
  </div></div></div>
</section>
<div class="wrap" id="${x.id("main")}" tabindex="-1">
  <div class="home-grid">
    <section class="block prose">
      ${h2(x, "user", t.about, "about")}
      ${bio}
    </section>
    <section class="block">
      ${h2(x, "layout-grid", t.glance, "glance")}
      <div class="tiles">
        <a class="tile" href="${x.href("publications")}">${I("book-open", "tile-ico")}<b>${DISTINCT}</b><span>${t.tiles.pubs}</span></a>
        <a class="tile" href="${x.href("research", "projects")}">${I("landmark", "tile-ico")}<b>${C.PROJECTS.length}</b><span>${t.tiles.proj}</span></a>
        <a class="tile" href="${x.href("research", "events")}">${I("calendar-days", "tile-ico")}<b>${EV_COUNT}</b><span>${t.tiles.events}</span></a>
        <a class="tile" href="${x.href("research", "supervision")}">${I("users", "tile-ico")}<b>${C.PHD.length + C.MSC.length}</b><span>${t.tiles.students}</span></a>
      </div>
    </section>
  </div>
  <section class="block">
    ${h2(x, "newspaper", t.news, "news")}
    <ul class="rows news">${recent}</ul>
    <details class="more">
      <summary>${I("chevrons-up-down")}${t.olderNews} (${C.NEWS.length - C.NEWS_VISIBLE})</summary>
      <ul class="rows news">${older}</ul>
    </details>
    <p class="more-link"><a href="${x.href("research", "events")}">${t.allEvents}</a></p>
  </section>
</div>`;
}

function pageHead(x, title, intro) {
  return `<div class="page-head"><h1>${title}</h1>${intro ? `<p>${intro}</p>` : ""}</div>`;
}

function pResearch(x) {
  const t = x.t, s = t.sec;
  const toc = ["areas", "projects", "editing", "events", "reviewing", "supervision"]
    .map(k => `<li><a href="${x.href("research", k)}">${s[k]}</a></li>`).join("");
  const groups = ["org", "chair", "pc"].map(g => {
    const rows = C.EVENTS.filter(e => e[1] === g).map(e =>
      `<li class="row"><span class="year">${e[0]}</span><div><a href="${e[4]}" ${ext}>${x.L(e[2], e[3])}</a></div></li>`).join("");
    const icon = {org:"users", chair:"mic", pc:"clipboard-check"}[g];
    return `<div class="ev-group"><h3 class="h3">${I(icon)}${t.evGroups[g]}</h3><ul class="rows">${rows}</ul></div>`;
  }).join("");
  const area = a => {
    const title = a[5] ? `<a href="${a[5]}" ${ext}>${x.L(a[1], a[2])}</a>` : x.L(a[1], a[2]);
    const txt = x.L(a[3], a[4]);
    return `<div class="card">${I(a[0], "card-ico")}<div><h3>${title}</h3>${txt ? `<p>${txt}</p>` : ""}</div></div>`;
  };
  const phd = p => `<li class="row"><span class="year">${p[2]}</span><div><span class="t">${p[0]}</span><span class="m" lang="${p[3]}">${p[1]}</span></div></li>`;
  const msc = p => `<li class="row"><span class="year">${p[2]}</span><div><span class="t">${p[0]}</span><span class="m" lang="en">${p[1]}</span></div></li>`;
  return `
<div class="wrap" id="${x.id("main")}" tabindex="-1">
  ${pageHead(x, t.nav.research, t.rIntro)}
  <nav class="toc" aria-label="${t.onThisPage}"><ul>${toc}</ul></nav>
  <section class="block">
    ${h2(x, "compass", s.areas, "areas")}
    <p class="lead">${t.areasIntro}</p>
    <div class="cards">${C.AREAS.map(area).join("")}</div>
  </section>
  <section class="block">
    ${h2(x, "landmark", s.projects, "projects", "gold")}
    <ul class="rows plain cols2">${C.PROJECTS.map(p => `<li class="row"><div><span class="t">${x.L(p[0], p[1])}</span><span class="m">${x.L(p[2], p[3])}</span></div></li>`).join("")}</ul>
  </section>
  <section class="block">
    ${h2(x, "book-marked", s.editing, "editing")}
    <ul class="rows">${C.EDITING.map(e => `<li class="row"><span class="year">${e[0]}</span><div><a class="t" href="${e[3]}" ${ext}>${e[1]}</a><span class="m">${e[2]}</span></div></li>`).join("")}</ul>
  </section>
  <section class="block">
    ${h2(x, "calendar-days", s.events, "events", "gold")}
    <div class="ev-grid">${groups}</div>
  </section>
  <section class="block">
    ${h2(x, "clipboard-check", s.reviewing, "reviewing")}
    <p class="lead">${t.reviewText}</p>
    <ul class="chips">${C.REVIEW.map(r => `<li>${r}</li>`).join("")}</ul>
  </section>
  <section class="block">
    ${h2(x, "users", s.supervision, "supervision", "gold")}
    <h3 class="h3">${I("graduation-cap")}${t.phd}</h3>
    <ul class="rows cols2">${C.PHD.map(phd).join("")}</ul>
    <details class="more">
      <summary>${I("chevrons-up-down")}${t.showMsc} (${C.MSC.length})</summary>
      ${t.origTitles ? `<p class="note">${t.origTitles}</p>` : ""}
      <ul class="rows cols2">${C.MSC.map(msc).join("")}</ul>
    </details>
  </section>
</div>`;
}

function bibtex(p) {
  const first = p[2].split(",")[0].trim().split(" ").pop().toLowerCase().replace(/[^a-z]/g, "");
  const word = p[3].toLowerCase().replace(/[^a-z ]/g, "").split(" ").find(w => w.length > 3) || "paper";
  const type = p[1] === "j" ? "article" : p[1] === "ch" ? "incollection" : "inproceedings";
  const field = p[1] === "j" ? "journal" : "booktitle";
  const tex = s => s.replace(/&/g, "\\&").replace(/[’]/g, "'").replace(/[–]/g, "--");
  const doi = doiOf(p[5]);
  const lines = [
    `@${type}{${first}${p[0]}${word},`,
    `  author = {${p[2].split(",").map(a => a.trim()).join(" and ")}},`,
    `  title = {${tex(p[3])}},`,
    `  ${field} = {${tex(p[4])}},`,
    `  year = {${p[0]}}${doi || p[5] ? "," : ""}`
  ];
  if (doi) lines.push(`  doi = {${doi}}${p[5] ? "," : ""}`);
  if (p[5]) lines.push(`  url = {${p[5]}}`);
  lines.push("}");
  return lines.join("\n");
}

function pPublications(x) {
  const t = x.t;
  const counts = Object.fromEntries(C.TOPICS.map(z => [z.id, C.P.filter(p => p[6].includes(z.id)).length]));
  const pos = Object.fromEntries(C.TOPICS.map(z => [z.id, z]));
  const label = (txt, cx, y) => {
    const words = txt.split(" ");
    if (txt.length <= 16) return `<text x="${cx}" y="${y}">${esc(txt)}</text>`;
    let best = 1, diff = 1e9;
    for (let i = 1; i < words.length; i++) { const a = words.slice(0, i).join(" ").length, b = words.slice(i).join(" ").length; if (Math.abs(a - b) < diff) { diff = Math.abs(a - b); best = i; } }
    return `<text x="${cx}" y="${y}"><tspan x="${cx}">${esc(words.slice(0, best).join(" "))}</tspan><tspan x="${cx}" dy="14">${esc(words.slice(best).join(" "))}</tspan></text>`;
  };
  const edges = C.EDGES.map(([a, b]) => `<line class="edge" data-a="${a}" data-b="${b}" x1="${pos[a].x}" y1="${pos[a].y}" x2="${pos[b].x}" y2="${pos[b].y}"/>`).join("");
  const nodes = C.TOPICS.map(z => {
    const r = (8 + Math.sqrt(counts[z.id]) * 3.4).toFixed(1);
    const name = z[x.lang];
    const twoLines = name.length > 16;
    return `<g class="node" data-topic="${z.id}" tabindex="0" role="button" aria-pressed="false">
      <circle cx="${z.x}" cy="${z.y}" r="${r}"/>${label(name, z.x, z.y + +r + 16)}
      <text class="count" x="${z.x}" y="${z.y + +r + (twoLines ? 44 : 30)}">${counts[z.id]} ${t.papers}</text></g>`;
  }).join("");
  const chips = C.TOPICS.map(z => `<button type="button" class="chip-btn" data-topic="${z.id}" aria-pressed="false">${esc(z[x.lang])} <span>${counts[z.id]}</span></button>`).join("");
  const kindIcon = { j:"book-open", c:"presentation", ch:"book-marked" };
  const years = [...new Set(C.P.map(p => p[0]))].sort((a, b) => b - a);
  const order = { j:0, c:1, ch:2 };
  const list = years.map(y => {
    const items = C.P.filter(p => p[0] === y).sort((a, b) => order[a[1]] - order[b[1]]).map(p => {
      const doi = doiOf(p[5]);
      const title = p[5] ? `<a class="pub-title" href="${esc(p[5])}" ${ext}>${esc(p[3])}</a>` : `<span class="pub-title">${esc(p[3])}</span>`;
      const search = norm(`${p[2]} ${p[3]} ${p[4]} ${p[0]}`);
      return `<li class="pub" data-kind="${p[1] === "j" ? "j" : "c"}" data-topics="${p[6].join(" ")}" data-search="${esc(search)}" lang="en">
        ${title}
        <p class="pub-authors">${esc(p[2]).replace("Haithem Mezni", "<b>Haithem Mezni</b>")}</p>
        <div class="pub-foot">
          <span class="kind k-${p[1]}" lang="${x.lang}">${I(kindIcon[p[1]])}${t.kindOne[p[1]]}</span>
          <span class="pub-venue">${esc(p[4])}, ${p[0]}</span>
          ${doi ? `<a class="doi" href="https://doi.org/${esc(doi)}" ${ext}>DOI ${esc(doi)}</a>` : ""}
          <details class="bib" lang="${x.lang}"><summary>BibTeX</summary><p class="note no-js-only">${t.bibHelp}</p><pre lang="en">${esc(bibtex(p))}</pre><button type="button" class="copy js-only" data-copy data-done="${t.copied}">${I("copy")}<span>${t.copyBib}</span></button></details>
        </div>
      </li>`;
    }).join("");
    return `<section class="year-group" data-year="${y}"><h2 class="yr">${y}</h2><ul class="pubs">${items}</ul></section>`;
  }).join("");
  const kinds = ["all", "j", "c"].map(k => `<button type="button" class="seg-btn" data-kind="${k}" aria-pressed="${k === "all"}">${t.kinds[k]}</button>`).join("");
  return `
<div class="wrap" id="${x.id("main")}" tabindex="-1" data-pubs data-total="${C.P.length}" data-tpl-showing="${esc(t.showing)}" data-tpl-topic="${esc(t.onTopic)}">
  ${pageHead(x, t.nav.publications, "")}
  <div class="pub-top js-only">
    <figure class="map">
      <svg viewBox="0 0 540 420" role="group" aria-label="${esc(t.mapCap)}">${edges}${nodes}</svg>
      <figcaption>${I("network")}${t.mapCap}</figcaption>
    </figure>
    <div class="filters">
      <div class="topic-chips" role="group" aria-label="${t.topicsLabel}">${chips}</div>
      <label class="search">${I("search")}<span class="sr">${t.searchLabel}</span><input type="search" placeholder="${esc(t.search)}" autocomplete="off" data-q></label>
      <div class="seg" role="group" aria-label="${t.typeLabel}">${kinds}</div>
      <p class="status" aria-live="polite">${I("list-filter")}<span data-status></span><button type="button" class="clear" data-clear hidden>${t.clear}</button></p>
    </div>
  </div>
  <p class="empty" data-empty hidden>${t.noMatch}</p>
  ${list}
</div>`;
}

function teachBlock(x, i) {
  const t = x.t;
  const chips = arr => `<ul class="chips">${arr.map(c => `<li>${c}</li>`).join("")}</ul>`;
  const body = i.groups
    ? i.groups.map(g => `<div class="cgroup"><p class="cgroup-t">${x.L(g.en, g.fr)}</p>${chips(g.items[x.lang])}</div>`).join("")
    : chips(i.items[x.lang]);
  const when = x.L(i.when.en, i.when.fr);
  return `<article class="inst">
    <div class="inst-head">${I("school", "card-ico")}<div><h3>${x.L(i.en, i.fr)}</h3><p class="m">${when}${i.now ? ` <span class="now">${I("circle-check")}${t.now}</span>` : ""}</p></div></div>
    ${body}
  </article>`;
}
function pTeaching(x) {
  const t = x.t;
  return `
<div class="wrap" id="${x.id("main")}" tabindex="-1">
  ${pageHead(x, t.nav.teaching, t.tIntro)}
  <section class="block first">${h2(x, "presentation", t.current, "current", "gold")}<div class="inst-grid">${C.TEACH.current.map(i => teachBlock(x, i)).join("")}</div></section>
  <section class="block">${h2(x, "graduation-cap", t.masterLvl, "master")}<div class="inst-grid">${C.TEACH.master.map(i => teachBlock(x, i)).join("")}</div></section>
  <section class="block">${h2(x, "book-open", t.underLvl, "undergraduate")}<div class="inst-grid">${C.TEACH.under.map(i => teachBlock(x, i)).join("")}</div></section>
</div>`;
}

function pCV(x) {
  const t = x.t;
  const period = p => p[1] === "-" ? p[0] : `${p[0]} – ${p[1] || t.present}`;
  return `
<div class="wrap" id="${x.id("main")}" tabindex="-1">
  ${pageHead(x, t.title.cv, t.cvIntro)}
  <p class="cv-links"><a class="btn btn-primary" href="${C.LINKS.cv}" ${ext}>${I("file-down")}${t.cvBtn}</a></p>
  <div class="two">
    <section class="block">
      ${h2(x, "graduation-cap", t.education, "education")}
      <ul class="rows">${C.EDU.map(e => `<li class="row"><span class="year">${e[0]}</span><div><span class="t">${x.L(e[2], e[3])}</span>${x.L(e[4], e[5]).map(d => `<span class="m">${d}</span>`).join("")}</div></li>`).join("")}</ul>
    </section>
    <section class="block">
      ${h2(x, "briefcase", t.positions, "positions", "gold")}
      <ul class="rows ranges">${C.POS.map(p => `<li class="row"><span class="year">${period(p)}</span><div><span class="t">${x.L(p[4], p[5])}</span><span class="m">${x.L(p[2], p[3])}</span></div></li>`).join("")}</ul>
    </section>
  </div>
  <div class="two">
    <section class="block">
      ${h2(x, "award", t.service, "service")}
      <ul class="rows">${C.SERVICE.map(s => `<li class="row">${I("badge-check", "row-ico")}<p>${x.L(s[0], s[1])}</p></li>`).join("")}</ul>
    </section>
    <section class="block">
      ${h2(x, "sparkles", t.other, "other", "gold")}
      <ul class="rows">${C.OTHER.map(s => `<li class="row">${I("presentation", "row-ico")}<p>${x.L(s[0], s[1])}</p></li>`).join("")}</ul>
    </section>
  </div>
</div>`;
}

function pContact(x) {
  const t = x.t, m = t.m, f = t.f, K = C.CONTACT;
  const wa = `https://wa.me/${K.phone.replace("+", "")}?text=${encodeURIComponent(f.waHello)}`;
  const opts = f.topics.map(o => `<option>${o}</option>`).join("");
  return `
<div class="wrap" id="${x.id("main")}" tabindex="-1">
  ${pageHead(x, t.nav.contact, "")}
  <div class="contact-grid">
    <section class="block first">
      ${h2(x, "phone", t.ways, "ways")}
      <div class="methods">
        <a class="method" href="${entities("mailto:" + K.email1)}">${I("mail", "m-ico")}<div><span class="l">${m.email} <em class="pref">${I("star")}${m.primary}</em></span><span class="v">${entities(K.email1)}</span><span class="a">${m.write}</span></div></a>
        <a class="method" href="${entities("mailto:" + K.email2)}">${B("gmail", "m-ico")}<div><span class="l">${m.email2}</span><span class="v">${entities(K.email2)}</span><span class="a">${m.write}</span></div></a>
        <a class="method" href="tel:${K.phone}">${I("phone", "m-ico")}<div><span class="l">${m.phone}</span><span class="v">${K.phoneShow.replace(/ /g, "&nbsp;")}</span><span class="a">${m.call}</span></div></a>
        <a class="method" href="${wa}" ${ext}>${B("whatsapp", "m-ico wa")}<div><span class="l">${m.wa}</span><span class="v">${K.phoneShow}</span><span class="a">${m.chat}</span></div></a>
      </div>
    </section>
    <section class="block first">
      ${h2(x, "send", t.formTitle, "form", "gold")}
      <form class="form" method="POST" action="${entities("https://formsubmit.co/" + K.formTo)}" accept-charset="UTF-8" data-contact${x.preview ? " data-preview" : ""}
        data-prefix="${esc(f.prefix)}" data-to="${entities(K.formTo)}" data-wa="${K.phone.replace("+", "")}" novalidate>
        <input type="hidden" name="_subject" value="${esc(f.prefix)} Contact">
        <input type="hidden" name="_template" value="table">
        <input type="hidden" name="_next" value="">
        <input type="hidden" name="_language" value="${x.lang}">
        <input class="hp" type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true">
        <div class="grid2">
          <div class="field"><label for="${x.id("f-name")}">${f.name}</label><input id="${x.id("f-name")}" type="text" name="name" autocomplete="name" required data-err="${esc(f.eName)}"><span class="err" aria-live="polite"></span></div>
          <div class="field"><label for="${x.id("f-email")}">${f.email}</label><input id="${x.id("f-email")}" name="email" type="email" autocomplete="email" required data-err="${esc(f.eEmail)}"><span class="err" aria-live="polite"></span></div>
        </div>
        <div class="field"><label for="${x.id("f-topic")}">${f.topic}</label><select id="${x.id("f-topic")}" name="topic">${opts}</select></div>
        <div class="field"><label for="${x.id("f-msg")}">${f.msg}</label><textarea id="${x.id("f-msg")}" name="message" required minlength="10" data-err="${esc(f.eMsg)}"></textarea><span class="err" aria-live="polite"></span></div>
        <button class="btn btn-primary submit" type="submit">${I("send")}${f.send}</button>
        <div class="result" aria-live="polite" data-result data-sent="${esc(f.sent)}" data-msg="${esc(f.preview)}" data-mail="${esc(f.viaMail)}" data-walabel="${esc(f.viaWa)}"></div>
      </form>
    </section>
  </div>
</div>`;
}

const LANG_COLOR = { "Python":"#3572A5", "HTML":"#e34c26", "Jupyter Notebook":"#DA5B0B" };
const normT = s => s.toLowerCase().replace(/[^a-z0-9]/g, "");
function repoCard(x, r) {
  const t = x.t.code;
  const [repo, name, icon, title, en, fr, lang, lic] = r;
  const url = `https://github.com/${C.CODE_ORG}/${repo}`;
  const pub = C.P.find(p => normT(p[3]) === normT(title) && p[5]);
  return `<article class="repo">
    <div class="repo-head">
      <span class="repo-ico">${I(icon)}</span>
      <div class="repo-names">
        <h3><a href="${url}" ${ext}>${esc(name)}</a></h3>
        <p class="repo-path">${I("book-marked")}<span>${C.CODE_ORG}/<b>${repo}</b></span><span class="repo-badge">${t.pub}</span></p>
      </div>
    </div>
    <p class="repo-title" lang="en">${esc(title)}</p>
    <p class="repo-desc">${x.L(en, fr)}</p>
    <div class="repo-foot">
      ${lang ? `<span class="repo-lang"><span class="dot" style="background:${LANG_COLOR[lang] || "#8b949e"}"></span>${lang}</span>` : ""}
      <span class="repo-links">
        <a href="${url}" ${ext}>${B("github")}${t.source}</a>
        ${pub ? `<a href="${esc(pub[5])}" ${ext}>${I("file-text")}${t.paper}</a>` : ""}
      </span>
    </div>
  </article>`;
}
function pCode(x) {
  const t = x.t.code;
  return `
<div class="wrap" id="${x.id("main")}" tabindex="-1">
  ${pageHead(x, x.t.title.code, t.intro)}
  <div class="org">
    <span class="org-logo">${B("github")}</span>
    <div class="org-text">
      <p class="org-name">${C.CODE_ORG}</p>
      <p class="org-sub">${t.org}, ${C.CODE.length + C.CODE_OTHER.length} ${t.repos}</p>
    </div>
    <a class="btn btn-primary" href="${C.LINKS.github}" ${ext}>${B("github")}${t.view}</a>
  </div>
  <section class="block">
    ${h2(x, "code-xml", t.impl, "implementations")}
    <div class="repos">${C.CODE.map(r => repoCard(x, r)).join("")}</div>
  </section>
</div>`;
}

const RENDER = { home: pHome, research: pResearch, publications: pPublications, code: pCode, teaching: pTeaching, cv: pCV, contact: pContact };

/* ---------------- Head, JSON-LD ---------------- */
const PERSON = lang => ({
    "@type": "Person", "@id": `${SITE_URL}/#person`, name: "Haithem Mezni", jobTitle: T[lang].role, email: "mailto:" + C.CONTACT.email1,
    worksFor: { "@type": "CollegeOrUniversity", name: lang === "fr" ? "Université de Jendouba" : "University of Jendouba" },
    image: `${SITE_URL}/assets/photo.jpg`, url: `${SITE_URL}/${lang}/`,
    sameAs: [C.LINKS.scholar("en"), C.LINKS.dblp, C.LINKS.orcid, C.LINKS.github]
});
function structured(lang, page) {
  const ld = s => `<script type="application/ld+json">${JSON.stringify(s).replace(/</g, "\\u003c")}</script>`;
  const url = `${SITE_URL}/${lang}/${page === "home" ? "" : FILE(page)}`;
  const crumbs = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: T[lang].nav.home, item: `${SITE_URL}/${lang}/` },
    ...(page === "home" ? [] : [{ "@type": "ListItem", position: 2, name: T[lang].nav[page], item: url }]) ] };
  const out = [];
  if (page === "home") out.push(ld({ "@context": "https://schema.org", "@type": "ProfilePage", url, inLanguage: lang, mainEntity: PERSON(lang) }));
  if (page === "publications") out.push(ld({ "@context": "https://schema.org", "@type": "ItemList", name: T[lang].title.publications, numberOfItems: C.P.length,
    itemListElement: C.P.map((p, i) => ({ "@type": "ListItem", position: i + 1, item: Object.assign({ "@type": "ScholarlyArticle", headline: p[3], datePublished: String(p[0]),
      author: p[2].split(",").map(a => ({ "@type": "Person", name: a.trim() })), isPartOf: p[4] }, p[5] ? { url: p[5] } : {}) })) }));
  if (page === "code") out.push(ld({ "@context": "https://schema.org", "@type": "ItemList", name: T[lang].title.code,
    itemListElement: C.CODE.map((r, i) => ({ "@type": "ListItem", position: i + 1, item: Object.assign({ "@type": "SoftwareSourceCode", name: r[1], description: r[3],
      codeRepository: `https://github.com/${C.CODE_ORG}/${r[0]}`, author: { "@id": `${SITE_URL}/#person` } }, r[6] && r[6] !== "HTML" ? { programmingLanguage: r[6] } : {}) })) }));
  out.push(ld(crumbs));
  return out.join("\n");
}
function jsonLd(lang) {
  const t = T[lang];
  return JSON.stringify({
    "@context": "https://schema.org", "@type": "Person", name: "Haithem Mezni", jobTitle: t.role,
    affiliation: { "@type": "CollegeOrUniversity", name: lang === "fr" ? "Université de Jendouba" : "University of Jendouba" },
    alumniOf: { "@type": "CollegeOrUniversity", name: lang === "fr" ? "Université de la Manouba" : "University of Manouba" },
    image: `${SITE_URL}/assets/photo.jpg`, url: `${SITE_URL}/${lang}/`,
    sameAs: [C.LINKS.scholar("en"), C.LINKS.dblp, C.LINKS.orcid],
    knowsAbout: ["Service-oriented computing", "Service composition", "Recommender systems", "Cloud computing"]
  }).replace(/</g, "\\u003c");
}
const THEME_INIT = `<script>document.documentElement.classList.add("js")</script>`;

/* ---------------- CSS & client script ---------------- */
const CSS = fs.readFileSync(path.join(__dirname, "style.css"), "utf8");
const JS = fs.readFileSync(path.join(__dirname, "site.js"), "utf8");
const fontFace = (bricolage, figtree) => `
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${bricolage}) format("woff2-variations"),url(${bricolage}) format("woff2")}
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${figtree}) format("woff2-variations"),url(${figtree}) format("woff2")}`;
const FONT_B = path.join(__dirname, "node_modules/@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2");
const FONT_F = path.join(__dirname, "node_modules/@fontsource-variable/figtree/files/figtree-latin-wght-normal.woff2");

/* ---------------- Static site ---------------- */
function buildStatic() {
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(path.join(OUT, "assets/fonts"), { recursive: true });
  fs.copyFileSync(FONT_B, path.join(OUT, "assets/fonts/bricolage-grotesque.woff2"));
  fs.copyFileSync(FONT_F, path.join(OUT, "assets/fonts/figtree.woff2"));
  fs.copyFileSync(path.join(__dirname, "photo.webp"), path.join(OUT, "assets/photo.webp"));
  fs.copyFileSync(path.join(__dirname, "photo.jpg"), path.join(OUT, "assets/photo.jpg"));
  fs.writeFileSync(path.join(OUT, "assets/style.css"), fontFace("fonts/bricolage-grotesque.woff2", "fonts/figtree.woff2") + CSS);
  fs.writeFileSync(path.join(OUT, "assets/site.js"), JS);
  fs.writeFileSync(path.join(OUT, "favicon.svg"), FAVICON);
  fs.copyFileSync(path.join(__dirname, "apple-touch-icon.png"), path.join(OUT, "apple-touch-icon.png"));
  fs.copyFileSync(path.join(__dirname, "favicon-32.png"), path.join(OUT, "favicon-32.png"));
  fs.writeFileSync(path.join(OUT, ".nojekyll"), "");
  fs.writeFileSync(path.join(OUT, "site.webmanifest"), JSON.stringify({ name: "Haithem Mezni", short_name: "H. Mezni", start_url: "./", display: "browser",
    background_color: "#F6F4F3", theme_color: "#6E1A37", icons: [{ src: "apple-touch-icon.png", sizes: "180x180", type: "image/png" }] }, null, 1));

  for (const lang of LANGS) {
    fs.mkdirSync(path.join(OUT, lang), { recursive: true });
    for (const page of PAGES) {
      USED.clear();
      const x = ctx(lang, page, false);
      const main = RENDER[page](x, "../assets/photo.webp");
      const head = header(x, "../assets/photo.webp"), foot = footer(x);
      const url = `${SITE_URL}/${lang}/${page === "home" ? "" : FILE(page)}`;
      const altUrl = l => `${SITE_URL}/${l}/${page === "home" ? "" : FILE(page)}`;
      const title = page === "home" ? T[lang].title.home : `${T[lang].title[page]} | Haithem Mezni`;
      const html = `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(T[lang].desc[page])}">
<meta name="author" content="Haithem Mezni">
<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="en" href="${altUrl("en")}">
<link rel="alternate" hreflang="fr" href="${altUrl("fr")}">
<link rel="alternate" hreflang="x-default" href="${altUrl("en")}">
<meta property="og:type" content="${page === "home" ? "profile" : "website"}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(T[lang].desc[page])}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE_URL}/assets/photo.jpg">
<meta property="og:locale" content="${lang === "fr" ? "fr_FR" : "en_GB"}">
<meta name="twitter:card" content="summary">
<meta name="theme-color" content="#6E1A37">
<link rel="icon" href="../favicon.svg" type="image/svg+xml">
<link rel="icon" href="../favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="../apple-touch-icon.png">
<link rel="manifest" href="../site.webmanifest">
<link rel="preload" href="../assets/fonts/figtree.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="../assets/fonts/bricolage-grotesque.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="../assets/style.css">
${THEME_INIT}
${structured(lang, page)}
<script src="../assets/site.js" defer></script>
</head>
<body>
${sprite(USED)}
${head}
<main id="main-region">${main}</main>
${foot}
</body>
</html>`;
      fs.writeFileSync(path.join(OUT, lang, FILE(page)), html.replace(/id="main"/, 'id="main"'));
    }
  }
  // Root: language choice (x-default) with automatic redirect
  fs.writeFileSync(path.join(OUT, "index.html"), `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Haithem Mezni</title><meta name="description" content="${esc(T.en.desc.home)}">
<link rel="canonical" href="${SITE_URL}/">
<link rel="alternate" hreflang="en" href="${SITE_URL}/en/"><link rel="alternate" hreflang="fr" href="${SITE_URL}/fr/"><link rel="alternate" hreflang="x-default" href="${SITE_URL}/">
<link rel="icon" href="favicon.svg" type="image/svg+xml">
<script>try{var l=localStorage.getItem("hm-lang")||((navigator.language||"").toLowerCase().indexOf("fr")===0?"fr":"en");location.replace((l==="fr"?"fr":"en")+"/index.html")}catch(e){location.replace("en/index.html")}</script>
<style>body{font:16px/1.6 system-ui,sans-serif;display:grid;place-items:center;min-height:100vh;margin:0;background:#F6F4F3;color:#1C1B22}a{color:#6E1A37;margin:0 .6rem}</style>
</head><body><main><h1 style="font-size:1.4rem">Haithem Mezni</h1><p><a href="en/index.html" hreflang="en">English</a><a href="fr/index.html" hreflang="fr" lang="fr">Français</a></p></main></body></html>`);
  // robots & sitemap
  fs.writeFileSync(path.join(OUT, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
  const today = BUILD_DATE.toISOString().slice(0, 10);
  const urls = LANGS.flatMap(l => PAGES.map(p => {
    const u = lg => `${SITE_URL}/${lg}/${p === "home" ? "" : FILE(p)}`;
    return `  <url><loc>${u(l)}</loc><lastmod>${today}</lastmod>
    <xhtml:link rel="alternate" hreflang="en" href="${u("en")}"/>
    <xhtml:link rel="alternate" hreflang="fr" href="${u("fr")}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${u("en")}"/>
  </url>`;
  })).join("\n");
  fs.writeFileSync(path.join(OUT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`);
  fs.writeFileSync(path.join(OUT, "404.html"), `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Page not found | Haithem Mezni</title><meta name="robots" content="noindex"><link rel="icon" href="${SITE_URL}/favicon.svg"><style>body{font:16px/1.6 system-ui,sans-serif;display:grid;place-items:center;min-height:100vh;margin:0;background:#F6F4F3;color:#1C1B22;text-align:center}a{color:#6E1A37}</style></head><body><div><h1>404</h1><p>This page does not exist. <a href="${SITE_URL}/en/">Go to the home page</a></p><p lang="fr">Cette page n’existe pas. <a href="${SITE_URL}/fr/">Aller à l’accueil</a></p></div></body></html>`);
}

/* ---------------- Single-file preview (for the hosted artifact) ---------------- */
function buildPreview() {
  USED.clear();
  const b64 = f => "data:font/woff2;base64," + fs.readFileSync(f).toString("base64");
  const photo = "data:image/webp;base64," + fs.readFileSync(path.join(__dirname, "photo.webp")).toString("base64");
  const pages = [];
  for (const lang of LANGS) for (const page of PAGES) {
    const x = ctx(lang, page, true);
    const title = page === "home" ? T[lang].title.home : `${T[lang].title[page]} | Haithem Mezni`;
    pages.push(`<div class="page" data-page="${lang}-${page}" data-lang="${lang}" data-title="${esc(title)}" hidden>${header(x, photo)}<main>${RENDER[page](x, photo)}</main>${footer(x)}</div>`);
  }
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Haithem Mezni</title>
<meta name="description" content="${esc(T.en.desc.home)}">
<style>${fontFace(b64(FONT_B), b64(FONT_F))}${CSS}</style>
${THEME_INIT}
</head>
<body data-preview>
${sprite(USED)}
${pages.join("\n")}
<script>${JS}</script>
</body>
</html>`;
  fs.writeFileSync(PREVIEW_FILE, html);
}

const FAVICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#6E1A37"/><text x="32" y="42" text-anchor="middle" font-family="Georgia,serif" font-size="28" font-weight="700" fill="#fff">HM</text></svg>`;

buildStatic();
buildPreview();
console.log("Built", SITE_URL, "distinct:", DISTINCT, "events:", EV_COUNT);
