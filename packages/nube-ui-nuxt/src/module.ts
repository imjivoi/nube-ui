import { defineNuxtModule, addImports } from '@nuxt/kit'

import { resolveComponents } from './runtime/components'
import { resolveHelpers } from './runtime/helpers'
import { getStyles } from './runtime/styles'

// Module options TypeScript interface definition
export interface ModuleOptions {
  prefix?: string
  helpers?: boolean
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
  },
  setup(options, nuxt) {
    const { prefix, helpers } = options

    resolveComponents({ prefix })

    if (helpers) {
      resolveHelpers()
    }

    const styles = getStyles()

    nuxt.options.css.push(...styles)
  },
})
