<template>
  <TabPanel>
    <slot />
  </TabPanel>
</template>
<script setup lang="ts">
import { TabPanel } from '@headlessui/vue'
import { inject, Ref, toRefs } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const tabs = inject<Ref<[]>>('tabs')
//@ts-ignore
tabs!.value.push({ ...props })
</script>
