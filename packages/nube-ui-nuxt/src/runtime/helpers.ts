import { addImports } from '@nuxt/kit'
import config from './config'

export function resolveHelpers() {
  const cssHelpersPath = `${config.libName}`

  addImports({
    name: 'css',
    as: 'css',
    from: cssHelpersPath,
  })
}
