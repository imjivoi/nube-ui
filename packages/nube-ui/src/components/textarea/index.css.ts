import { createVar, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { fontSizes, vars } from '@/styles'
import { createColorVariantVars } from '../../styles/colors'
import { toRgba } from '../../utils'

const textareaLabelSizeVar = createVar()
const textareaBorderColorVar = createVar()
const textareaBorderRadiusVar = createVar()

export const base = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  vars: {
    [textareaBorderRadiusVar]: '12px',
  },
})

export const wrapper = recipe({
  base: {
    position: 'relative',
    borderRadius: textareaBorderRadiusVar,
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
    borderRadius: textareaBorderRadiusVar,
    position: 'relative',
    background: toRgba(vars.colors.gray),
    display: 'flex',
    alignItems: 'center',
    transition: 'all .35s',
    vars: {
      [textareaBorderColorVar]: vars.colors.text,
    },
  },
  variants: {
    border: {
      true: {
        ':focus-within': {
          boxShadow: `0 0 0 2px ${toRgba(textareaBorderColorVar)}`,
        },
      },
    },
    variant: createColorVariantVars(textareaBorderColorVar),
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export const content = style({
  border: 'none',
  outline: 'none',
  boxSizing: 'border-box',
  background: 'none',
  padding: '10px',
  borderRadius: textareaBorderRadiusVar,
  fontSize: fontSizes.sm,
  width: '100%',
  color: toRgba(vars.colors.text),
  resize: 'none',
})

const labelBase = style({
  position: 'absolute',
  left: 10,
  top: 10,
  color: toRgba(vars.colors.textLight),
  pointerEvents: 'none',
  fontSize: textareaLabelSizeVar,
  transition: 'all .35s',

  vars: {
    [textareaLabelSizeVar]: fontSizes.xs,
  },
})

export const placeholder = recipe({
  base: [
    labelBase,
    {
      selectors: {
        // [`${textareaContentCss}:focus + &`]: {
        //   opacity: 0,
        //   transform: 'translateY(-2px)',
        // },
      },
    },
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

const textareaMessageColorVar = createVar()
export const message = recipe({
  base: {
    fontSize: fontSizes.xs,
    color: toRgba(textareaMessageColorVar),
    textAlign: 'left',
    position: 'absolute',
    top: '100%',
    left: 0,
  },
  variants: {
    variant: createColorVariantVars(textareaMessageColorVar),
  },
})
