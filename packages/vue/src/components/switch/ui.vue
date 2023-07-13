<template>
  <label :class="styles.main">
    <input type="checkbox" :class="styles.input" :value="modelValue" v-model="model" />
    <div :class="styles.background({ color: variant })"></div>
    <div :class="styles.slider">
      <i v-if="$slots.icon">
        <slot name="icon" />
      </i>
    </div>
  </label>
</template>
<script lang="ts">
export default {
  name: `NSwitch`,
}
</script>
<script lang="ts" setup>
import { computed } from 'vue'

import type { ColorType } from '@/styles'

import * as styles from './index.css'

export interface SwitchProps {
  modelValue: boolean
  variant?: ColorType
}

interface Emits {
  (e: 'update:modelValue', value: boolean): void
}

const props = defineProps<SwitchProps>()
const emits = defineEmits<Emits>()

const model = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value)
  },
})
</script>
