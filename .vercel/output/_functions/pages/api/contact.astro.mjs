import { z } from 'zod';
import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

function createResendClient() {
  return new Resend("prj_RgtZrSv9eyi4qrxsRp4X80UIbCFD");
}
function buildEmailHtml(data) {
  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #00A88F; border-bottom: 2px solid #00A88F; padding-bottom: 10px;">
        Nuevo Lead — ${data.empresa}
      </h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px; font-weight: bold; width: 140px;">Nombre</td><td style="padding: 8px;">${data.nombre}</td></tr>
        <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Empresa</td><td style="padding: 8px;">${data.empresa}</td></tr>
        <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">Tamaño</td><td style="padding: 8px;">${data.tamano}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Desafío</td><td style="padding: 8px;">${data.desafio}</td></tr>
        ${data.presupuesto ? `<tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">Presupuesto</td><td style="padding: 8px;">${data.presupuesto}</td></tr>` : ""}
      </table>
      <p style="color: #666; font-size: 12px; margin-top: 20px;">
        Enviado desde muzagrow.com — ${(/* @__PURE__ */ new Date()).toLocaleString("es-MX")}
      </p>
    </div>
  `;
}

const prerender = false;
const schema = z.object({
  nombre: z.string().min(2).max(100),
  email: z.string().email(),
  empresa: z.string().min(2).max(100),
  tamano: z.enum(["1-50", "50-100", "100-300", "300-1000", "1000+"]),
  desafio: z.string().min(10).max(1e3),
  presupuesto: z.string().optional()
});
const rateLimit = /* @__PURE__ */ new Map();
function checkRateLimit(ip) {
  const now = Date.now();
  const window = 60 * 60 * 1e3;
  const max = 5;
  const entry = rateLimit.get(ip);
  if (!entry || entry.resetAt < now) {
    rateLimit.set(ip, { count: 1, resetAt: now + window });
    return true;
  }
  if (entry.count >= max) return false;
  entry.count++;
  return true;
}
const POST = async ({ request }) => {
  const ip = request.headers.get("x-forwarded-for") || "unknown";
  if (!checkRateLimit(ip)) {
    return new Response(
      JSON.stringify({ success: false, error: "Rate limit excedido. Intenta más tarde." }),
      { status: 429, headers: { "Content-Type": "application/json" } }
    );
  }
  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ success: false, error: "Formato inválido" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    const firstError = parsed.error.errors[0]?.message || "Datos inválidos";
    return new Response(
      JSON.stringify({ success: false, error: firstError }),
      { status: 422, headers: { "Content-Type": "application/json" } }
    );
  }
  const data = parsed.data;
  try {
    const resend = createResendClient();
    await resend.emails.send({
      from: "MUZA GROW Forms <forms@muzagrow.com>",
      to: ["hola@muzagrow.com"],
      replyTo: data.email,
      subject: `Nuevo lead — ${data.empresa}`,
      html: buildEmailHtml(data)
    });
    return new Response(
      JSON.stringify({ success: true, message: "Formulario enviado correctamente" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Resend error:", err);
    return new Response(
      JSON.stringify({ success: false, error: "Error al enviar el correo. Intenta por WhatsApp." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
