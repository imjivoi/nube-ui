// https://nuxt.com/docs/api/configuration/nuxt-config
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export default defineNuxtConfig({
  vite: {
    // plugins: [vanillaExtractPlugin({  })],
    ssr: {
      noExternal: ['@vanilla-extract', '@nube-ui/vue'],
    },
  },
  build: {
    transpile: [
      '@vanilla-extract',
      '@nube-ui/vue',
      // /\@nube-ui\/vue$/
    ],
  },
  css: [],
  modules: ['nuxt-icon'],
})
