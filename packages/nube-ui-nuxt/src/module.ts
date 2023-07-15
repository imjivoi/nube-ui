import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

import { resolveComponents } from './runtime/components'
import { getStyles } from './runtime/styles'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nube-ui-nuxt',
    configKey: 'nube',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(options, nuxt) {

    resolveComponents()

    const styles = getStyles()

    nuxt.options.css.push(...styles)
  },
})
