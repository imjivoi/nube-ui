export { default as NTabs } from './tabs.vue'
export { default as NTab } from './tab.vue'

import NTabs from './tabs.vue'
import NTab from './tab.vue'

NTabs.install = (vue: any) => {
  vue.component(NTabs.name, NTabs)
}

NTab.install = (vue: any) => {
  vue.component(NTab.name, NTab)
}
