import { type App } from 'vue'
import * as components from './components'
import './styles/global.css'
import './theme/default.css'

export * from './components'

export { vars, colorVarsLightDefault, colorVarsDarkDefault, twShadows } from './styles'
export { lightTheme, darkTheme } from './theme/example.css'
export * from './utilities'

function install(app: App) {

  Object.values(components).forEach((component) => {
    //@ts-ignore
    app.use(component)
  })
}

export default install
