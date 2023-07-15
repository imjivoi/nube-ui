import { type App } from 'vue'
import * as components from './components'
import './styles/global.css'

export * from './components'

export { vars, colorVarsLightDefault, colorVarsDarkDefault, css, twShadows } from './styles'
export { lightTheme, darkTheme } from './theme/example.css'
import './theme/default.css'

function install(app: App) {
  if(window) {

  }
  Object.values(components).forEach((component) => {
    //@ts-ignore
    app.use(component)
  })
}

export default install
