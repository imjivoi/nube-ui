<template>
  <label :class="styles.base">
    <div :class="styles.container({ variant, checked: isChecked })">
      <div :class="styles.checkmark">
        <i :class="styles.checkmarkIcon">
          <span>
            <span :class="styles.checkmarkFirstLine({ checked: isChecked })"></span>
            <span :class="styles.checkmarkSecondLine({ checked: isChecked })"></span>
          </span>
        </i>
      </div>
      <input type="checkbox" :disabled="disabled" v-model="model" :value="value" :class="styles.input" />
    </div>
    <span v-if="$slots.default" :class="styles.label"><slot /></span>
  </label>
</template>
<script lang="ts">
export default {
  name: `NCheckbox`,
}
</script>
<script setup lang="ts">
import { computed } from 'vue'

import * as styles from './index.css'

import type { ColorVariantType } from '@/styles'

export interface CheckboxProps {
  modelValue: boolean | string[]
  value?: string
  variant?: ColorVariantType
  disabled?: boolean
  // size?: 'sm' | 'md' | 'lg'
}

interface Emits {
  (e: 'update:modelValue', value: boolean | string[]): void
}

const props = defineProps<CheckboxProps>()
const emits = defineEmits<Emits>()

const model = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value)
  },
})

const isChecked = computed(() => {
  if (!props.modelValue) return false

  if (Array.isArray(props.modelValue) && props.value && !props.modelValue.includes(props.value)) return false

  return true
})
</script>
