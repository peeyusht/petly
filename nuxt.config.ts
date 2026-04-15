// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: process.env.NODE_ENV !== 'production' },

  modules: ['nuxt-security', 'nuxt-auth-utils'],

  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI || '',
    session: {
      password: process.env.NUXT_SESSION_PASSWORD || '',
    },
  },

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
      maxRequestSizeInBytes: 5 * 1024 * 1024,
      maxUploadFileRequestInBytes: 10 * 1024 * 1024,
    },
    rateLimiter: {
      tokensPerInterval: 50,
      interval: 60000,
    },
    xssValidator: false,
  },

  routeRules: {
    '/api/**': {
      security: {
        rateLimiter: {
          tokensPerInterval: 30,
          interval: 60000,
        },
      },
    },
  },

  nitro: {
    plugins: ['~/server/plugins/mongodb.ts'],
  },
})
