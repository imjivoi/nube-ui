import { createVar, style } from '@vanilla-extract/css'

import { fontSizes, vars } from '@/styles'
import { recipe } from '@vanilla-extract/recipes'
import { createColorVariantVars } from '../../styles/colors'
import { toRgba } from '../../utils'

const inputLabelSizeVar = createVar()
const inputBorderColorVar = createVar()
const inputBorderRadiusVar = createVar()

export const main = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  vars: {
    [inputBorderRadiusVar]: '12px',
  },
})

export const wrapper = recipe({
  base: {
    position: 'relative',
    borderRadius: inputBorderRadiusVar,
    transition: 'all .2s',
    ':focus-within': {
      transform: 'translateY(-2px)',
    },
  },
  variants: {
    shadow: {
      true: {
        boxShadow: vars.shadows.sm,
        ':focus-within': {
          boxShadow: vars.shadows.default,
        },
      },
    },
  },
})

export const container = recipe({
  base: {
    borderRadius: inputBorderRadiusVar,
    position: 'relative',
    background: toRgba(vars.colors.gray),
    display: 'flex',
    alignItems: 'center',
    transition: 'all .35s',
    vars: {
      [inputBorderColorVar]: vars.colors.text,
    },
  },
  variants: {
    border: {
      true: {
        ':focus-within': {
          boxShadow: `0 0 0 2px ${toRgba(inputBorderColorVar)}`,
        },
      },
    },
    variant: createColorVariantVars(inputBorderColorVar),
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export const prefix = style({
  color: toRgba(vars.colors.textLight),
  fontSize: fontSizes.sm,
  // padding: '0 13px',
  selectors: {
    [`&:first-child`]: {
      paddingLeft: '10px',
    },
    [`&:last-child`]: {
      paddingRight: '10px',
    },
  },
})

export const content = style({
  border: 'none',
  outline: 'none',
  boxSizing: 'border-box',
  background: 'none',
  padding: '10px',
  borderRadius: inputBorderRadiusVar,
  fontSize: fontSizes.sm,
  width: '100%',
  color: toRgba(vars.colors.text),
})

const labelBase = style({
  position: 'absolute',
  left: 10,
  color: toRgba(vars.colors.textLight),
  pointerEvents: 'none',
  fontSize: inputLabelSizeVar,
  transition: 'all .35s',

  vars: {
    [inputLabelSizeVar]: fontSizes.xs,
  },
})

export const placeholder = recipe({
  base: [
    labelBase,
  ],
  variants: {
    label: {
      true: {
        selectors: {
          [`${content}:focus + &`]: {
            opacity: '1',
            transform: 'translateY(-28px) translateX(-10px)',
            color: toRgba(vars.colors.text),
          },
        },
      },
    },
    hidden: {
      true: {
        opacity: 0,
        transform: 'translateY(-2px)',
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        label: true,
        hidden: true,
      },
      style: {
        transform: 'translateY(-28px) translateX(-10px) !important',
        opacity: '1 !important',
        color: `${toRgba(vars.colors.text)} !important`,
      },
    },
  ],
})

export const label = style([
  labelBase,
  {
    color: toRgba(vars.colors.text),
    transform: 'translateY(-28px) translateX(-10px)',
  },
])

const inputMessageColorVar = createVar()
export const message = recipe({
  base: {
    fontSize: fontSizes.xs,
    color: toRgba(inputMessageColorVar),
    textAlign: 'left',
    position: 'absolute',
    top: '100%',
    left: 0,
  },
  variants: {
    variant: createColorVariantVars(inputMessageColorVar),
  },
})

export const passwordButton = style({
  border: 'none',
  outline: 'none',
  background: 'none',
  cursor: 'pointer',
  color: toRgba(vars.colors.text),
  display: 'flex',
})
