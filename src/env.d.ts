/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly RESEND_API_KEY: string;
  readonly PUBLIC_PLAUSIBLE_DOMAIN: string;
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_CALENDLY_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
