import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, j as renderSlot } from './astro/server_CCibinO9.mjs';
/* empty css                         */

const $$Astro = createAstro("https://www.muzagrow.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    href,
    variant = "primary",
    size = "md",
    type = "button",
    class: className = "",
    target,
    rel,
    disabled
  } = Astro2.props;
  const Tag = href ? "a" : "button";
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "href": href, "type": href ? void 0 : type, "target": target, "rel": rel, "disabled": disabled, "class:list": ["btn", `btn-${variant}`, `btn-size-${size}`, className], "data-astro-cid-6ygtcg62": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} `;
}, "C:/Users/crono/Downloads/Muza/muzagrow-v2/src/components/ui/Button.astro", void 0);

export { $$Button as $ };
