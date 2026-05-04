# CLAUDE.md — MUZA GROW v2

> Status: ✅ Project built. Use this as reference for future iterations.

## Stack
- **Framework:** Astro 5 + TypeScript
- **Styling:** Tailwind CSS v4 + custom CSS properties
- **Forms:** React Hook Form + Zod (React island)
- **Email:** Resend API
- **Blog:** MDX content collections
- **Deploy:** Vercel (hybrid output)

## Project Structure
```
src/
├── components/
│   ├── layout/        BaseLayout, Header, Footer
│   ├── sections/      Hero, ValueProp, Services, Process, BlogPreview, CTA
│   ├── ui/            Button, Badge
│   ├── forms/         ContactForm.tsx (React island)
│   └── common/        SEO
├── content/
│   ├── blog/          MDX case studies
│   └── config.ts      Content collection schema
├── lib/
│   ├── constants.ts   Site config, services, process steps, buyer profiles
│   └── resend.ts      Email client + HTML template
├── pages/
│   ├── index.astro
│   ├── servicios.astro
│   ├── proceso.astro
│   ├── nosotros.astro
│   ├── contacto.astro
│   ├── blog/index.astro + [slug].astro
│   ├── 404.astro
│   └── api/contact.ts
└── styles/globals.css
```

## Design Tokens (in globals.css)
- `--bg: #0D0E1F` — page background
- `--teal: #00A88F` — primary CTAs
- `--coral: #EE765D` — accents
- `--gold: #F3C663` — highlights
- `--gr: #8F90A6` — muted text

## Key Files to Edit
- **Content:** `src/lib/constants.ts` — update services, buyer profiles, process steps
- **Blog:** Add MDX files to `src/content/blog/`
- **Contact:** Update `hola@muzagrow.com` in constants and api/contact.ts
- **Calendly:** Set `PUBLIC_CALENDLY_URL` in `.env.local`
- **WhatsApp:** Update phone number in `src/lib/constants.ts` → `SITE.whatsapp`

## Environment Variables (.env.local)
```
RESEND_API_KEY=re_your_key_here
PUBLIC_PLAUSIBLE_DOMAIN=muzagrow.com
PUBLIC_SITE_URL=https://muzagrow.com
PUBLIC_CALENDLY_URL=https://calendly.com/moises-muzagrow
```

## Commands
```bash
pnpm install       # Install dependencies
pnpm run dev       # Start dev server (localhost:4321)
pnpm run build     # Build for production
pnpm run preview   # Preview production build
```

## Non-Negotiable Rules
1. Service Designer positioning — never "n8n reseller"
2. Moises speaks directly with every client
3. Blog posts = real cases with real metrics only
4. Mobile-first responsive
5. Form validation both client + server side
6. No console errors in production
7. Every commit production-ready
