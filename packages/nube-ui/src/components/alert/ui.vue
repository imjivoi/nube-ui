<template>
  <div :class="styles.base({ variant, flat, shadow, rounded })">
    <div>
      <h3>
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
import { ColorType } from '../../styles'
import * as styles from './index.css'

export interface AlertProps {
  variant?: ColorType
  flat?: boolean
  shadow?: boolean
  rounded?: boolean
}

withDefaults(defineProps<AlertProps>(), {
  variant: 'primary',
})
</script>
