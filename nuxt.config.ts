export default defineNuxtConfig({
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      charset: 'utf-8',
      meta: [
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'description', content: 'Online AI Chatbot Platform' },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    },
    layoutTransition: {
      name: 'layout',
      mode: 'default',
    },
  },
  css: ['@/assets/styles/_colors.scss', '@/assets/styles/_variables.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/styles/functions/_color-opacity.scss";
            @import "@/assets/styles/mixins/_dynamic-sizes.scss";
            @import "@/assets/styles/mixins/_screens.scss";
            @import "@/assets/styles/mixins/_widths.scss";
            `,
        },
      },
    },
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [['defineStore', 'definePiniaStore']],
      },
    ],
  ],
  imports: {
    dirs: ['./stores'],
  },
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  telemetry: {
    enabled: false,
  },
})
