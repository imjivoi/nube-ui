import { createVar, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { createColorVariantVars, vars } from '../../styles'
import { toRgba } from '../../utils'

export const tabSliderWidthVar = createVar()
export const tabSliderLeftVar = createVar()

const tabListBorderRadiusVar = createVar()
const tabListBackgroundColorVar = createVar()

const tabSliderColorVar = createVar()
const tabSliderBorderRadiusVar = createVar()

const tabActiveTextColorVar = createVar()

export const tablist = recipe({
  base: {
    display: 'flex',
    gap: vars.spaces[2],
    padding: vars.spaces[4],
    borderRadius: tabListBorderRadiusVar,
    background: toRgba(tabListBackgroundColorVar),
    width: 'fit-content',
    position: 'relative',
    vars: {
      [tabListBackgroundColorVar]: vars.colors.gray,
      [tabActiveTextColorVar]: '#fff'
    },
  },
  variants: {
    noBackground: {
      true: {
        background: 'transparent !important',
      },
    },
    pill: {
      true: {
        vars: {
          [tabListBorderRadiusVar]: '20px',
          [tabSliderBorderRadiusVar]: '15px',
        },
      },
    },
    rounded: {
      true: {
        vars: {
          [tabListBorderRadiusVar]: '15px',
          [tabSliderBorderRadiusVar]: '10px',
        },
      },
    },
    square: {
      true: {
        vars: {
          [tabListBorderRadiusVar]: '0',
          [tabSliderBorderRadiusVar]: '0',
        },
      },
    },
    variant: {
      default: {
        vars: {
          [tabSliderColorVar]: vars.colors.background,
          [tabActiveTextColorVar] : toRgba(vars.colors.text)
        },
      },
      ...createColorVariantVars(tabSliderColorVar),
    },
  },
  compoundVariants: [
    {
      variants: {
        noBackground: true,
        variant: 'default',
      },
      style: {
        vars: {
          [tabSliderColorVar]: vars.colors.gray,
        },
      },
    },
  ],
  defaultVariants: {
    pill: true,
    variant: 'default',
  },
})

export const tab = style({
  background: 'transparent',
  outline: 'none',
  border: 'none',
  padding: `${vars.spaces[2]} ${vars.spaces[6]}`,
  cursor: 'pointer',
  color: toRgba(vars.colors.text),
  fontWeight: 500,
  width: 'fit-content',
  zIndex: 1,
  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',

  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
    },
    '&[aria-selected="true"]': {
      color: tabActiveTextColorVar,
    },
  },
})

export const tabSlider = style({
  width: tabSliderWidthVar,
  background: toRgba(tabSliderColorVar),
  position: 'absolute',
  height: '1.7em',
  borderRadius: tabSliderBorderRadiusVar,
  top: '50%',
  left: tabSliderLeftVar,
  transform: 'translateY(-50%)',
  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  zIndex: 0,
})
