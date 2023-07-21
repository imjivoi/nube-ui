<template>
  <div :class="styles.base">
    <div :class="styles.wrapper({ shadow })">
      <div :class="styles.container({ border, variant })">
        <span v-if="prefix || $slots.prefix" :class="styles.prefix">
          <slot name="suffix">
            {{ prefix }}
          </slot>
        </span>
        <input
          v-bind="$attrs"
          :class="styles.content"
          :value="modelValue"
          @input="$emit('update:model-value', ($event.target as HTMLInputElement).value)"
          :type="currentType"
        />
        <label :class="styles.placeholder({ label: !!labelPlaceholder, hidden: !!modelValue })">
          {{ labelPlaceholder || placeholder }}
        </label>
        <label :class="styles.label" v-if="!!label && !labelPlaceholder">{{ label }}</label>
        <span v-if="suffix || $slots.suffix || type === 'password'" :class="styles.prefix">
          <button @click="toggleType" :class="styles.passwordButton" v-if="type === 'password'">
            <Icon icon="mdi:eye-outline" v-if="currentType === 'password'" />
            <Icon icon="mdi:eye-off-outline" v-else />
          </button>
          <slot name="suffix">
            {{ suffix }}
          </slot>
        </span>
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
  name: `NInput`,
  inheritAttrs: false,
}
</script>
<script lang="ts" setup>
import { Icon } from '@iconify/vue'

import type { ColorType } from '@/styles'

import * as styles from './index.css'
import { ref } from 'vue'

export interface InputProps {
  placeholder?: string
  labelPlaceholder?: string
  label?: string
  modelValue: string | number
  shadow?: boolean
  message?: string
  border?: boolean
  variant?: ColorType
  prefix?: string
  suffix?: string
  type?: 'text' | 'password' | 'number' | 'email' | 'tel' | 'date' | 'url' | 'datetime-local'
  disabled?: boolean
}

const props = withDefaults(defineProps<InputProps>(), {
  variant: 'primary',
  type: 'text',
})
defineEmits(['update:model-value'])

const currentType = ref(props.type)

const toggleType = () => {
  currentType.value = currentType.value === 'password' ? 'text' : 'password'
}
</script>
