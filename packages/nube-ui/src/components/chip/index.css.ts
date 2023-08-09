import { createVar, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { createColorVariantVars, vars } from '../../styles'
import { toRgba } from '../../utils'

const chipColorVar = createVar()
const chipTextColorVar = createVar()
const chipPaddingVar = createVar()
const chipRadius = createVar()
const chipHeight = createVar()

export const base = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    background: toRgba(chipColorVar),
    width: 'fit-content',
    padding: `0 ${chipPaddingVar}`,
    borderRadius: chipRadius,
    color: chipTextColorVar,
    height: chipHeight,

    vars: {
      [chipTextColorVar]: 'inherit',
    },
  },
  variants: {
    variant: {
      default: {
        vars: {
          [chipColorVar]: vars.colors.gray,
        },
      },
      ...createColorVariantVars(chipColorVar),
    },
    size: {
      sm: {
        vars: {
          [chipPaddingVar]: vars.spaces[2],
          [chipHeight]: '1.2rem',
        },
      },
      md: {
        vars: {
          [chipPaddingVar]: vars.spaces[4],
          [chipHeight]: '1.5rem',
        },
      },
      lg: {
        vars: {
          [chipPaddingVar]: vars.spaces[8],
          [chipHeight]: '1.8rem',
        },
      },
    },
    rounded: {
      true: {
        vars: {
          [chipRadius]: '5px',
        },
      },
    },
    pill: {
      true: {
        vars: {
          [chipRadius]: '30px',
        },
      },
    },
    square: {
      true: {
        vars: {
          [chipRadius]: '0',
        },
      },
    },
    flat: {
      true: {
        background: toRgba(chipColorVar, 0.2),
        color: toRgba(chipColorVar),
      },
    },
    outline: {
      true: {
        color: toRgba(chipColorVar),
        border: `2px solid ${toRgba(chipColorVar)}`,
        background: 'transparent',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    rounded: true,
  },
})

export const content = style({
  padding: `0 ${vars.spaces[2]}`,
})
