import type { APIRoute } from 'astro';
import { z } from 'zod';
import { createResendClient, buildEmailHtml } from '@/lib/resend';

export const prerender = false;

const schema = z.object({
  nombre: z.string().min(2).max(100),
  email: z.string().email(),
  empresa: z.string().min(2).max(100),
  tamano: z.enum(['1-50', '50-100', '100-300', '300-1000', '1000+']),
  desafio: z.string().min(10).max(1000),
  presupuesto: z.string().optional(),
});

const rateLimit = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const window = 60 * 60 * 1000; // 1 hour
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

export const POST: APIRoute = async ({ request }) => {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';

  if (!checkRateLimit(ip)) {
    return new Response(
      JSON.stringify({ success: false, error: 'Rate limit excedido. Intenta más tarde.' }),
      { status: 429, headers: { 'Content-Type': 'application/json' } },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ success: false, error: 'Formato inválido' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } },
    );
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    const firstError = parsed.error.errors[0]?.message || 'Datos inválidos';
    return new Response(
      JSON.stringify({ success: false, error: firstError }),
      { status: 422, headers: { 'Content-Type': 'application/json' } },
    );
  }

  const data = parsed.data;

  try {
    const resend = createResendClient();
    await resend.emails.send({
      from: 'MUZA GROW Forms <forms@muzagrow.com>',
      to: ['hola@muzagrow.com'],
      replyTo: data.email,
      subject: `Nuevo lead — ${data.empresa}`,
      html: buildEmailHtml(data),
    });

    return new Response(
      JSON.stringify({ success: true, message: 'Formulario enviado correctamente' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  } catch (err) {
    console.error('Resend error:', err);
    return new Response(
      JSON.stringify({ success: false, error: 'Error al enviar el correo. Intenta por WhatsApp.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
};
