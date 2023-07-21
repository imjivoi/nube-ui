import { createVar, globalStyle, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { createColorVariantVars, vars } from '../../styles'
import { toRgba } from '../../utils'

const tooltipColorVar = createVar()

export const base = style({
  width: 'fit-content',
})

export const content = recipe({
  base: {
    position: 'absolute',
    borderRadius: 10,
    zIndex: 100,
    padding: vars.spaces[4],
    background: toRgba(tooltipColorVar),
    color: toRgba(vars.colors.text),
    boxShadow: `0 4px 8px ${toRgba(tooltipColorVar, 0.2)}`,
    selectors: {
      '&:after': {
        content: '',
        position: 'absolute',
        width: 10,
        height: 10,
        background: 'inherit',
        zIndex: '-2',
      },
    },
  },
  variants: {
    position: {
      top: {
        selectors: {
          '&:after': {
            bottom: '-3px',
            left: '50%',
            transform: 'translate(-50%) rotate(45deg)',
            borderRadius: ' 0px 0px 2px 0px',
          },
        },
      },
      right: {
        selectors: {
          '&:after': {
            top: '50%',
            left: '-3px',
            transform: 'translate(0, -50%) rotate(45deg)',
            borderRadius: ' 0px 0px 0px 2px',
          },
        },
      },
      bottom: {
        selectors: {
          '&:after': {
            top: '-3px',
            left: '50%',
            transform: 'translate(-50%) rotate(45deg)',
            borderRadius: '2px 0px 0px 0px',
          },
        },
      },
      left: {
        selectors: {
          '&:after': {
            top: '50%',
            right: '-3px',
            transform: 'translate(0, -50%) rotate(45deg)',
            borderRadius: ' 0px 2px 0px 0px',
          },
        },
      },
    },
    variant: {
      default: {
        vars: {
          [tooltipColorVar]: vars.colors.gray,
        },
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
