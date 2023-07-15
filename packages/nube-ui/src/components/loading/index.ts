export { default as NLoading } from './ui.vue'
import component from './ui.vue'

component.install = (vue: any) => {
  vue.component(component.name, component)
}
