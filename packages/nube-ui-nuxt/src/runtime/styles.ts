import { createResolver } from '@nuxt/kit'
import config from './config'

export function getStyles() {
  const { resolve } = createResolver(import.meta.url)

  const mainStyle = resolve('../../node_modules', `${config.libName}/dist/css/index.css`)

  const defaultTheme = resolve('../../node_modules', `${config.libName}/dist/css/theme/default.css`)

  return [mainStyle, defaultTheme]
}
