<template>
  <div :class="classes.root()">
    <div>
      <h3 :class="classes.title()">
        <slot name="title" />
      </h3>

      <div>
        <slot />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'NAlert',
}
</script>
<script setup lang="ts">
import { computed } from 'vue'
import { ColorVariantType } from '../../styles'

import { alert } from './styles'

export interface AlertProps {
  variant?: ColorVariantType
  flat?: boolean
  shadow?: boolean
  rounded?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<AlertProps>(), {
  variant: 'primary',
})

const classes = computed(() => alert(props))
</script>
