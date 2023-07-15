import { createVar, globalStyle, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { createColorVariantVars } from '../../styles/colors'
import { spaces, vars } from '../../styles'
import { toRgba } from '../../utils'

const radioSizeVar = createVar()
const radioBackgroundVar = createVar()

export const input = style({
  position: 'absolute',
  opacity: 0,
  height: '100%',
  width: '100%',
  left: 0,
  top: 0,
  margin: 0,
  zIndex: 10,
  cursor: 'pointer',
  ':disabled': {
    cursor: 'not-allowed',
  },
})

export const main = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: spaces[4],
  cursor: 'pointer',
})

export const container = style({
  position: 'relative',
  width: radioSizeVar,
  height: radioSizeVar,
  borderRadius: '50%',

  vars: {
    [radioSizeVar]: '20px',
  },
})

export const background = recipe({
  base: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 'inherit',

    '::after': {
      content: '',
      position: 'absolute',
      boxSizing: 'border-box',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: `2px solid ${toRgba(vars.colors.textLight)}`,
      borderRadius: 'inherit',
      transition: 'all .35s ease',
    },

    selectors: {
      [`${input}:checked ~ &::after`]: {
        border: `7px solid ${toRgba(radioBackgroundVar)}`,
      },
    },
  },
  variants: {
    color: createColorVariantVars(radioBackgroundVar),
  },
  defaultVariants: {
    color: 'primary',
  },
})

export const label = style({
  color: toRgba(vars.colors.text),
})
