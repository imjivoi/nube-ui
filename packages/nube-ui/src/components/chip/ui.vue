<template>
  <div :class="classes.root()">
    <span :class="classes.content()">
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
import { computed } from 'vue'
import { ColorVariantType } from '../../styles'

import { chip } from './styles'

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

const classes = computed(() => chip(props))
</script>
