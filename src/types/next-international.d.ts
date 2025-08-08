declare module 'next-international/server' {
  export function createI18nServer(config: any): any;
}

declare module 'next-international/client' {
  export function createI18nClient(config: any): any;
}

declare module 'next-international/middleware' {
  export function createI18nMiddleware(config: any): any;
}
