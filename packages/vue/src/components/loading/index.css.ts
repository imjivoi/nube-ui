import { createVar, keyframes, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { createColorVariantVars } from '@/styles'
import { pxToRem, toRgba } from '../../utils'

const rotation = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
})

export const loaderSizeVar = createVar()
export const loaderColorVar = createVar()
export const loaderBorderVar = createVar()
export const main = recipe({
  base: {
    width: loaderSizeVar,
    height: loaderSizeVar,
    borderRadius: '50%',
    display: 'inline-block',
    borderTop: `${loaderBorderVar} solid ${toRgba(loaderColorVar)}`,
    borderRight: `${loaderBorderVar} solid transparent`,
    boxSizing: 'border-box',
    animation: `${rotation} 1s linear infinite`,
    vars: {
      [loaderBorderVar]: '3px',
    },
  },
  variants: {
    color: createColorVariantVars(loaderColorVar),
    size: {
      xs: {
        vars: {
          [loaderSizeVar]: pxToRem(25),
        },
      },
      sm: {
        vars: {
          [loaderSizeVar]: pxToRem(35),
        },
      },
      md: {
        vars: {
          [loaderSizeVar]: pxToRem(48),
        },
      },
      lg: {
        vars: {
          [loaderSizeVar]: pxToRem(60),
        },
      },
      xl: {
        vars: {
          [loaderSizeVar]: pxToRem(80),
        },
      },
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
})
