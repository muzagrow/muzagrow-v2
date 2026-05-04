import { Resend } from 'resend';

export function createResendClient() {
  return new Resend(import.meta.env.RESEND_API_KEY);
}

export interface ContactEmailData {
  nombre: string;
  email: string;
  empresa: string;
  tamano: string;
  desafio: string;
  presupuesto?: string;
}

export function buildEmailHtml(data: ContactEmailData): string {
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
        ${data.presupuesto ? `<tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">Presupuesto</td><td style="padding: 8px;">${data.presupuesto}</td></tr>` : ''}
      </table>
      <p style="color: #666; font-size: 12px; margin-top: 20px;">
        Enviado desde muzagrow.com — ${new Date().toLocaleString('es-MX')}
      </p>
    </div>
  `;
}
