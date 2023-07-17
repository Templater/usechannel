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
  },
  css: ['@/assets/styles/_colors.scss', '@/assets/styles/_variables.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/styles/mixins/_dynamic-sizes.scss";
            @import "@/assets/styles/mixins/_screens.scss";
            @import "@/assets/styles/mixins/_widths.scss";
            `,
        },
      },
    },
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
