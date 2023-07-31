<template>
  <TabGroup :defaultIndex="defaultSelectedIndex" :selectedIndex="selectedTabIndex" @change="changeTab">
    <TabList :class="styles.tablist({ pill, rounded, square, noBackground, variant })">
      <Tab
        v-for="(option, idx) in options"
        :ref="`tabRefs`"
        :key="idx"
        :disabled="option.disabled"
        :class="styles.tab"
        v-slot="{ selected }"
      >
        {{ option.label }}
      </Tab>
      <div
        :class="styles.tabSlider"
        :style="
          assignInlineVars({
            [styles.tabSliderWidthVar]: `${selectedTabWidth}px`,
            [styles.tabSliderLeftVar]: `${selectedTabLeft}px`,
          })
        "
      ></div>
    </TabList>
  </TabGroup>
</template>
<script lang="ts">
export default {
  name: 'NTabs',
}
</script>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { assignInlineVars } from '@vanilla-extract/dynamic'

import * as styles from './index.css.ts'

import type { ColorVariantType } from '../../styles'

export interface TabsProps {
  options: Array<{ label: string; value: string; disabled?: boolean }>
  defaultSelected?: string
  variant?: ColorVariantType | 'default'
  pill?: boolean
  rounded?: boolean
  square?: boolean
  noBackground?: boolean
}

const props = withDefaults(defineProps<TabsProps>(), {
  pill: true,
  rounded: false,
  square: false,
  noBackground: false,
})

const defaultSelectedIndex = props.options?.findIndex((option) => option.value === props.defaultSelected)

const selectedTabIndex = ref(0)
const selectedTabWidth = ref(0)
const selectedTabLeft = ref(0)
const tabRefs = ref<HTMLElement[]>([])

function changeTab(index) {
  selectedTabIndex.value = index
  getTabProperties()
}

function getTabProperties() {
  const el = tabRefs.value[selectedTabIndex.value].el
  selectedTabWidth.value = el.offsetWidth
  selectedTabLeft.value = el.offsetLeft
}

onMounted(() => {
  getTabProperties()
})
</script>
