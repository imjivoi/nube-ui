<template>
  <div :class="styles.main({ color: variant, size })" :style="assignInlineVars(vars)"></div>
</template>
<script lang="ts">
export default {
  name: `NLoading`,
}
</script>
<script lang="ts" setup>
import { computed } from 'vue'
import { assignInlineVars } from '@vanilla-extract/dynamic'

import type { ColorType } from '@/styles'

import * as styles from './index.css'

export interface LoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: ColorType
  css?: Partial<Record<'color' | 'size' | 'border', string>>
}

const props = withDefaults(defineProps<LoadingProps>(), {})

const vars = computed(() => ({
  ...(props.css?.color && { [styles.loaderColorVar]: props.css.color }),
  ...(props.css?.size && { [styles.loaderSizeVar]: props.css.size }),
  ...(props.css?.border && { [styles.loaderBorderVar]: props.css.border }),
}))
</script>
