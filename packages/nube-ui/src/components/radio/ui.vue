<template>
  <label :class="styles.main">
    <div :class="styles.container">
      <input
        type="radio"
        :class="styles.input"
        :value="value"
        :checked="isChecked"
        @change="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
      <span :class="styles.background({ color: variant })"></span>
    </div>
    <div :class="styles.label" v-if="$slots.default">
      <slot></slot>
    </div>
  </label>
</template>
<script lang="ts">
export default {
  name: `NRadio`,
}
</script>
<script lang="ts" setup>
import { computed } from 'vue'

import * as styles from './index.css'
import type { ColorType } from '@/styles'

export interface RadioProps {
  modelValue?: string
  value: string
  variant?: ColorType
}

interface Emits {
  (e: 'update:modelValue', value: string): void
}

const props = defineProps<RadioProps>()
const emits = defineEmits<Emits>()

const isChecked = computed(() => props.modelValue === props.value)
</script>
