<template>
  <TabGroup as="div" :selectedIndex="selectedTabIndex" @change="changeTab">
    <TabList :class="styles.tablist({ pill, rounded, square, noBackground, variant })">
      <Tab :ref="`tabRefs`" :class="styles.tab" v-for="tab in tabs" :key="tab.value" :disabled="tab.disabled">
        {{ tab.label }}
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
    <TabPanels>
      <slot />
    </TabPanels>
  </TabGroup>
</template>
<script lang="ts">
export default {
  name: 'NTabs',
}
</script>
<script setup lang="ts">
import { ref, onMounted, computed, nextTick, PropType, provide } from 'vue'
import { TabGroup, TabList, Tab, TabPanels } from '@headlessui/vue'
import { assignInlineVars } from '@vanilla-extract/dynamic'

import * as styles from './index.css'

import type { ColorVariantType } from '../../styles'

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

interface TabsProps {
  modelValue: string
  variant: ColorVariantType | 'default'
  pill?: boolean
  rounded?: boolean
  square?: boolean
  noBackground?: boolean
}

const props = defineProps<TabsProps>()

const tabs = ref<Array<{ value: string; label: string; disabled: boolean }>>([])

provide('tabs', tabs)

const selectedTabIndex = ref(0)
const selectedTabWidth = ref(0)
const selectedTabLeft = ref(0)
const tabRefs = ref<{ el: HTMLButtonElement }[]>([])

const selectedTab = computed({
  get() {
    return props.modelValue
  },
  set(idx: string | number) {
    const tab = tabs.value[Number(idx)]
    emits('update:modelValue', tab.value)
  },
})

async function changeTab(idx: number) {
  selectedTabIndex.value = idx
  selectedTab.value = idx
  await nextTick()
  getTabProperties()
}

function getTabProperties() {
  if (!tabRefs.value) return
  const el = tabRefs.value[selectedTabIndex.value]?.el
  if (!el) return
  selectedTabWidth.value = el.offsetWidth
  selectedTabLeft.value = el.offsetLeft
}

onMounted(async () => {
  await nextTick()
  const defaultIndex = tabs.value.findIndex((tab) => tab.value === props.modelValue)
  changeTab(defaultIndex || selectedTabIndex.value)
})
</script>
