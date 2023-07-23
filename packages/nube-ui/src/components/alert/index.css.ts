import { createVar, globalStyle, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { vars, fontSizes, fontWeights, createColorVariantVars } from '../../styles'
import { toRgba } from '../../utils'

const alertRgbVar = createVar()
const alertColorOpacityVar = createVar()
const alertTextColorVar = createVar()

export const base = recipe({
  base: {
    background: toRgba(alertRgbVar, alertColorOpacityVar),
    color: toRgba(alertTextColorVar),
    padding: `${vars.spaces[8]} ${vars.spaces[12]}`,
    vars: {
      [alertTextColorVar]: '255, 255, 255',
      [alertColorOpacityVar]: '1',
    },
  },
  variants: {
    variant: createColorVariantVars(alertRgbVar),
    flat: {
      true: {
        vars: {
          [alertTextColorVar]: alertRgbVar,
          [alertColorOpacityVar]: '0.2',
        },
      },
    },
    shadow: {
      true: {
        boxShadow: `0 4px 8px ${toRgba(alertRgbVar, 0.5)}`,
      },
    },
    rounded: {
      true: {
        borderRadius: 15,
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export const title = style({
  margin: `0 0 ${vars.spaces[5]}`,
})
