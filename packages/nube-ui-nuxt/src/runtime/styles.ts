import { createResolver } from '@nuxt/kit'
import config from './config'

const { resolve } = createResolver(import.meta.url)

export function getMainStyles() {
  const mainStyle = resolve('../../node_modules', `${config.libName}/dist/index.css`)

  return [mainStyle]
}

export function getDefaultTheme() {
  const defaultTheme = resolve('../../node_modules', `${config.libName}/dist/theme/default.css`)

  return [defaultTheme]
}
