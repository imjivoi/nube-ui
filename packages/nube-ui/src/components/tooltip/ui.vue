<template>
  <div ref="tooltipRef" :class="styles.main">
    <Teleport to="body">
      <transition :name="styles.tooltipTransitionClass">
        <div
          v-show="isHovered"
          :class="styles.content({ position, variant })"
          :style="{ top: tooltipContentPostition?.top + 'px', left: tooltipContentPostition?.left + 'px' }"
          ref="tooltipContentRef"
        >
          <slot></slot>
        </div>
      </transition>
    </Teleport>

    <slot name="trigger"></slot>
  </div>
</template>

<script setup lang="ts">
import { useElementBounding, useElementHover } from '@vueuse/core'
import { computed, ref, toRefs } from 'vue'
import { ColorType } from '../../styles'

import * as styles from './index.css'

defineOptions({
  name: 'Ntooltip',
})

interface TooltipProps {
  position?: 'top' | 'bottom' | 'left' | 'right'
  variant?: ColorType | 'default'
}

const props = withDefaults(defineProps<TooltipProps>(), {
  position: 'top',
  variant: 'default',
})

const tooltipRef = ref<HTMLElement>()
const tooltipContentRef = ref()
const { x: xTooltip, y: yTooltip, width: widthTooltip, height: heightTooltip } = useElementBounding(tooltipRef)
const {
  x: xTooltipContent,
  y: yTooltipContent,
  width: widthTooltipContent,
  height: heightTooltipContent,
} = useElementBounding(tooltipContentRef)
const isHovered = useElementHover(tooltipRef)

const margin = 8

const tooltipContentPostition = computed(() => {
  if (props.position === 'top') {
    return {
      top: yTooltip.value - heightTooltipContent.value - margin,
      left: xTooltip.value + (widthTooltip.value - widthTooltipContent.value) / 2,
    }
  }

  if (props.position === 'bottom') {
    return {
      top: yTooltip.value + heightTooltip.value + margin,
      left: xTooltip.value + (widthTooltip.value - widthTooltipContent.value) / 2,
    }
  }

  if (props.position === 'left') {
    return {
      top: yTooltip.value + (heightTooltip.value - heightTooltipContent.value) / 2,
      left: xTooltip.value - widthTooltipContent.value - margin,
    }
  }

  if (props.position === 'right') {
    return {
      top: yTooltip.value + (heightTooltip.value - heightTooltipContent.value) / 2,
      left: xTooltip.value + widthTooltip.value + margin,
    }
  }
})
</script>
