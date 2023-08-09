<template>
  <div :class="styles.base({ variant, size, rounded, pill, square, flat, outline })">
    <span :class="styles.content">
      <slot />
    </span>
  </div>
</template>
<script lang="ts">
export default {
  name: 'NChip',
}
</script>
<script setup lang="ts">
import * as styles from './index.css'

interface ChipProps {
  variant?: ColorVariantType | 'default'
  size?: 'sm' | 'md' | 'lg'
  rounded?: boolean
  pill?: boolean
  square?: boolean
  flat?: boolean
  outline?: boolean
}

const props = withDefaults(defineProps<ChipProps>(), {
  variant: 'default',
  size: 'md',
  rounded: true,
})
</script>
