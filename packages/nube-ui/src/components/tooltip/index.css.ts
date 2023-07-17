import { createVar, globalStyle } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { createColorVariantVars, vars } from '../../styles'
import { toRgba } from '../../utils'

const tooltipColorVar = createVar()

export const content = recipe({
  base: {
    position: 'absolute',
    borderRadius: 10,
    zIndex: 100,
    padding: vars.spaces[4],
    background: toRgba(tooltipColorVar),
    color: toRgba(vars.colors.text),
  },
  variants: {
    position: {
      top: {},
      right: {},
      bottom: {},
      left: {},
    },
    variant: {
      default: {
        background: toRgba(vars.colors.background),
      },
      ...createColorVariantVars(tooltipColorVar),
    },
  },
  defaultVariants: {
    position: 'top',
    variant: 'default',
  },
})

export const tooltipTransitionClass = 'tooltip-transition'

globalStyle(`.${tooltipTransitionClass}-enter-active, .${tooltipTransitionClass}-leave-active`, {
  transition: 'opacity .3s ease',
})

globalStyle(`.${tooltipTransitionClass}-enter-from, .${tooltipTransitionClass}-leave-to`, {
  opacity: 0,
})
