export const locales = ["en", "fr", "es", "zh-CN", "ru", "pt", "sq"] as const;
export type Locale = (typeof locales)[number];
