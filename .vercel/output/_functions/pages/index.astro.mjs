import { c as createComponent, a as renderTemplate, e as renderScript, r as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CCibinO9.mjs';
import { B as BUYER_PROFILES, c as SERVICES, T as TOOLS, S as SITE, $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../chunks/Footer_BFwV9Oti.mjs';
import { $ as $$Button } from '../chunks/Button_DBZ2O297.mjs';
/* empty css                                 */
import { $ as $$Badge, g as getCollection } from '../chunks/Badge_DhrPtrrL.mjs';
import { $ as $$Process } from '../chunks/Process_CLbktFTd.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<section id="hero" style="position:relative;z-index:1;min-height:100svh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:5.5rem var(--px) 2.5rem;overflow:hidden;" data-astro-cid-anhloy43> <!-- Glow --> <div style="position:absolute;top:40%;left:50%;transform:translate(-50%,-50%);width:min(500px,90vw);height:min(500px,90vw);background:radial-gradient(ellipse,rgba(0,168,143,.06) 0%,rgba(243,198,99,.06) 40%,transparent 70%);border-radius:50%;pointer-events:none;z-index:0;" aria-hidden="true" data-astro-cid-anhloy43></div> <!-- HUD LEFT \u2014 desktop only --> <div class="hud hud-L" aria-label="Estado del sistema" style="display:none;" data-astro-cid-anhloy43> <div class="hud-panel" data-astro-cid-anhloy43> <div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.45rem;" data-astro-cid-anhloy43> <span style="font-family:var(--mono);font-size:.68rem;color:var(--white);background:rgba(14,40,48,.95);border:1px solid var(--bdr);border-radius:3px;padding:.14rem .4rem;" data-astro-cid-anhloy43>&gt;_</span> <span style="width:10px;height:10px;background:var(--coral);border-radius:50%;box-shadow:0 0 8px rgba(238,118,93,.4);animation:cdot 1.9s ease-in-out infinite;" aria-hidden="true" data-astro-cid-anhloy43></span> </div> <p style="font-family:var(--mono);font-size:.58rem;color:var(--gr);" data-astro-cid-anhloy43>Status: <b style="color:var(--teal);" data-astro-cid-anhloy43>Activo</b></p> </div> <div class="hud-line hud-L-line" data-astro-cid-anhloy43></div> </div> <!-- Sphere --> <div id="sphere-wrap" role="img" aria-label="MUZA CORE \u2014 Sistema activo" style="position:relative;z-index:2;width:clamp(220px,48vw,460px);height:clamp(220px,48vw,460px);flex-shrink:0;" data-astro-cid-anhloy43> <canvas id="three-canvas" style="width:100%!important;height:100%!important;" data-astro-cid-anhloy43></canvas> </div> <!-- HUD RIGHT \u2014 desktop only --> <div class="hud hud-R" aria-label="M\xE9tricas ROI" style="display:none;" data-astro-cid-anhloy43> <div class="hud-line hud-R-line" data-astro-cid-anhloy43></div> <div class="hud-panel" data-astro-cid-anhloy43> <div style="font-family:var(--mono);font-size:2.5rem;line-height:1;color:var(--teal);letter-spacing:.04em;" aria-label="ROI 240 porciento" data-astro-cid-anhloy43>+240%</div> <div style="font-family:var(--mono);font-size:.52rem;color:var(--gr);letter-spacing:.12em;text-transform:uppercase;margin-top:.1rem;" data-astro-cid-anhloy43>ROI_M\xE9tricas</div> </div> </div> <!-- Core label --> <div style="display:flex;justify-content:center;margin-top:-.3rem;z-index:3;position:relative;" data-astro-cid-anhloy43> <div style="font-family:var(--mono);font-size:.68rem;letter-spacing:.28em;color:var(--white);background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);backdrop-filter:blur(8px);padding:.45rem 1.3rem;display:inline-flex;align-items:center;gap:.35rem;border-radius:2rem;" data-astro-cid-anhloy43> <span style="color:var(--teal);opacity:.8;" data-astro-cid-anhloy43>[</span>&nbsp;MUZA_CORE&nbsp;<span style="color:var(--teal);opacity:.8;" data-astro-cid-anhloy43>]</span> </div> </div> <!-- Headlines --> <div id="hero-heads" style="text-align:center;margin-top:1.2rem;position:relative;z-index:3;width:100%;" data-astro-cid-anhloy43> <span style="font-family:var(--body);font-weight:800;font-size:clamp(2.4rem,6.5vw,7.5rem);letter-spacing:-.03em;color:var(--white);line-height:1.05;display:block;" data-astro-cid-anhloy43>\nRESOLVEMOS TUS\n</span> <span class="holo-text" style="font-family:var(--body);font-weight:800;font-size:clamp(2.4rem,6.5vw,7.5rem);letter-spacing:-.03em;line-height:1.05;display:block;" data-astro-cid-anhloy43>\nPROBLEMAS OPERACIONALES.\n</span> </div> <p style="font-family:var(--body);font-size:clamp(.95rem,2vw,1.1rem);color:var(--gr);line-height:1.7;text-align:center;max-width:580px;margin-top:1.4rem;position:relative;z-index:3;" data-astro-cid-anhloy43>\nNo vendemos herramientas. Dise\xF1amos infraestructura para que tu equipo haga lo que importa. El resto? Autom\xE1tico.\n</p> <!-- CTAs --> <div style="display:flex;gap:1rem;margin-top:2rem;position:relative;z-index:3;flex-wrap:wrap;justify-content:center;" data-astro-cid-anhloy43> ', " ", ' </div> <!-- Metrics bar --> <div id="metrics" aria-label="M\xE9tricas de desempe\xF1o" style="display:grid;grid-template-columns:repeat(4,1fr);margin-top:2rem;width:100%;max-width:760px;border:1px solid var(--bdr);background:var(--s1);backdrop-filter:blur(12px);position:relative;z-index:3;border-radius:1.5rem;" data-astro-cid-anhloy43> <div class="met" data-astro-cid-anhloy43> <span class="met-num" data-t="300" data-astro-cid-anhloy43>300</span><span class="met-sfx" data-astro-cid-anhloy43>%+</span> <div class="met-lbl" data-astro-cid-anhloy43>ROI automatizaci\xF3n</div> </div> <div class="met" data-astro-cid-anhloy43> <span class="met-num" data-t="48" data-astro-cid-anhloy43>48</span><span class="met-sfx" data-astro-cid-anhloy43>h</span> <div class="met-lbl" data-astro-cid-anhloy43>Deploy garantizado</div> </div> <div class="met" data-astro-cid-anhloy43> <span class="met-num" data-t="24" data-astro-cid-anhloy43>24</span><span class="met-sfx" data-astro-cid-anhloy43>/7</span> <div class="met-lbl" data-astro-cid-anhloy43>Sistemas activos</div> </div> <div class="met" data-astro-cid-anhloy43> <span class="met-num" data-t="12" data-astro-cid-anhloy43>12</span><span class="met-sfx" data-astro-cid-anhloy43>x</span> <div class="met-lbl" data-astro-cid-anhloy43>Velocidad operativa</div> </div> </div> </section> <!-- Sticky Dock --> <div id="dock" data-astro-cid-anhloy43> <div class="dock-inner" data-astro-cid-anhloy43> <div class="dock-term" aria-hidden="true" data-astro-cid-anhloy43>&gt;_</div> <div class="dock-actions" data-astro-cid-anhloy43> <a href="/" class="dock-outline" data-astro-cid-anhloy43><span class="br" data-astro-cid-anhloy43>[</span>&nbsp;INICIO&nbsp;<span class="br" data-astro-cid-anhloy43>]</span></a> <a href="/contacto" class="dock-cta" data-astro-cid-anhloy43>\u2699&nbsp;AGENDAR DIAGN\xD3STICO</a> </div> <div class="dock-loc" data-astro-cid-anhloy43> <span data-astro-cid-anhloy43>\u{1F4CD} CIUDAD DE M\xC9XICO / GLOBAL</span> </div> </div> </div>  ', ` <!-- Three.js sphere \u2014 fully optional, loads after page is visible --> <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r145/three.min.js" defer><\/script> <script defer>
window.addEventListener('load', function () {
  if (typeof THREE === 'undefined') return;
  try {
    const wrap = document.getElementById('sphere-wrap');
    const canvas = document.getElementById('three-canvas');
    if (!wrap || !canvas) return;
    const W = wrap.offsetWidth, H = wrap.offsetHeight;
    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(45, W / H, .1, 100);
    cam.position.z = 3.8;
    const rend = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    rend.setSize(W, H); rend.setPixelRatio(Math.min(devicePixelRatio, 2));
    rend.setClearColor(0, 0);
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const pl1 = new THREE.PointLight(0xffffff, 1.5, 100);
    pl1.position.set(5, 5, 5); scene.add(pl1);
    const pl2 = new THREE.PointLight(0xEE765D, 2, 100);
    pl2.position.set(-5, -5, -2); scene.add(pl2);
    const group = new THREE.Group(); scene.add(group);
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.0, 32, 32),
      new THREE.MeshPhysicalMaterial({ color: 0x00A88F, roughness: 0.2, metalness: 0.1, clearcoat: 1.0, clearcoatRoughness: 0.1 })
    );
    sphere.position.set(-0.6, 0.4, 0); group.add(sphere);
    const cvs = document.createElement('canvas'); cvs.width = 1; cvs.height = 256;
    const ctx = cvs.getContext('2d');
    const grad = ctx.createLinearGradient(0, 0, 0, 256);
    grad.addColorStop(0, '#F3C663'); grad.addColorStop(1, '#EE765D');
    ctx.fillStyle = grad; ctx.fillRect(0, 0, 1, 256);
    const cap = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.35, 0.8, 4, 32),
      new THREE.MeshPhysicalMaterial({ map: new THREE.CanvasTexture(cvs), roughness: 0.3, metalness: 0.1 })
    );
    cap.position.set(1.0, -0.2, 0.5); cap.rotation.z = Math.PI / 5; group.add(cap);
    const box = new THREE.Mesh(
      new THREE.BoxGeometry(0.9, 0.9, 0.1),
      new THREE.MeshPhysicalMaterial({ color: 0x0D0E1F, transparent: true, opacity: 0.6, roughness: 0.1, metalness: 0.1 })
    );
    box.position.set(-0.2, -0.6, 0.9); box.rotation.set(-0.2, 0.4, 0.1); group.add(box);
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.6, 0.005, 16, 100),
      new THREE.MeshBasicMaterial({ color: 0x00A88F, transparent: true, opacity: 0.15 })
    );
    ring.rotation.x = Math.PI / 2.2; group.add(ring);
    const clk = new THREE.Clock();
    (function anim() {
      requestAnimationFrame(anim);
      const t = clk.getElapsedTime();
      sphere.position.y = 0.4 + Math.sin(t * 1.5) * 0.08;
      cap.position.y = -0.2 + Math.sin(t * 1.8 + 1) * 0.1;
      box.position.y = -0.6 + Math.sin(t * 1.2 + 2) * 0.06;
      box.rotation.x = -0.2 + Math.sin(t) * 0.05;
      group.rotation.y += 0.002;
      ring.rotation.x += 0.001;
      rend.render(scene, cam);
    })();
    window.addEventListener('resize', () => {
      const nW = wrap.offsetWidth, nH = wrap.offsetHeight;
      cam.aspect = nW / nH; cam.updateProjectionMatrix(); rend.setSize(nW, nH);
    }, { passive: true });
    if (window.matchMedia('(hover:hover)').matches) {
      document.addEventListener('mousemove', e => {
        const fx = (e.clientX / innerWidth - .5) * .25;
        const fy = (e.clientY / innerHeight - .5) * .16;
        cam.position.x += (fx - cam.position.x) * .04;
        cam.position.y += (-fy - cam.position.y) * .04;
      }, { passive: true });
    }
  } catch (e) { console.warn('Three.js sphere failed:', e); }
});
<\/script>`])), maybeRenderHead(), renderComponent($$result, "Button", $$Button, { "href": "/contacto", "size": "lg", "data-astro-cid-anhloy43": true }, { "default": ($$result2) => renderTemplate`⚙ Agendar diagnóstico` }), renderComponent($$result, "Button", $$Button, { "href": "/contacto#form", "variant": "outline", "size": "lg", "data-astro-cid-anhloy43": true }, { "default": ($$result2) => renderTemplate`Cuéntame tu desafío` }), renderScript($$result, "C:/Users/crono/Downloads/Muza/muzagrow-v2/src/components/sections/Hero.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/crono/Downloads/Muza/muzagrow-v2/src/components/sections/Hero.astro", void 0);

const $$ValueProp = createComponent(($$result, $$props, $$slots) => {
  const colorMap = {
    teal: { accent: "var(--teal)", bg: "rgba(0,168,143,.06)", border: "rgba(0,168,143,.2)" },
    orange: { accent: "var(--orange)", bg: "rgba(243,169,61,.06)", border: "rgba(243,169,61,.2)" },
    coral: { accent: "var(--coral)", bg: "rgba(238,118,93,.06)", border: "rgba(238,118,93,.2)" }
  };
  return renderTemplate`${maybeRenderHead()}<section class="section" id="valor" aria-labelledby="valor-h" data-astro-cid-6zoajvl7> <div class="s-tag" data-astro-cid-6zoajvl7>Para cada tipo de empresa</div> <h2 class="s-headline" id="valor-h" data-astro-cid-6zoajvl7>
Entendemos tu<br data-astro-cid-6zoajvl7><em data-astro-cid-6zoajvl7>problema exacto.</em> </h2> <div class="vp-grid" data-astro-cid-6zoajvl7> ${BUYER_PROFILES.map((profile) => {
    const c = colorMap[profile.color];
    return renderTemplate`<article class="card vp-card"${addAttribute(`vp-${profile.color}`, "aria-labelledby")} data-astro-cid-6zoajvl7> <div class="vp-metric"${addAttribute(`color:${c.accent}`, "style")} data-astro-cid-6zoajvl7>${profile.metric}</div> <div class="vp-metric-label" data-astro-cid-6zoajvl7>${profile.metricLabel}</div> <h3 class="vp-role"${addAttribute(`vp-${profile.color}`, "id")} data-astro-cid-6zoajvl7>${profile.role}</h3> <p class="vp-pain" data-astro-cid-6zoajvl7>${profile.pain}</p> <div class="vp-divider"${addAttribute(`background:${c.accent};opacity:.3`, "style")} data-astro-cid-6zoajvl7></div> <p class="vp-solution" data-astro-cid-6zoajvl7>${profile.solution}</p> </article>`;
  })} </div> </section> `;
}, "C:/Users/crono/Downloads/Muza/muzagrow-v2/src/components/sections/ValueProp.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section" id="servicios" aria-labelledby="svc-h" style="padding-top:0" data-astro-cid-bp4bfslc> <div class="s-tag" data-astro-cid-bp4bfslc>Protocolos disponibles</div> <h2 class="s-headline" id="svc-h" data-astro-cid-bp4bfslc>
Elige tu<br data-astro-cid-bp4bfslc><em data-astro-cid-bp4bfslc>protocolo de escala.</em> </h2> <div class="svc-grid" data-astro-cid-bp4bfslc> ${SERVICES.map((svc, i) => renderTemplate`<article class="card svc-card"${addAttribute(`svc-${i}`, "aria-labelledby")} data-astro-cid-bp4bfslc> <div class="svc-num" data-astro-cid-bp4bfslc>/ ${svc.num}</div> <h3 class="svc-title"${addAttribute(`svc-${i}`, "id")} data-astro-cid-bp4bfslc> ${svc.title}<br data-astro-cid-bp4bfslc><em data-astro-cid-bp4bfslc>${svc.titleEm}</em> </h3> <p class="svc-desc" data-astro-cid-bp4bfslc>${svc.description}</p> <div class="svc-meta" data-astro-cid-bp4bfslc> <div class="svc-meta-row" data-astro-cid-bp4bfslc> <span class="svc-meta-label" data-astro-cid-bp4bfslc>ENTREGABLE</span> <span class="svc-meta-val" data-astro-cid-bp4bfslc>${svc.deliverable}</span> </div> <div class="svc-meta-row" data-astro-cid-bp4bfslc> <span class="svc-meta-label" data-astro-cid-bp4bfslc>PARA</span> <span class="svc-meta-val" data-astro-cid-bp4bfslc>${svc.forWho}</span> </div> </div> <div class="svc-tags" data-astro-cid-bp4bfslc> ${svc.tags.map((tag) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "data-astro-cid-bp4bfslc": true }, { "default": ($$result2) => renderTemplate`${tag}` })}`)} </div> <a href="/contacto" class="svc-link" data-astro-cid-bp4bfslc>SABER MÁS →</a> </article>`)} </div> <div class="tools-strip" data-astro-cid-bp4bfslc> <p class="tools-label" data-astro-cid-bp4bfslc>Herramientas que dominamos</p> <div class="tools-row" data-astro-cid-bp4bfslc> ${TOOLS.map((t) => renderTemplate`<div class="tool-pill" data-astro-cid-bp4bfslc>${t}</div>`)} </div> </div> </section> `;
}, "C:/Users/crono/Downloads/Muza/muzagrow-v2/src/components/sections/Services.astro", void 0);

const $$BlogPreview = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()).slice(0, 3);
  return renderTemplate`${posts.length > 0 && renderTemplate`${maybeRenderHead()}<section class="section" id="blog" aria-labelledby="blog-h" data-astro-cid-65veb55m><div class="s-tag" data-astro-cid-65veb55m>Casos de éxito</div><h2 class="s-headline" id="blog-h" data-astro-cid-65veb55m>
Resultados<br data-astro-cid-65veb55m><em data-astro-cid-65veb55m>reales, métricas reales.</em></h2><div class="blog-grid" data-astro-cid-65veb55m>${posts.map((post) => renderTemplate`<article class="card blog-card" data-astro-cid-65veb55m><div class="blog-meta" data-astro-cid-65veb55m>${renderComponent($$result, "Badge", $$Badge, { "color": "teal", "data-astro-cid-65veb55m": true }, { "default": async ($$result2) => renderTemplate`${post.data.industry}` })}<span class="blog-date" data-astro-cid-65veb55m>${post.data.pubDate.toLocaleDateString("es-MX", { month: "short", year: "numeric" })}</span></div><h3 class="blog-title" data-astro-cid-65veb55m><a${addAttribute(`/blog/${post.id}`, "href")} data-astro-cid-65veb55m>${post.data.title}</a></h3><p class="blog-excerpt" data-astro-cid-65veb55m>${post.data.excerpt}</p>${post.data.metrics && renderTemplate`<div class="blog-metrics" data-astro-cid-65veb55m>${post.data.metrics.map((m) => renderTemplate`<div class="blog-metric" data-astro-cid-65veb55m><span class="blog-metric-val" data-astro-cid-65veb55m>${m.value}</span><span class="blog-metric-lbl" data-astro-cid-65veb55m>${m.label}</span></div>`)}</div>`}<a${addAttribute(`/blog/${post.id}`, "href")} class="blog-link" data-astro-cid-65veb55m>LEER CASO →</a></article>`)}</div><div style="text-align:center;margin-top:3rem;" data-astro-cid-65veb55m><a href="/blog" class="view-all-link" data-astro-cid-65veb55m>Ver todos los casos →</a></div></section>`}`;
}, "C:/Users/crono/Downloads/Muza/muzagrow-v2/src/components/sections/BlogPreview.astro", void 0);

const $$CTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact" style="padding:clamp(4rem,10vw,10rem) var(--px);text-align:center;position:relative;z-index:2;overflow:hidden;"> <!-- Glow --> <div style="content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:min(600px,90vw);height:min(600px,90vw);background:radial-gradient(circle,rgba(238,118,93,.05) 0%,transparent 70%);border-radius:50%;pointer-events:none;" aria-hidden="true"></div> <div style="position:relative;z-index:1;max-width:640px;margin:0 auto;"> <div class="s-tag cta-tag" style="justify-content:center;margin-bottom:1.8rem;">// Siguiente paso</div> <h2 style="font-family:var(--body);font-weight:800;font-size:clamp(2.8rem,8.5vw,7rem);letter-spacing:-.03em;line-height:.95;margin-bottom:.6rem;">
¿Listo para<br> <em class="holo-text" style="font-family:var(--ser);font-style:italic;font-weight:400;">escalar en serio?</em> </h2> <p style="font-family:var(--body);font-size:1rem;color:var(--gr);line-height:1.75;margin:1.2rem auto 2.8rem;max-width:480px;">
Diagnóstico gratuito con Moises. Sin formularios infinitos, sin ventas de alta presión. Entendemos tu problema primero.
</p> <div class="cc-stack"> <a${addAttribute(SITE.whatsapp, "href")} class="cc primary" target="_blank" rel="noopener noreferrer"> <div class="cc-icon">💬</div> <div class="cc-body"> <div class="cc-title">WhatsApp directo</div> <div class="cc-desc">Respuesta en menos de 2h en horario CDMX</div> </div> <div class="cc-arr">→</div> </a> <a href="/contacto" class="cc"> <div class="cc-icon">📋</div> <div class="cc-body"> <div class="cc-title">Cuéntame tu desafío</div> <div class="cc-desc">Formulario detallado — descripción del problema + presupuesto</div> </div> <div class="cc-arr">→</div> </a> <a${addAttribute(`mailto:${SITE.email}`, "href")} class="cc"> <div class="cc-icon">✉️</div> <div class="cc-body"> <div class="cc-title">Email directo</div> <div class="cc-desc">${SITE.email} — respuesta en 24h</div> </div> <div class="cc-arr">→</div> </a> </div> <p style="font-family:var(--mono);font-size:.58rem;color:var(--gr-d);letter-spacing:.1em;">
// Sin contratos largos. Sin costos ocultos. Solo resultados.
</p> </div> </section>`;
}, "C:/Users/crono/Downloads/Muza/muzagrow-v2/src/components/sections/CTA.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "MUZA GROW | Infraestructura de Crecimiento con IA \u2014 CDMX", "description": "Dise\xF1amos infraestructura de crecimiento para corporativos en LATAM. Service Design + Automatizaci\xF3n IA para que tu equipo haga lo que importa." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "ValueProp", $$ValueProp, {})} ${renderComponent($$result2, "Services", $$Services, {})} <!-- Manifesto section --> <section id="manifesto" style="background:rgba(255,255,255,0.02);padding:clamp(4rem,11vw,10rem) var(--px);border-top:1px solid var(--bdr);border-bottom:1px solid var(--bdr);position:relative;overflow:hidden;z-index:2;" aria-labelledby="man-h"> <!-- Animated tape lines --> <div style="position:absolute;left:-5%;right:-5%;height:2px;background:linear-gradient(90deg,transparent,var(--teal),var(--coral),var(--gold),transparent);background-size:200% 100%;animation:holo 4s ease infinite;top:9%;transform:rotate(-.4deg);" aria-hidden="true"></div> <div style="position:absolute;left:-5%;right:-5%;height:2px;background:linear-gradient(90deg,transparent,var(--teal),var(--coral),var(--gold),transparent);background-size:200% 100%;animation:holo 4s ease infinite;bottom:11%;transform:rotate(.35deg);" aria-hidden="true"></div> <!-- Quote mark --> <div style="position:absolute;top:-3rem;left:4vw;font-family:var(--ser);font-size:28vw;color:rgba(255,255,255,.03);pointer-events:none;user-select:none;line-height:1;" aria-hidden="true">"</div> <div style="position:relative;z-index:1;max-width:1100px;margin:0 auto;"> <div class="s-tag">// Manifiesto</div> <h2 id="man-h" style="font-family:var(--body);font-weight:800;letter-spacing:-.02em;line-height:1.05;"> <span style="font-size:clamp(2.4rem,6vw,6.5rem);color:var(--white);display:block;">TU NEGOCIO CRECE.</span> <span style="font-family:var(--ser);font-size:clamp(2.4rem,6vw,6.5rem);color:var(--gr);font-weight:400;font-style:italic;display:block;">tu operación, no tanto.</span> <div style="width:72px;height:1px;background:var(--teal);margin:2.2rem 0;" aria-hidden="true"></div> <span style="font-size:clamp(2.4rem,6vw,6.5rem);color:var(--gold);display:block;">CADA HORA MANUAL QUE CONSUMES</span> <span style="font-family:var(--ser);font-size:clamp(2.4rem,6vw,6.5rem);color:var(--white);font-weight:400;font-style:italic;display:block;">es una hora que <em style="color:var(--coral);font-style:normal;font-weight:800;">no escalas.</em></span> </h2> <div style="height:2.5rem;" aria-hidden="true"></div> <p style="font-family:var(--body);font-size:clamp(.95rem,2vw,2rem);color:rgba(255,255,255,.7);font-weight:400;display:block;margin-bottom:.5rem;">Eso es exactamente lo que venimos a cambiar.</p> <p style="font-family:var(--body);font-size:clamp(.95rem,2vw,2rem);color:var(--white);font-weight:600;display:block;margin-bottom:.5rem;">Automatización real. Sistemas que trabajan cuando tú duermes.</p> <p style="font-family:var(--ser);font-size:clamp(.88rem,1.8vw,1.8rem);color:var(--gr);font-style:italic;">Sin excusas. Sin límites. Con resultados.</p> </div> </section> ${renderComponent($$result2, "Process", $$Process, {})} ${renderComponent($$result2, "BlogPreview", $$BlogPreview, {})} <!-- FAQ section --> <section class="section" id="faq" aria-labelledby="faq-h"> <div class="faq-layout"> <div> <div class="s-tag">Preguntas frecuentes</div> <h2 class="s-headline" id="faq-h" style="margin-bottom:1.5rem">
Todo lo que<br><em>necesitas saber.</em> </h2> <p style="font-family:var(--body);font-size:.93rem;color:var(--gr);line-height:1.75;margin-top:.5rem;margin-bottom:1.6rem;">
Si tienes una duda que no está aquí, escríbenos directamente. Moises responde.
</p> <a href="mailto:hola@muzagrow.com" style="font-family:var(--mono);font-size:.6rem;font-weight:700;letter-spacing:.16em;color:#000;background:var(--white);text-decoration:none;padding:.55rem 1.4rem;border-radius:20px;display:inline-block;transition:box-shadow .2s;">
Escribir al equipo
</a> </div> <div class="faq-list"> ${[
    {
      q: "\xBFCu\xE1nto cuesta?",
      a: "Cada proyecto es diferente. Ofrecemos un diagn\xF3stico gratuito donde definimos el alcance y costo exacto antes de cualquier compromiso. Sin sorpresas."
    },
    {
      q: "\xBFCu\xE1nto tiempo tarda en activarse?",
      a: "Depende del alcance. Algunos sistemas se activan en d\xEDas, proyectos m\xE1s complejos pueden tomar 4-8 semanas. Lo definimos juntos en el diagn\xF3stico."
    },
    {
      q: "\xBFNecesito un equipo t\xE9cnico propio?",
      a: "No. Dise\xF1amos, construimos y documentamos toda la infraestructura. Solo necesitas saber qu\xE9 resultados quieres \u2014 nosotros construimos el camino."
    },
    {
      q: "\xBFQu\xE9 herramientas usan?",
      a: "Trabajamos con n8n, GPT Assistants, Flowise, LangChain, Make, y m\xE1s de 400 integraciones. Seleccionamos las mejores herramientas para cada problema espec\xEDfico."
    },
    {
      q: "\xBFQu\xE9 pasa si algo falla despu\xE9s de lanzar?",
      a: "Todos los proyectos incluyen soporte post-deploy. Somos tu equipo de infraestructura \u2014 no un proveedor que desaparece despu\xE9s de entregar."
    },
    {
      q: "\xBFC\xF3mo es el proceso de trabajo con Moises?",
      a: "Empezamos con una conversaci\xF3n directa (sin formularios). Entendemos el problema, dise\xF1amos la soluci\xF3n, la construimos y la optimizamos juntos. T\xFA decides el ritmo."
    }
  ].map((item, i) => renderTemplate`<div class="faq-item"> <button class="faq-btn" aria-expanded="false"${addAttribute(`fa-${i}`, "aria-controls")}> <span>${item.q}</span> <span class="faq-icon">+</span> </button> <div class="faq-body"${addAttribute(`fa-${i}`, "id")}> <p>${item.a}</p> </div> </div>`)} </div> </div> </section> ${renderComponent($$result2, "CTA", $$CTA, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} ${renderScript($$result, "C:/Users/crono/Downloads/Muza/muzagrow-v2/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/crono/Downloads/Muza/muzagrow-v2/src/pages/index.astro", void 0);

const $$file = "C:/Users/crono/Downloads/Muza/muzagrow-v2/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
