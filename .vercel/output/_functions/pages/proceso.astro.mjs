import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CCibinO9.mjs';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../chunks/Footer_BFwV9Oti.mjs';
import { $ as $$Process } from '../chunks/Process_CLbktFTd.mjs';
import { $ as $$Button } from '../chunks/Button_DBZ2O297.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Proceso = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Nuestro Proceso | MUZA GROW", "description": "Discovery \u2192 Dise\xF1o \u2192 Construcci\xF3n \u2192 Optimizaci\xF3n. As\xED trabajamos en MUZA GROW para entregar resultados operacionales reales.", "data-astro-cid-p66xhnn7": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-p66xhnn7": true })} ${maybeRenderHead()}<main style="padding-top:5rem;" data-astro-cid-p66xhnn7> <section class="section" style="padding-top:4rem;padding-bottom:2rem;" data-astro-cid-p66xhnn7> <div class="s-tag" data-astro-cid-p66xhnn7>Metodología</div> <h1 class="s-headline" data-astro-cid-p66xhnn7>
Cómo pasamos de<br data-astro-cid-p66xhnn7><em data-astro-cid-p66xhnn7>problema a resultados.</em> </h1> <p style="font-family:var(--body);font-size:1.05rem;color:var(--gr);line-height:1.75;max-width:640px;" data-astro-cid-p66xhnn7>
No tenemos paquetes genéricos ni soluciones pre-armadas. Cada proyecto
        empieza desde cero entendiendo tu operación específica. Aquí está exactamente cómo trabajamos.
</p> </section> ${renderComponent($$result2, "Process", $$Process, { "data-astro-cid-p66xhnn7": true })} <!-- Timeline expectations --> <section class="section" id="timeline" style="padding-top:0;" data-astro-cid-p66xhnn7> <div class="s-tag" data-astro-cid-p66xhnn7>Tiempos</div> <h2 class="s-headline" data-astro-cid-p66xhnn7>¿Cuánto tarda<br data-astro-cid-p66xhnn7><em data-astro-cid-p66xhnn7>cada fase?</em></h2> <div style="display:flex;flex-direction:column;gap:1rem;" data-astro-cid-p66xhnn7> ${[
    { phase: "Discovery", duration: "1-2 semanas", desc: "Sesiones de diagn\xF3stico, mapeo de procesos, entregable del strategy document." },
    { phase: "Dise\xF1o & Arquitectura", duration: "1 semana", desc: "Dise\xF1o detallado de la soluci\xF3n, workflows, selecci\xF3n de herramientas, roadmap final." },
    { phase: "Construcci\xF3n", duration: "2-6 semanas", desc: "Depende del alcance del proyecto. Proyectos simples: 2 semanas. Complejos: 6-8 semanas." },
    { phase: "Testing & QA", duration: "3-5 d\xEDas", desc: "Pruebas exhaustivas antes del deployment. Sin atajos." },
    { phase: "Deployment", duration: "1-2 d\xEDas", desc: "Activaci\xF3n en producci\xF3n, verificaci\xF3n de todos los sistemas, handoff al equipo." },
    { phase: "Optimization", duration: "Continuo", desc: "Monitoring mensual, iteraciones basadas en datos, escalabilidad conforme creces." }
  ].map((item, i) => renderTemplate`<div class="card" style="display:flex;align-items:center;gap:2rem;padding:1.5rem 2rem;" data-astro-cid-p66xhnn7> <div style="font-family:var(--mono);font-size:2rem;font-weight:700;color:rgba(243,198,99,.15);min-width:40px;text-align:center;" data-astro-cid-p66xhnn7>${String(i + 1).padStart(2, "0")}</div> <div style="flex:1;" data-astro-cid-p66xhnn7> <div style="font-family:var(--body);font-size:1rem;font-weight:700;color:var(--white);margin-bottom:.3rem;" data-astro-cid-p66xhnn7>${item.phase}</div> <div style="font-family:var(--body);font-size:.88rem;color:var(--gr);line-height:1.6;" data-astro-cid-p66xhnn7>${item.desc}</div> </div> <div style="font-family:var(--mono);font-size:.65rem;color:var(--teal);letter-spacing:.1em;white-space:nowrap;flex-shrink:0;background:rgba(0,168,143,.08);border:1px solid rgba(0,168,143,.2);padding:.4rem .9rem;border-radius:20px;" data-astro-cid-p66xhnn7> ${item.duration} </div> </div>`)} </div> </section> <!-- Why we work this way --> <section class="section" style="padding-top:0;padding-bottom:5rem;" data-astro-cid-p66xhnn7> <div class="s-tag" data-astro-cid-p66xhnn7>Por qué así</div> <h2 class="s-headline" data-astro-cid-p66xhnn7>La razón detrás<br data-astro-cid-p66xhnn7><em data-astro-cid-p66xhnn7>del proceso.</em></h2> <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.2rem;" data-astro-cid-p66xhnn7> ${[
    {
      icon: "\u{1F3AF}",
      title: "Discovery previene desperdicio",
      desc: "El 80% del trabajo mal invertido en automatizaci\xF3n viene de no entender el problema. Discovery elimina eso."
    },
    {
      icon: "\u{1F4D0}",
      title: "Dise\xF1o primero, construcci\xF3n despu\xE9s",
      desc: "Construir sin dise\xF1o genera retrabajos. Con arquitectura clara, el build es predecible y sin sorpresas."
    },
    {
      icon: "\u{1F4CA}",
      title: "M\xE9tricas desde el d\xEDa 1",
      desc: "Definimos KPIs antes de construir. As\xED sabemos exactamente si el sistema est\xE1 funcionando o no."
    }
  ].map((item) => renderTemplate`<div class="card" style="text-align:center;" data-astro-cid-p66xhnn7> <div style="font-size:2.5rem;margin-bottom:1rem;" data-astro-cid-p66xhnn7>${item.icon}</div> <h3 style="font-family:var(--body);font-size:1.1rem;font-weight:700;margin-bottom:.75rem;" data-astro-cid-p66xhnn7>${item.title}</h3> <p style="font-family:var(--body);font-size:.9rem;color:var(--gr);line-height:1.65;" data-astro-cid-p66xhnn7>${item.desc}</p> </div>`)} </div> </section> <section style="text-align:center;padding:4rem var(--px) 6rem;position:relative;z-index:2;" data-astro-cid-p66xhnn7> <h2 style="font-family:var(--body);font-size:clamp(2rem,4vw,3rem);font-weight:800;margin-bottom:1.5rem;" data-astro-cid-p66xhnn7>
¿Listo para empezar con Discovery?
</h2> ${renderComponent($$result2, "Button", $$Button, { "href": "/contacto", "size": "lg", "data-astro-cid-p66xhnn7": true }, { "default": ($$result3) => renderTemplate`Agendar diagnóstico gratuito →` })} </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-p66xhnn7": true })} ` })} `;
}, "C:/Users/crono/Downloads/Muza/muzagrow-v2/src/pages/proceso.astro", void 0);

const $$file = "C:/Users/crono/Downloads/Muza/muzagrow-v2/src/pages/proceso.astro";
const $$url = "/proceso";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Proceso,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
