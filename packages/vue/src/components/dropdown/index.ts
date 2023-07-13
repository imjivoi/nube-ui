export { default as NDropdown } from './dropdown.vue'
export { default as NDropdownItem } from './dropdown-item.vue'

import Dropdown from './dropdown.vue'
import DropdownItem from './dropdown-item.vue'

Dropdown.install = (vue: any) => {
  vue.component(Dropdown.name, Dropdown)
}
DropdownItem.install = (vue: any) => {
  vue.component(DropdownItem.name, DropdownItem)
}
