import { createResolver } from '@nuxt/kit'
import config from './config'

const { resolve } = createResolver(import.meta.url)

export function getMainStyles() {
  const mainStyle = resolve('../../node_modules', `${config.libName}/dist/css/index.css`)

  return [mainStyle]
}

export function getDefaultTheme() {
  const defaultTheme = resolve('../../node_modules', `${config.libName}/dist/css/theme/default.css`)

  return [defaultTheme]
}
