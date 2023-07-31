import { defineNuxtModule } from '@nuxt/kit'

import { resolveComponents } from './runtime/components'
import { resolveUtilities } from './runtime/utilities'
import { getMainStyles, getDefaultTheme } from './runtime/styles'

// Module options TypeScript interface definition
export interface ModuleOptions {
  prefix?: string
  utilities?: boolean
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
    utilities: true,
    defaultTheme: true,
  },
  setup(options, nuxt) {
    const { prefix, utilities, defaultTheme } = options

    resolveComponents({ prefix })

    if (utilities) {
      resolveUtilities()
    }

    const styles = getMainStyles()

    if (defaultTheme) {
      styles.push(...getDefaultTheme())
    }

    nuxt.options.css.push(...styles)
  },
})
