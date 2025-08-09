declare module 'next-international/server' {
  export function createI18nServer(config: any, options?: any): any;
}

declare module 'next-international/client' {
  export function createI18nClient(config: any, options?: any): any;
}

declare module 'next-international/middleware' {
  export function createI18nMiddleware(config: any, options?: any): any;
}
