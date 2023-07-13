export { default as NSelect } from './select.vue'
export { default as NSelectItem } from './select-item.vue'

import Select from './select.vue'
import SelectItem from './select-item.vue'

Select.install = (vue: any) => {
  vue.component(Select.name, Select)
}
SelectItem.install = (vue: any) => {
  vue.component(SelectItem.name, SelectItem)
}
