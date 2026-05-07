import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CCibinO9.mjs';
import { g as getCollection, $ as $$Badge } from '../chunks/Badge_DhrPtrrL.mjs';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../chunks/Footer_BFwV9Oti.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog \u2014 Casos de \xC9xito | MUZA GROW", "description": "Casos de \xE9xito reales con m\xE9tricas comprobadas. C\xF3mo MUZA GROW resuelve problemas operacionales en corporativos de LATAM.", "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-5tznm7mj": true })} ${maybeRenderHead()}<main style="padding-top:5rem;" data-astro-cid-5tznm7mj> <section class="section" style="padding-top:4rem;padding-bottom:2rem;" data-astro-cid-5tznm7mj> <div class="s-tag" data-astro-cid-5tznm7mj>Casos de éxito</div> <h1 class="s-headline" data-astro-cid-5tznm7mj>
Resultados reales,<br data-astro-cid-5tznm7mj><em data-astro-cid-5tznm7mj>métricas reales.</em> </h1> <p style="font-family:var(--body);font-size:1.05rem;color:var(--gr);line-height:1.75;max-width:600px;" data-astro-cid-5tznm7mj>
No "case studies" inventados. Cada post documenta un proyecto real:
        el problema del cliente, lo que construimos y los resultados medibles.
</p> </section> <section class="section" style="padding-top:0;padding-bottom:6rem;" data-astro-cid-5tznm7mj> ${posts.length === 0 ? renderTemplate`<div style="text-align:center;padding:4rem;border:1px dashed var(--bdr);border-radius:1.5rem;" data-astro-cid-5tznm7mj> <div style="font-family:var(--mono);font-size:.6rem;color:var(--gr-d);letter-spacing:.2em;text-transform:uppercase;margin-bottom:1rem;" data-astro-cid-5tznm7mj>
// próximamente
</div> <p style="font-family:var(--body);font-size:1rem;color:var(--gr);max-width:400px;margin:0 auto;line-height:1.7;" data-astro-cid-5tznm7mj>
Los primeros casos de éxito se publicarán conforme completemos proyectos.
            Honestidad sobre social proof fabricado.
</p> </div>` : renderTemplate`<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.2rem;" data-astro-cid-5tznm7mj> ${posts.map((post) => renderTemplate`<article class="card" style="display:flex;flex-direction:column;gap:.85rem;" data-astro-cid-5tznm7mj> <div style="display:flex;align-items:center;gap:.75rem;" data-astro-cid-5tznm7mj> ${renderComponent($$result2, "Badge", $$Badge, { "color": "teal", "data-astro-cid-5tznm7mj": true }, { "default": async ($$result3) => renderTemplate`${post.data.industry}` })} <span style="font-family:var(--mono);font-size:.55rem;color:var(--gr-d);" data-astro-cid-5tznm7mj> ${post.data.pubDate.toLocaleDateString("es-MX", { month: "long", year: "numeric" })} </span> </div> <h2 style="font-family:var(--body);font-size:1.15rem;font-weight:700;line-height:1.3;" data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${post.id}`, "href")} style="text-decoration:none;color:inherit;transition:color .2s;" data-astro-cid-5tznm7mj> ${post.data.title} </a> </h2> <p style="font-family:var(--body);font-size:.88rem;color:var(--gr);line-height:1.65;flex:1;" data-astro-cid-5tznm7mj> ${post.data.excerpt} </p> ${post.data.metrics && renderTemplate`<div style="display:flex;gap:1rem;flex-wrap:wrap;padding:.9rem;background:var(--s2);border-radius:.75rem;border:1px solid var(--bdr);" data-astro-cid-5tznm7mj> ${post.data.metrics.map((m) => renderTemplate`<div style="display:flex;flex-direction:column;gap:.2rem;" data-astro-cid-5tznm7mj> <span style="font-family:var(--mono);font-size:1.4rem;font-weight:700;color:var(--teal);line-height:1;" data-astro-cid-5tznm7mj>${m.value}</span> <span style="font-family:var(--mono);font-size:.48rem;color:var(--gr-d);letter-spacing:.15em;text-transform:uppercase;" data-astro-cid-5tznm7mj>${m.label}</span> </div>`)} </div>`} <a${addAttribute(`/blog/${post.id}`, "href")} style="font-family:var(--mono);font-size:.6rem;color:var(--gold);letter-spacing:.13em;text-decoration:none;text-transform:uppercase;display:inline-flex;align-items:center;gap:.4rem;transition:gap .2s;margin-top:.3rem;" data-astro-cid-5tznm7mj>
LEER CASO →
</a> </article>`)} </div>`} </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-5tznm7mj": true })} ` })} `;
}, "C:/Users/crono/Downloads/Muza/muzagrow-v2/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/crono/Downloads/Muza/muzagrow-v2/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
