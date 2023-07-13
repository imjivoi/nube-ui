<template>
  
  <Popover>
    <PopoverButton ></PopoverButton>
  </Popover>
</template>
<script lang="ts">
export default {
  name: `LPopover`,
}
</script>
<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useElementHover } from '@vueuse/core'
import { Popover, PopoverButton, PopoverPanel} from '@headlessui/vue'

const trigger = ref<HTMLElement>()
const isOpen = ref(false)

const isHovered = useElementHover(trigger)

watch(isHovered, (val) => {
  isOpen.value = val
})
</script>
