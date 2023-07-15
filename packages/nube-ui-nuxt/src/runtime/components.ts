import { addComponent, addComponentsDir, createResolver } from '@nuxt/kit'
import * as components from 'nube-ui/dist/components'
import config from './config'

export function resolveComponents() {
  Object.entries(components).forEach(([name]) => {
    const dirName = name.slice(1).toLowerCase()
    const filePath = `${config.libName}/dist/components/${dirName}/index`

    addComponent({
      export: name,
      name,
      filePath,
    })
  })
}
