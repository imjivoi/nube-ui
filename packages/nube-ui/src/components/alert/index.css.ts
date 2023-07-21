import { createVar, globalStyle } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { vars, fontSizes, fontWeights, createColorVariantVars } from '../../styles'
import { toRgba } from '../../utils'

const alertColorVar = createVar()

export const base = recipe({
  base: {
    background: toRgba(alertColorVar),
    color: '#fff',
    padding: `${vars.spaces[8]} ${vars.spaces[12]}`,
  },
  variants: {
    variant: createColorVariantVars(alertColorVar),
    flat: {
      true: {
        background: toRgba(alertColorVar, 0.2),
        color: toRgba(alertColorVar),
      },
    },
    shadow: {
      true: {
        boxShadow: `0 4px 8px ${toRgba(alertColorVar, 0.5)}`,
      },
    },
    rounded: {
      true: {
        borderRadius: 15
      }
    }
  },
  defaultVariants: {
    variant: 'primary',
  },
})

globalStyle(`${base()} h3`, {
  margin: `0 0 ${vars.spaces[5]}`,
})
