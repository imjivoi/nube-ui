<template>
  <MenuItem as="div" :class="classes" :disabled="disabled">
    <slot></slot>
  </MenuItem>
</template>
<script lang="ts">
export default {
  name: `NDropdownItem`,
}
</script>
<script setup lang="ts">
import { MenuItem } from '@headlessui/vue'
import { computed } from 'vue'

import { ColorVariantType } from '../../styles'

import { dropdownItem } from './styles'

export interface DropdownItemProps {
  variant?: ColorVariantType
  flat?: boolean
  plain?: boolean
  shadow?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<DropdownItemProps>(), {})

const classes = computed(() => dropdownItem(props))
</script>
