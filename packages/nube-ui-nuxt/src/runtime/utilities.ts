import { addImports } from '@nuxt/kit'
import config from './config'

export function resolveUtilities() {
  const cssUtilitiesPath = `${config.libName}/dist/utilities`

  addImports({
    name: 'sprinkles',
    as: 'sprinkles',
    from: cssUtilitiesPath,
  })
}
