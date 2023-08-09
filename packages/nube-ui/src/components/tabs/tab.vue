<template>
  <TabPanel>
    <slot />
  </TabPanel>
</template>
<script lang="ts">
export default {
  name: 'NTab',
}
</script>
<script setup lang="ts">
import { TabPanel } from '@headlessui/vue'
import { inject, Ref, toRefs } from 'vue'

interface TabProps {
  label: string
  value: string
  disabled?: boolean
}

const props = defineProps<TabProps>()

const tabs = inject<Ref<[]>>('tabs')
//@ts-ignore
tabs!.value.push({ ...props })
</script>
