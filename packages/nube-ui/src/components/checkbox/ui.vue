<template>
  <label :class="classes.root()">
    <div :class="classes.container()">
      <div :class="classes.checkmark()">
        <i :class="classes.checkmarkIcon()">
          <span>
            <span :class="classes.checkmarkFirstLine()"></span>
            <span :class="classes.checkmarkSecondLine()"></span>
          </span>
        </i>
      </div>
      <input type="checkbox" :disabled="disabled" v-model="model" :value="value" :class="classes.input()" />
    </div>
    <span v-if="$slots.default" :class="classes.label()"><slot /></span>
  </label>
</template>
<script lang="ts">
export default {
  name: `NCheckbox`,
}
</script>
<script setup lang="ts">
import { computed } from 'vue'

import { checkbox } from './styles'

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

const classes = computed(() => checkbox({ variant: props.variant, checked: isChecked.value }))
</script>
