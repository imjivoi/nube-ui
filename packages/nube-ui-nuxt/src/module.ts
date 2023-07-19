import { defineNuxtModule } from '@nuxt/kit'

import { resolveComponents } from './runtime/components'
import { resolveHelpers } from './runtime/helpers'
import { getMainStyles, getDefaultTheme } from './runtime/styles'

// Module options TypeScript interface definition
export interface ModuleOptions {
  prefix?: string
  helpers?: boolean
  defaultTheme?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nube-ui-nuxt',
    configKey: 'nube',
  },
  // Default configuration options of the Nuxt module
  defaults: {
    prefix: '',
    helpers: true,
    defaultTheme: true,
  },
  setup(options, nuxt) {
    const { prefix, helpers, defaultTheme } = options

    resolveComponents({ prefix })

    if (helpers) {
      resolveHelpers()
    }

    const styles = getMainStyles()

    if (defaultTheme) {
      styles.push(...getDefaultTheme())
    }

    nuxt.options.css.push(...styles)
  },
})
