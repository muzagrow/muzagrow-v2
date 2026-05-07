import { b as createAstro, c as createComponent, a as renderTemplate, u as unescapeHTML, d as addAttribute, r as renderComponent, k as renderHead, j as renderSlot, e as renderScript, m as maybeRenderHead } from './astro/server_CCibinO9.mjs';
/* empty css                          */

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$3 = createAstro("https://www.muzagrow.com");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SEO;
  const SITE_URL = "https://www.muzagrow.com";
  const DEFAULT_DESC = "Diseñamos infraestructura de crecimiento para corporativos en LATAM. Service Design + Automatización IA para que tu equipo haga lo que importa.";
  const DEFAULT_IMG = `${SITE_URL}/og-image.png`;
  const {
    title = "MUZA GROW | Infraestructura de Crecimiento con IA",
    description = DEFAULT_DESC,
    image = DEFAULT_IMG,
    canonical = SITE_URL + Astro2.url.pathname,
    type = "website"
  } = Astro2.props;
  const fullTitle = title.includes("MUZA GROW") ? title : `${title} | MUZA GROW`;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<title>", '</title><meta name="description"', '><meta name="robots" content="index, follow"><link rel="canonical"', '><!-- Open Graph --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:type"', '><meta property="og:url"', '><meta property="og:site_name" content="MUZA GROW"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- JSON-LD Organization --><script type="application/ld+json">', "</script>"])), fullTitle, addAttribute(description, "content"), addAttribute(canonical, "href"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(image, "content"), addAttribute(type, "content"), addAttribute(canonical, "content"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(image, "content"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MUZA GROW",
    "url": SITE_URL,
    "description": DEFAULT_DESC,
    "email": "hola@muzagrow.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ciudad de México",
      "addressCountry": "MX"
    }
  })));
}, "C:/Users/crono/Downloads/Muza/muzagrow-v2/src/components/common/SEO.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://www.muzagrow.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, image } = Astro2.props;
  const plausible = "www.muzagrow.com";
  return renderTemplate`<html lang="es-MX"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "image": image })}${renderTemplate(_a || (_a = __template(["<script defer", ' src="https://plausible.io/js/script.js"></script>'])), addAttribute(plausible, "data-domain"))}${renderHead()}</head> <body> <div id="cur-dot" aria-hidden="true"></div> <div id="cur-ring" aria-hidden="true"></div> ${renderSlot($$result, $$slots["default"])} <!-- Custom cursor — desktop only --> ${renderScript($$result, "C:/Users/crono/Downloads/Muza/muzagrow-v2/src/components/layout/BaseLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "C:/Users/crono/Downloads/Muza/muzagrow-v2/src/components/layout/BaseLayout.astro", void 0);

const SITE = {
  email: "hola@muzagrow.com",
  calendlyUrl: "https://calendly.com/moises-muzagrow",
  whatsapp: "https://wa.me/521XXXXXXXXXX?text=Hola%2C%20quiero%20conocer%20MUZA%20GROW"};
const NAV_LINKS = [
  { label: "Proceso", href: "/#proceso" },
  { label: "Servicios", href: "/servicios" },
  { label: "Blog", href: "/blog" },
  { label: "Nosotros", href: "/nosotros" }
];
const SERVICES = [
  {
    num: "01",
    title: "Growth Architecture",
    titleEm: "Discovery",
    description: "Hablamos directo. Entendemos tu operación. Identificamos dónde se pierde tiempo, dinero y eficiencia. Resultado: strategy document + roadmap listo para build.",
    deliverable: "Strategy document + execution roadmap",
    forWho: "Empresas que no saben por dónde empezar",
    tags: ["Diagnóstico", "Roadmap", "Estrategia"]
  },
  {
    num: "02",
    title: "Automation Design",
    titleEm: "& Build",
    description: "Diseñamos los workflows que resuelven tu problema. Construimos con n8n, IA agents, integraciones. Desplegamos y testamos. Resultado: sistema automático funcionando.",
    deliverable: "Working automated system",
    forWho: "Empresas que ya saben qué quieren",
    tags: ["n8n", "Agentes IA", "Integraciones"]
  },
  {
    num: "03",
    title: "Ongoing",
    titleEm: "Optimization",
    description: "Lanzar no es el final. Monitoreamos, iteramos, mejoramos basado en resultados reales. Ajustamos conforme tu negocio crece. Resultado: métricas de ROI comprobadas.",
    deliverable: "Continuous improvement + metrics",
    forWho: "Empresas que lanzaron y quieren mejorar",
    tags: ["Monitoreo", "Métricas", "ROI"]
  }
];
const PROCESS_STEPS = [
  {
    num: "01",
    icon: "🔍",
    title: "Descubrimiento",
    titleEm: "del problema",
    description: "Conversación directa con Moises. Sin formularios infinitos. Entendemos tu operación real, identificamos cuellos de botella y oportunidades.",
    items: ["Auditoría de procesos", "Identificación de oportunidades", "Propuesta de solución"]
  },
  {
    num: "02",
    icon: "⚙️",
    title: "Diseño de",
    titleEm: "solución",
    description: "Creamos el strategy document y arquitectura de la solución. Roadmap claro con timelines y entregables definidos antes de escribir una línea de código.",
    items: ["Strategy document", "Architecture & workflows", "Roadmap claro"]
  },
  {
    num: "03",
    icon: "🚀",
    title: "Construcción",
    titleEm: "& Deploy",
    description: "Build con IA + n8n + integraciones. Testing riguroso. Deployment con documentación completa. Tu equipo lo entiende y puede operarlo.",
    items: ["Build + Testing", "Deployment", "Documentación"]
  },
  {
    num: "04",
    icon: "📊",
    title: "Optimización",
    titleEm: "continua",
    description: "Monitoring de performance, iteración basada en métricas reales. Escalamos conforme tu negocio crece. ROI medible y comprobado.",
    items: ["Monitoring", "Iteración por métricas", "Escalabilidad"]
  }
];
const BUYER_PROFILES = [
  {
    role: "Manager de Procesos",
    pain: "Tu equipo gasta 40% del tiempo en tareas manuales que nadie quiere hacer.",
    solution: "Automatizamos procesos repetitivos. Tu equipo enfoca en estrategia, no en copiar datos.",
    metric: "-60%",
    metricLabel: "tiempo manual",
    color: "teal"
  },
  {
    role: "CEO",
    pain: "Creces rápido pero tus operaciones no escalan. Contratas más gente pero los costos suben igual.",
    solution: "Diseñamos infraestructura que escala sin contratar 10 personas más. Crece sin límite lineal.",
    metric: "3x",
    metricLabel: "capacidad operativa",
    color: "orange"
  },
  {
    role: "CFO / Dir. Finanzas",
    pain: "Nómina, reportes, facturas — 120 horas/mes en procesos manuales. Costo real: miles de dólares.",
    solution: "Automatizamos el ciclo completo. ROI claro, medible, antes de comprometerte.",
    metric: "-68%",
    metricLabel: "costos operacionales",
    color: "coral"
  }
];
const TOOLS = [
  "n8n",
  "OpenAI",
  "Claude",
  "Make",
  "Flowise",
  "Notion",
  "Airtable",
  "WhatsApp",
  "HubSpot",
  "Slack",
  "Google Workspace",
  "LangChain",
  "Zapier"
];

const $$Astro$1 = createAstro("https://www.muzagrow.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { ctaLabel = "AGENDAR DIAGN\xD3STICO", ctaHref = "/contacto" } = Astro2.props;
  const pathname = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-qlfjksao> <nav id="nav" aria-label="Navegación principal" data-astro-cid-qlfjksao> <div class="nav-inner" data-astro-cid-qlfjksao> <a href="/" class="nav-logo" data-astro-cid-qlfjksao>MUZA<span class="dot" data-astro-cid-qlfjksao>.</span>GROW</a> <ul class="nav-links" role="list" data-astro-cid-qlfjksao> ${NAV_LINKS.map((link) => renderTemplate`<li data-astro-cid-qlfjksao> <a${addAttribute(link.href, "href")}${addAttribute([{ active: pathname === link.href || pathname.startsWith(link.href.replace("/#", "/")) }], "class:list")} data-astro-cid-qlfjksao> ${link.label} </a> </li>`)} </ul> <a${addAttribute(ctaHref, "href")} class="nav-cta" data-astro-cid-qlfjksao>${ctaLabel}</a> </div> </nav> </header> ${renderScript($$result, "C:/Users/crono/Downloads/Muza/muzagrow-v2/src/components/layout/Header.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/crono/Downloads/Muza/muzagrow-v2/src/components/layout/Header.astro", void 0);

const $$Astro = createAstro("https://www.muzagrow.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer aria-label="Pie de página MUZA GROW"> <div class="ft-inner"> <div class="ft-grid"> <div> <div class="ft-logo">MUZA<span class="dot">.</span>GROW</div> <p class="ft-desc">
Service Design + Automatización IA para corporativos en LATAM.
          Diseñamos infraestructura que escala.
</p> <div class="ft-status"> <div class="st-dot" aria-hidden="true"></div> <span>// sistemas_activos</span> </div> </div> <nav aria-label="Servicios"> <div class="ft-col-title">Servicios</div> <ul class="ft-links" role="list"> <li><a href="/servicios#discovery">Growth Architecture Discovery</a></li> <li><a href="/servicios#build">Automation Design & Build</a></li> <li><a href="/servicios#optimize">Ongoing Optimization</a></li> </ul> </nav> <nav aria-label="Empresa"> <div class="ft-col-title">Empresa</div> <ul class="ft-links" role="list"> <li><a href="/proceso">Nuestro Proceso</a></li> <li><a href="/nosotros">Nosotros</a></li> <li><a href="/blog">Blog</a></li> <li><a href="/contacto">Contacto</a></li> </ul> </nav> <div> <div class="ft-col-title">Stack</div> <div class="ft-stack"> <div><span class="k">INFRA:</span> n8n / Vercel</div> <div><span class="k">AI:</span> GPT-4o / Claude</div> <div><span class="k">DATA:</span> Postgres / BQ</div> <div><span class="k">WEB:</span> Astro / React</div> <div><span class="k">FLOW:</span> Flowise / LC</div> </div> </div> </div> <div class="ft-bottom"> <div class="ft-loc">📍 &nbsp;CIUDAD DE MÉXICO — GLOBAL</div> <p class="ft-copy">
© 2025 MUZA GROW &nbsp;|&nbsp;
<a href="/privacidad">Privacidad</a> &nbsp;|&nbsp;
<a href="/terminos">Términos</a> &nbsp;|&nbsp;
<a${addAttribute(`mailto:${SITE.email}`, "href")}>${SITE.email}</a> </p> </div> </div> </footer>`;
}, "C:/Users/crono/Downloads/Muza/muzagrow-v2/src/components/layout/Footer.astro", void 0);

export { $$BaseLayout as $, BUYER_PROFILES as B, PROCESS_STEPS as P, SITE as S, TOOLS as T, $$Header as a, $$Footer as b, SERVICES as c };
