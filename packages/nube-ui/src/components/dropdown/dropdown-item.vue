<template>
  <MenuItem as="div" :class="styles.item({ variant, flat, plain, shadow, disabled })" :disabled="disabled">
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

import { ColorType } from '../../styles'

import * as styles from './index.css'

export interface DropdownItemProps {
  variant?: ColorType
  flat?: boolean
  plain?: boolean
  shadow?: boolean
  disabled?: boolean
}

withDefaults(defineProps<DropdownItemProps>(), {})
</script>
