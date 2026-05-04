import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';

const schema = z.object({
  nombre: z.string().min(2, 'Mínimo 2 caracteres').max(100),
  email: z.string().email('Email inválido'),
  empresa: z.string().min(2, 'Mínimo 2 caracteres').max(100),
  tamano: z.enum(['1-50', '50-100', '100-300', '300-1000', '1000+'], {
    errorMap: () => ({ message: 'Selecciona el tamaño de tu empresa' }),
  }),
  desafio: z.string().min(10, 'Descríbenos un poco más (mínimo 10 caracteres)').max(1000),
  presupuesto: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [state, setState] = useState<SubmitState>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setState('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Server error');
      setState('success');
      reset();
    } catch {
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <div style={{
        background: 'rgba(0,168,143,.08)',
        border: '1px solid rgba(0,168,143,.3)',
        borderRadius: '1.5rem',
        padding: '3rem 2rem',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
        <h3 style={{ fontFamily: 'var(--body)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '.75rem' }}>
          ¡Mensaje recibido!
        </h3>
        <p style={{ fontFamily: 'var(--body)', fontSize: '.95rem', color: 'var(--gr)', lineHeight: 1.7, maxWidth: 400, margin: '0 auto' }}>
          Moises revisará tu desafío y te contactará en menos de 24 horas.
          Si es urgente, escríbenos directo por WhatsApp.
        </p>
        <button
          onClick={() => setState('idle')}
          style={{
            marginTop: '2rem',
            fontFamily: 'var(--mono)',
            fontSize: '.6rem',
            color: 'var(--gr)',
            background: 'none',
            border: '1px solid var(--bdr)',
            borderRadius: 20,
            padding: '.5rem 1.2rem',
            cursor: 'pointer',
            letterSpacing: '.12em',
          }}
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
      {/* Nombre + Email */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className="form-group">
          <label className="form-label" htmlFor="nombre">Nombre *</label>
          <input
            id="nombre"
            type="text"
            className={`form-input ${errors.nombre ? 'error' : ''}`}
            placeholder="Juan García"
            {...register('nombre')}
          />
          {errors.nombre && <span className="form-error">{errors.nombre.message}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="email">Email *</label>
          <input
            id="email"
            type="email"
            className={`form-input ${errors.email ? 'error' : ''}`}
            placeholder="juan@empresa.com"
            {...register('email')}
          />
          {errors.email && <span className="form-error">{errors.email.message}</span>}
        </div>
      </div>

      {/* Empresa + Tamaño */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className="form-group">
          <label className="form-label" htmlFor="empresa">Empresa *</label>
          <input
            id="empresa"
            type="text"
            className={`form-input ${errors.empresa ? 'error' : ''}`}
            placeholder="Empresa XYZ"
            {...register('empresa')}
          />
          {errors.empresa && <span className="form-error">{errors.empresa.message}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="tamano">Tamaño de empresa *</label>
          <select
            id="tamano"
            className={`form-select ${errors.tamano ? 'error' : ''}`}
            {...register('tamano')}
          >
            <option value="">Seleccionar...</option>
            <option value="1-50">1-50 empleados</option>
            <option value="50-100">50-100 empleados</option>
            <option value="100-300">100-300 empleados</option>
            <option value="300-1000">300-1,000 empleados</option>
            <option value="1000+">1,000+ empleados</option>
          </select>
          {errors.tamano && <span className="form-error">{errors.tamano.message}</span>}
        </div>
      </div>

      {/* Desafío */}
      <div className="form-group">
        <label className="form-label" htmlFor="desafio">Tu desafío operacional *</label>
        <textarea
          id="desafio"
          className={`form-textarea ${errors.desafio ? 'error' : ''}`}
          placeholder="Cuéntame qué problema tienes. ¿Qué procesos son manuales? ¿Dónde se pierde tiempo o dinero? Más contexto = mejor diagnóstico."
          rows={5}
          {...register('desafio')}
        />
        {errors.desafio && <span className="form-error">{errors.desafio.message}</span>}
      </div>

      {/* Presupuesto */}
      <div className="form-group">
        <label className="form-label" htmlFor="presupuesto">Presupuesto estimado (opcional)</label>
        <select
          id="presupuesto"
          className="form-select"
          {...register('presupuesto')}
        >
          <option value="">Prefiero no decirlo / No lo sé aún</option>
          <option value="<5000">Menos de $5,000 USD</option>
          <option value="5000-15000">$5,000 – $15,000 USD</option>
          <option value="15000-30000">$15,000 – $30,000 USD</option>
          <option value="30000+">Más de $30,000 USD</option>
        </select>
      </div>

      {state === 'error' && (
        <div style={{
          background: 'rgba(238,118,93,.1)',
          border: '1px solid rgba(238,118,93,.3)',
          borderRadius: '.75rem',
          padding: '.75rem 1rem',
          fontFamily: 'var(--mono)',
          fontSize: '.62rem',
          color: 'var(--coral)',
        }}>
          Error al enviar. Por favor intenta de nuevo o contáctanos por WhatsApp.
        </div>
      )}

      <button
        type="submit"
        className="btn-primary"
        disabled={state === 'loading'}
      >
        {state === 'loading' ? '⏳ Enviando...' : '⚙ ENVIAR DESAFÍO'}
      </button>

      <p style={{
        fontFamily: 'var(--mono)',
        fontSize: '.56rem',
        color: 'var(--gr-d)',
        textAlign: 'center',
        letterSpacing: '.08em',
      }}>
        // Moises responde personalmente en menos de 24h. Sin spam.
      </p>
    </form>
  );
}
