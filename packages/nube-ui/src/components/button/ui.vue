<template>
  <button
    v-bind="buttonAttrs"
    v-ripple="
      !noRipple
        ? {
            diameter: 100,
            background: props.flat || props.outline || props.plain ? toRgba(styles.buttonBackgroundColorVar, 0.1) : '',
          }
        : false
    "
  >
    <div v-if="loading" :class="styles.loading">
      <NLoading :css="{ size: '1em', border: '0.1em', color: '255,255,255' }" />
    </div>

    <div :class="styles.content({ loading })">
      <slot />
    </div>
  </button>
</template>
<script lang="ts">
export default {
  name: `NButton`,
  directives: {
    'v-ripple': vRipple,
  },
}
</script>
<script lang="ts" setup>
import { computed } from 'vue'

import { NLoading } from '../../components/loading'
import { vRipple } from '../../directives'

import * as styles from './index.css'

import type { ColorType } from '@/styles'
import { toRgba } from '../../utils'

export interface ButtonProps {
  variant?: ColorType | 'gradient'
  flat?: boolean
  shadow?: boolean
  pill?: boolean
  square?: boolean
  circle?: boolean
  outline?: boolean
  plain?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  wide?: boolean
  loading?: boolean
  disabled?: boolean
  noRipple?: boolean
  block?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  shadow: false,
  block: false,
})

const buttonAttrs = computed(() => ({
  disabled: props.disabled || props.loading,

  class: styles.main({
    variant: props.variant,
    flat: props.flat,
    shadow: props.shadow,
    pill: props.pill,
    square: props.square,
    circle: props.circle,
    outline: props.outline,
    plain: props.plain,
    size: props.size,
    wide: props.wide,
    disabled: props.disabled,
    loading: props.loading,
    block: props.block,
  }),
}))
</script>
