<template>
  <ListboxOption v-slot="{ selected }" :value="value" as="template">
    <li :class="styles.item({ variant, selected })">
      <span>
        <slot />
      </span>
      <span v-if="selected">
        <Icon icon="ic:baseline-check" />
      </span>
    </li>
  </ListboxOption>
</template>
<script lang="ts">
export default {
  name: 'NSelectItem'
}
</script>
<script setup lang="ts">
import { ListboxOption } from '@headlessui/vue'
import { Icon } from '@iconify/vue'

import * as styles from './index.css'
import { ColorVariantType } from '../../styles'

export interface SelectItemProps {
  variant?: ColorVariantType
  value: any
}

defineProps<SelectItemProps>()
</script>
