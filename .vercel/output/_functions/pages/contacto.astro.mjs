import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CCibinO9.mjs';
import { $ as $$BaseLayout, S as SITE, a as $$Header, b as $$Footer } from '../chunks/Footer_BFwV9Oti.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const schema = z.object({
  nombre: z.string().min(2, "Mínimo 2 caracteres").max(100),
  email: z.string().email("Email inválido"),
  empresa: z.string().min(2, "Mínimo 2 caracteres").max(100),
  tamano: z.enum(["1-50", "50-100", "100-300", "300-1000", "1000+"], {
    errorMap: () => ({ message: "Selecciona el tamaño de tu empresa" })
  }),
  desafio: z.string().min(10, "Descríbenos un poco más (mínimo 10 caracteres)").max(1e3),
  presupuesto: z.string().optional()
});
function ContactForm() {
  const [state, setState] = useState("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = async (data) => {
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("Server error");
      setState("success");
      reset();
    } catch {
      setState("error");
    }
  };
  if (state === "success") {
    return /* @__PURE__ */ jsxs("div", { style: {
      background: "rgba(0,168,143,.08)",
      border: "1px solid rgba(0,168,143,.3)",
      borderRadius: "1.5rem",
      padding: "3rem 2rem",
      textAlign: "center"
    }, children: [
      /* @__PURE__ */ jsx("div", { style: { fontSize: "3rem", marginBottom: "1rem" }, children: "✅" }),
      /* @__PURE__ */ jsx("h3", { style: { fontFamily: "var(--body)", fontSize: "1.4rem", fontWeight: 700, marginBottom: ".75rem" }, children: "¡Mensaje recibido!" }),
      /* @__PURE__ */ jsx("p", { style: { fontFamily: "var(--body)", fontSize: ".95rem", color: "var(--gr)", lineHeight: 1.7, maxWidth: 400, margin: "0 auto" }, children: "Moises revisará tu desafío y te contactará en menos de 24 horas. Si es urgente, escríbenos directo por WhatsApp." }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setState("idle"),
          style: {
            marginTop: "2rem",
            fontFamily: "var(--mono)",
            fontSize: ".6rem",
            color: "var(--gr)",
            background: "none",
            border: "1px solid var(--bdr)",
            borderRadius: 20,
            padding: ".5rem 1.2rem",
            cursor: "pointer",
            letterSpacing: ".12em"
          },
          children: "Enviar otro mensaje"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit), noValidate: true, style: { display: "flex", flexDirection: "column", gap: "1.4rem" }, children: [
    /* @__PURE__ */ jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }, children: [
      /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { className: "form-label", htmlFor: "nombre", children: "Nombre *" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "nombre",
            type: "text",
            className: `form-input ${errors.nombre ? "error" : ""}`,
            placeholder: "Juan García",
            ...register("nombre")
          }
        ),
        errors.nombre && /* @__PURE__ */ jsx("span", { className: "form-error", children: errors.nombre.message })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { className: "form-label", htmlFor: "email", children: "Email *" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "email",
            type: "email",
            className: `form-input ${errors.email ? "error" : ""}`,
            placeholder: "juan@empresa.com",
            ...register("email")
          }
        ),
        errors.email && /* @__PURE__ */ jsx("span", { className: "form-error", children: errors.email.message })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }, children: [
      /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { className: "form-label", htmlFor: "empresa", children: "Empresa *" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "empresa",
            type: "text",
            className: `form-input ${errors.empresa ? "error" : ""}`,
            placeholder: "Empresa XYZ",
            ...register("empresa")
          }
        ),
        errors.empresa && /* @__PURE__ */ jsx("span", { className: "form-error", children: errors.empresa.message })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { className: "form-label", htmlFor: "tamano", children: "Tamaño de empresa *" }),
        /* @__PURE__ */ jsxs(
          "select",
          {
            id: "tamano",
            className: `form-select ${errors.tamano ? "error" : ""}`,
            ...register("tamano"),
            children: [
              /* @__PURE__ */ jsx("option", { value: "", children: "Seleccionar..." }),
              /* @__PURE__ */ jsx("option", { value: "1-50", children: "1-50 empleados" }),
              /* @__PURE__ */ jsx("option", { value: "50-100", children: "50-100 empleados" }),
              /* @__PURE__ */ jsx("option", { value: "100-300", children: "100-300 empleados" }),
              /* @__PURE__ */ jsx("option", { value: "300-1000", children: "300-1,000 empleados" }),
              /* @__PURE__ */ jsx("option", { value: "1000+", children: "1,000+ empleados" })
            ]
          }
        ),
        errors.tamano && /* @__PURE__ */ jsx("span", { className: "form-error", children: errors.tamano.message })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
      /* @__PURE__ */ jsx("label", { className: "form-label", htmlFor: "desafio", children: "Tu desafío operacional *" }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          id: "desafio",
          className: `form-textarea ${errors.desafio ? "error" : ""}`,
          placeholder: "Cuéntame qué problema tienes. ¿Qué procesos son manuales? ¿Dónde se pierde tiempo o dinero? Más contexto = mejor diagnóstico.",
          rows: 5,
          ...register("desafio")
        }
      ),
      errors.desafio && /* @__PURE__ */ jsx("span", { className: "form-error", children: errors.desafio.message })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
      /* @__PURE__ */ jsx("label", { className: "form-label", htmlFor: "presupuesto", children: "Presupuesto estimado (opcional)" }),
      /* @__PURE__ */ jsxs(
        "select",
        {
          id: "presupuesto",
          className: "form-select",
          ...register("presupuesto"),
          children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "Prefiero no decirlo / No lo sé aún" }),
            /* @__PURE__ */ jsx("option", { value: "<5000", children: "Menos de $5,000 USD" }),
            /* @__PURE__ */ jsx("option", { value: "5000-15000", children: "$5,000 – $15,000 USD" }),
            /* @__PURE__ */ jsx("option", { value: "15000-30000", children: "$15,000 – $30,000 USD" }),
            /* @__PURE__ */ jsx("option", { value: "30000+", children: "Más de $30,000 USD" })
          ]
        }
      )
    ] }),
    state === "error" && /* @__PURE__ */ jsx("div", { style: {
      background: "rgba(238,118,93,.1)",
      border: "1px solid rgba(238,118,93,.3)",
      borderRadius: ".75rem",
      padding: ".75rem 1rem",
      fontFamily: "var(--mono)",
      fontSize: ".62rem",
      color: "var(--coral)"
    }, children: "Error al enviar. Por favor intenta de nuevo o contáctanos por WhatsApp." }),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        className: "btn-primary",
        disabled: state === "loading",
        children: state === "loading" ? "⏳ Enviando..." : "⚙ ENVIAR DESAFÍO"
      }
    ),
    /* @__PURE__ */ jsx("p", { style: {
      fontFamily: "var(--mono)",
      fontSize: ".56rem",
      color: "var(--gr-d)",
      textAlign: "center",
      letterSpacing: ".08em"
    }, children: "// Moises responde personalmente en menos de 24h. Sin spam." })
  ] });
}

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contacto | MUZA GROW", "description": "Agenda un diagn\xF3stico gratuito con Moises. Sin formularios infinitos, sin ventas de alta presi\xF3n.", "data-astro-cid-2mxdoeuz": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "ctaLabel": "INICIO", "ctaHref": "/", "data-astro-cid-2mxdoeuz": true })} ${maybeRenderHead()}<main style="padding-top:5rem;" data-astro-cid-2mxdoeuz> <section class="section" style="padding-top:4rem;padding-bottom:6rem;" data-astro-cid-2mxdoeuz> <div class="s-tag" data-astro-cid-2mxdoeuz>// Siguiente paso</div> <h1 class="s-headline" data-astro-cid-2mxdoeuz>
Hablemos de tu<br data-astro-cid-2mxdoeuz><em data-astro-cid-2mxdoeuz>desafío operacional.</em> </h1> <div style="display:grid;grid-template-columns:1fr 1.4fr;gap:4rem;align-items:start;" data-astro-cid-2mxdoeuz> <!-- Left: Contact options --> <div style="display:flex;flex-direction:column;gap:1.5rem;" data-astro-cid-2mxdoeuz> <p style="font-family:var(--body);font-size:1rem;color:var(--gr);line-height:1.75;" data-astro-cid-2mxdoeuz>
Moises revisa cada mensaje personalmente. Sin bots, sin formularios de pre-calificación.
            Cuéntame tu desafío — de ahí sale un diagnóstico real.
</p> <!-- Contact methods --> <div class="cc-stack" style="align-items:stretch;" data-astro-cid-2mxdoeuz> <a${addAttribute(SITE.whatsapp, "href")} class="cc primary" target="_blank" rel="noopener noreferrer" data-astro-cid-2mxdoeuz> <div class="cc-icon" data-astro-cid-2mxdoeuz>💬</div> <div class="cc-body" data-astro-cid-2mxdoeuz> <div class="cc-title" data-astro-cid-2mxdoeuz>WhatsApp directo</div> <div class="cc-desc" data-astro-cid-2mxdoeuz>Respuesta en &lt; 2h en horario CDMX</div> </div> <div class="cc-arr" data-astro-cid-2mxdoeuz>→</div> </a> <a${addAttribute(`mailto:${SITE.email}`, "href")} class="cc" data-astro-cid-2mxdoeuz> <div class="cc-icon" data-astro-cid-2mxdoeuz>✉️</div> <div class="cc-body" data-astro-cid-2mxdoeuz> <div class="cc-title" data-astro-cid-2mxdoeuz>Email</div> <div class="cc-desc" data-astro-cid-2mxdoeuz>${SITE.email}</div> </div> <div class="cc-arr" data-astro-cid-2mxdoeuz>→</div> </a> </div> <!-- What to expect --> <div style="background:var(--s2);border:1px solid var(--bdr);border-radius:1.2rem;padding:1.5rem;" data-astro-cid-2mxdoeuz> <div style="font-family:var(--mono);font-size:.55rem;color:var(--gr-d);letter-spacing:.2em;text-transform:uppercase;margin-bottom:1rem;" data-astro-cid-2mxdoeuz>Qué esperar</div> <ol style="list-style:none;display:flex;flex-direction:column;gap:.85rem;counter-reset:steps;" data-astro-cid-2mxdoeuz> ${[
    "Recibes respuesta en menos de 24h",
    "Conversaci\xF3n directa con Moises",
    "Diagn\xF3stico del problema (sin costo)",
    "Propuesta de soluci\xF3n clara y honesta",
    "Decision en tus manos \u2014 sin presi\xF3n"
  ].map((step, i) => renderTemplate`<li style="font-family:var(--body);font-size:.88rem;color:var(--gr);display:flex;align-items:flex-start;gap:.75rem;line-height:1.5;" data-astro-cid-2mxdoeuz> <span style="font-family:var(--mono);font-size:.6rem;color:var(--teal);background:rgba(0,168,143,.1);border:1px solid rgba(0,168,143,.2);border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:.1rem;" data-astro-cid-2mxdoeuz> ${i + 1} </span> ${step} </li>`)} </ol> </div> <!-- Calendly embed option --> ${SITE.calendlyUrl !== "https://calendly.com/moises-muzagrow"} </div> <!-- Right: Contact form --> <div id="form" data-astro-cid-2mxdoeuz> <div style="font-family:var(--mono);font-size:.55rem;color:var(--gr-d);letter-spacing:.2em;text-transform:uppercase;margin-bottom:1.5rem;" data-astro-cid-2mxdoeuz>
FORMULARIO DE CONTACTO
</div> ${renderComponent($$result2, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/forms/ContactForm", "client:component-export": "default", "data-astro-cid-2mxdoeuz": true })} </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-2mxdoeuz": true })} ` })} `;
}, "C:/Users/crono/Downloads/Muza/muzagrow-v2/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/crono/Downloads/Muza/muzagrow-v2/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
