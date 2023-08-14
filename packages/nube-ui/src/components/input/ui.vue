<template>
  <div :class="classes.root()">
    <div :class="classes.wrapper()">
      <div :class="classes.container()">
        <span v-if="prefix || $slots.prefix" :class="[classes.prefix(), 'pl-2']">
          <slot name="suffix">
            {{ prefix }}
          </slot>
        </span>
        <input
          v-bind="$attrs"
          :class="classes.content()"
          :value="modelValue"
          @input="$emit('update:model-value', ($event.target as HTMLInputElement).value)"
          :type="currentType"
          :disabled="disabled"
        />
        <label :class="placeholderStyle({ label: !!labelPlaceholder, hidden: !!modelValue })">
          {{ labelPlaceholder || placeholder }}
        </label>
        <label :class="labelStyle" v-if="!!label && !labelPlaceholder">{{ label }}</label>
        <span v-if="suffix || $slots.suffix || type === 'password'" :class="[classes.prefix(), 'pr-2']">
          <button @click="toggleType" :class="classes.passwordButton()" v-if="type === 'password'">
            <Icon icon="mdi:eye-outline" v-if="currentType === 'password'" />
            <Icon icon="mdi:eye-off-outline" v-else />
          </button>
          <slot name="suffix">
            {{ suffix }}
          </slot>
        </span>
      </div>
    </div>
    <div :class="classes.message()" v-if="message || $slots.message">
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
import { computed, ref } from 'vue'

import type { ColorVariantType } from '@/styles'

import * as styles from './index.css'
import {input, label as labelStyle, placeholder as placeholderStyle} from './styles'

export interface InputProps {
  placeholder?: string
  labelPlaceholder?: string
  label?: string
  modelValue: string | number
  shadow?: boolean
  message?: string
  border?: boolean
  variant?: ColorVariantType
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

const classes = computed(()=>input(props))
</script>
