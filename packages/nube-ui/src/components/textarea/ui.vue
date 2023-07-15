<template>
  <div :class="styles.main">
    <div :class="styles.wrapper({ shadow })">
      <div :class="styles.container({ border, variant })">
        <textarea
          :disabled="disabled"
          v-bind="$attrs"
          :value="modelValue"
          @input="$emit('update:model-value', ($event.target as HTMLInputElement).value)"
          :class="styles.content"
        />
        <label :class="styles.placeholder({ label: !!labelPlaceholder, hidden: !!modelValue })">
          {{ labelPlaceholder || placeholder }}
        </label>
        <label :class="styles.label" v-if="!!label && !labelPlaceholder">{{ label }}</label>
      </div>
    </div>
    <div :class="styles.message({ variant })" v-if="message || $slots.message">
      <slot name="message">
        {{ message }}
      </slot>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'NTextarea',
}
</script>
<script setup lang="ts">
import { ColorType } from '../../styles'
import * as styles from './index.css'

export interface TextareaProps {
  placeholder?: string
  labelPlaceholder?: string
  label?: string
  modelValue: string | number
  shadow?: boolean
  message?: string
  border?: boolean
  variant?: ColorType
  disabled?: boolean
}

defineProps<TextareaProps>()
defineEmits(['update:model-value'])
</script>
