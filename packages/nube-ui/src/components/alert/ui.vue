<template>
  <div :class="styles.main({ variant, flat, shadow, rounded })">
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
<script setup lang="ts">
import { ColorType } from '../../styles'
import * as styles from './index.css'

interface AlertProps {
  variant?: ColorType
  flat?: boolean
  shadow?: boolean
  rounded?: boolean
}

withDefaults(defineProps<AlertProps>(), {
  variant: 'primary',
})
</script>
