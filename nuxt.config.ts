// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: process.env.NODE_ENV !== 'production' },

  modules: ['nuxt-security'],

  security: {
    headers: {
      contentSecurityPolicy: {
        'default-src': ["'self'"],
        'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        'style-src': ["'self'", "'unsafe-inline'"],
        'font-src': ["'self'", 'data:'],
        'img-src': ["'self'", 'data:', 'blob:'],
        'connect-src': ["'self'", 'ws:', 'wss:'],
        'frame-ancestors': ["'none'"],
      },
      crossOriginEmbedderPolicy: false,
      xXSSProtection: '1; mode=block',
    },
    requestSizeLimiter: {
      maxRequestSizeInBytes: 5 * 1024 * 1024, // 5MB for file uploads
      maxUploadFileRequestInBytes: 10 * 1024 * 1024, // 10MB
    },
    rateLimiter: {
      tokensPerInterval: 50,
      interval: 60000, // 50 requests per minute
    },
    xssValidator: false, // handled by Vue's template escaping
  },

  routeRules: {
    '/api/**': {
      security: {
        rateLimiter: {
          tokensPerInterval: 30,
          interval: 60000, // 30 API requests per minute
        },
      },
    },
  },
})
