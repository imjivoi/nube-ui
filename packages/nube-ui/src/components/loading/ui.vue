<template>
  <div role="status" :class="loading({ size, variant })"></div>
</template>
<script lang="ts">
export default {
  name: `NLoading`,
}
</script>
<script lang="ts" setup>
import type { ColorVariantType } from '@/styles'

import { loading } from './styles'

export interface LoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: ColorVariantType
}

const props = withDefaults(defineProps<LoadingProps>(), {})
</script>
