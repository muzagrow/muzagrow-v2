import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CCibinO9.mjs';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../chunks/Footer_BFwV9Oti.mjs';
import { $ as $$Button } from '../chunks/Button_DBZ2O297.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "404 \u2014 P\xE1gina no encontrada | MUZA GROW" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main style="padding-top:5rem;min-height:80vh;display:flex;align-items:center;justify-content:center;text-align:center;"> <div style="max-width:500px;padding:2rem;"> <div style="font-family:var(--mono);font-size:8rem;font-weight:700;color:rgba(243,198,99,.08);line-height:1;margin-bottom:-.5rem;">
404
</div> <div style="font-family:var(--mono);font-size:.6rem;color:var(--gr-d);letter-spacing:.2em;text-transform:uppercase;margin-bottom:1.5rem;">
// ruta_no_encontrada
</div> <h1 style="font-family:var(--body);font-size:2rem;font-weight:800;margin-bottom:1rem;">
Esta página no existe (aún)
</h1> <p style="font-family:var(--body);font-size:.95rem;color:var(--gr);line-height:1.75;margin-bottom:2.5rem;">
Puede que estés buscando algo que todavía estamos construyendo,
        o que la URL cambió. Vuelve al inicio.
</p> <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;"> ${renderComponent($$result2, "Button", $$Button, { "href": "/" }, { "default": ($$result3) => renderTemplate`Volver al inicio` })} ${renderComponent($$result2, "Button", $$Button, { "href": "/contacto", "variant": "outline" }, { "default": ($$result3) => renderTemplate`Contactar a Moises` })} </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/crono/Downloads/Muza/muzagrow-v2/src/pages/404.astro", void 0);

const $$file = "C:/Users/crono/Downloads/Muza/muzagrow-v2/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
