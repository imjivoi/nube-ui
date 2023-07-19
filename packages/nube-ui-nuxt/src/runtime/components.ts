import { addComponent } from '@nuxt/kit'
import * as components from 'nube-ui/dist/components'
import config from './config'

interface Options {
  prefix?: string
}
export function resolveComponents(options: Options) {
  const { prefix } = options

  Object.entries(components).forEach(([name]) => {
    const dirName = name.slice(1).toLowerCase()
    const filePath = `${config.libName}/dist/components/${dirName}/index`

    const componentName = prefix ? `${prefix}-${dirName}` : name

    addComponent({
      export: name,
      name: componentName,
      filePath,
    })
  })
}
