import { createVar, globalStyle, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { createColorVariantVars, vars } from '../../styles'
import { toRgba } from '../../utils'

const dropdownItemColorVar = createVar()
const dropdownItemHoverColorVar = createVar()
const dropdownItemLightColorVar = createVar()
const dropdownItemShadowColorVar = createVar()

export const main = style({
  position: 'relative',
  display: 'inline-block',
})

export const menu = recipe({
  base: {
    position: 'absolute',
    left: 0,
    background: toRgba(vars.colors.gray),
    boxShadow: vars.shadows.sm,
    borderRadius: '15px',
    minWidth: '150px',
    zIndex: 1,
    listStyle: 'none',
    margin: 0,
  },
})

export const item = recipe({
  base: {
    cursor: 'pointer',
    padding: '8px 16px',
    borderRadius: '10px',
    transition: 'all .25s',
    color: toRgba(vars.colors.text),
    display: 'flex',
    alignItems: 'center',

    ':hover': {
      background: toRgba(dropdownItemColorVar),
      color: '#fff',
    },
  },
  variants: {
    variant: createColorVariantVars(dropdownItemColorVar),
    flat: {
      true: {
        ':hover': {
          background: toRgba(dropdownItemColorVar, 0.2),
          color: toRgba(dropdownItemColorVar),
        },
      },
    },
    plain: {
      true: {
        ':hover': {
          background: 'transparent',
          color: toRgba(dropdownItemColorVar),
        },
      },
    },
    shadow: {
      true: {
        ':hover': {
          boxShadow: `0 2px 10px -3px ${toRgba(dropdownItemColorVar, 0.5)}`,
        },
      },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        color: toRgba(vars.colors.textLight),
        opacity: 0.5,
        ':hover': {
          background: 'transparent',
          color: toRgba(vars.colors.textLight),
        },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export const animationClass = 'p-dropdown-animation'

globalStyle(`.${animationClass}-enter-active`, {
  transition: 'all .2s ease-out',
})

globalStyle(`.${animationClass}-leave-active`, {
  transition: 'all .2s ease-in',
})

globalStyle(`.${animationClass}-enter-from, .${animationClass}-leave-to`, {
  transform: 'scale(0.95)',
  opacity: 0,
})

globalStyle(`.${animationClass}-enter-to, .${animationClass}-leave-from`, {
  transform: 'scale(1)',
  opacity: 1,
})
