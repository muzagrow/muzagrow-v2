import { c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_CCibinO9.mjs';
import { P as PROCESS_STEPS } from './Footer_BFwV9Oti.mjs';
/* empty css                         */

const $$Process = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section" id="proceso" aria-labelledby="process-h" data-astro-cid-gto3gzpn> <div class="s-tag" data-astro-cid-gto3gzpn>Proceso</div> <h2 class="s-headline" id="process-h" data-astro-cid-gto3gzpn>
Cómo lo<br data-astro-cid-gto3gzpn><em data-astro-cid-gto3gzpn>hacemos realidad.</em> </h2> <div class="steps-grid" data-astro-cid-gto3gzpn> ${PROCESS_STEPS.map((step) => renderTemplate`<article class="card step-card"${addAttribute(`step-${step.num}`, "aria-labelledby")} data-astro-cid-gto3gzpn> <span class="step-num" data-astro-cid-gto3gzpn>${step.num}</span> <div class="step-icon" aria-hidden="true" data-astro-cid-gto3gzpn>${step.icon}</div> <h3 class="step-title"${addAttribute(`step-${step.num}`, "id")} data-astro-cid-gto3gzpn> ${step.title}<br data-astro-cid-gto3gzpn><em data-astro-cid-gto3gzpn>${step.titleEm}</em> </h3> <p class="step-desc" data-astro-cid-gto3gzpn>${step.description}</p> <ul class="step-list" data-astro-cid-gto3gzpn> ${step.items.map((item) => renderTemplate`<li data-astro-cid-gto3gzpn>${item}</li>`)} </ul> </article>`)} </div> </section> `;
}, "C:/Users/crono/Downloads/Muza/muzagrow-v2/src/components/sections/Process.astro", void 0);

export { $$Process as $ };
