<template>
  <TabGroup :selectedIndex="selectedTabIndex" @change="changeTab">
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
    <TabPanels>
      <TabPanel v-for="(option, idx) in options" :key="idx">
        <slot name="content" :content="option.content" />
      </TabPanel>
    </TabPanels>
  </TabGroup>
</template>
<script lang="ts">
export default {
  name: 'NTabs',
}
</script>
<script setup lang="ts">
import { ref, onMounted, computed, nextTick, PropType } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { assignInlineVars } from '@vanilla-extract/dynamic'

import * as styles from './index.css'

import type { ColorVariantType } from '../../styles'

export interface Tab {
  label: string
  value: string
  content?: any
  disabled?: boolean
}

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
    validator(value) {
      if (!value) {
        throw new Error('modelValue is required')
      }
      return true
    },
  },
  options: {
    type: Array as PropType<Tab[]>,
    required: true,
  },
  variant: {
    type: String as PropType<ColorVariantType | 'default'>,
    default: 'default',
  },
  pill: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: true,
  },
  square: {
    type: Boolean,
    default: false,
  },
  noBackground: {
    type: Boolean,
    default: false,
  },
})

const selectedTabWidth = ref(0)
const selectedTabLeft = ref(0)
const tabRefs = ref<{ el: HTMLButtonElement }[]>([])

const selectedTab = computed({
  get() {
    return props.modelValue || props.options[0].value
  },
  set(idx: string | number) {
    const option = props.options[Number(idx)]
    emits('update:modelValue', option.value)
  },
})

const selectedTabIndex = computed(() => props.options?.findIndex((option) => option.value === props.modelValue))

function changeTab(idx: number) {
  selectedTab.value = idx
  nextTick(() => {
    getTabProperties()
  })
}

function getTabProperties() {
  const el = tabRefs.value[selectedTabIndex.value]!.el
  selectedTabWidth.value = el.offsetWidth
  selectedTabLeft.value = el.offsetLeft
}

onMounted(() => {
  getTabProperties()
})
</script>
