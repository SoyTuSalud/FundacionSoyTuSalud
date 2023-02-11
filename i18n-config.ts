export const i18n = {
  defaultLocale: 'es',
  locales: ['en', 'de', 'cs','es'],
} as const

export type Locale = typeof i18n['locales'][number]
