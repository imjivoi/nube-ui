import { createVar, globalStyle, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { createColorVariantVars, fontSizes, vars } from '../../styles'
import { toRgba } from '../../utils'

export const selectItemColorVar = createVar()
export const selectItemColorLightVar = createVar()
const selectLabelSizeVar = createVar()

export const main = style({
  maxWidth: '200px',
  width: '100%',
  position: 'relative',
  display: 'inline-block',
})

export const button = style({
  position: 'relative',
  background: toRgba(vars.colors.gray),
  padding: '10px',
  border: 'none',
  borderRadius: '12px',
  minHeight: '35px',
  width: '100%',
  cursor: 'pointer',
  textAlign: 'left',
  color: toRgba(vars.colors.text),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  transition: 'all 0.2s',
  selectors: {
    '&[aria-expanded="true"], &:hover': {
      transform: 'translateY(-2px)',
    },
  },
})

export const chip = style({
  padding: 2,
  border: `1px solid ${toRgba(selectItemColorVar)}`,
  color: toRgba(selectItemColorVar),
})

const labelBase = style({
  position: 'absolute',
  left: 10,
  top: 13,
  pointerEvents: 'none',
  fontSize: selectLabelSizeVar,
  transition: 'all .35s',
  color: toRgba(vars.colors.text),
  // opacity: 0.6,

  vars: {
    [selectLabelSizeVar]: '12px',
  },
})

export const palceholder = recipe({
  base: [
    labelBase,

    {
      opacity: 0.6,
      // selectors: {
      //   [`${selectContentCss}:focus + &`]: {
      //     opacity: 0,
      //     transform: 'translateY(-2px)',
      //   },
      // },
    },
  ],
  variants: {
    label: {
      true: {
        transform: 'translateY(-28px) translateX(-10px) !important',
        opacity: 1,
        color: `${toRgba(vars.colors.text)} !important`,
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
        opacity: 1,
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

export const items = style({
  position: 'absolute',
  left: 0,
  background: toRgba(vars.colors.gray),
  boxShadow: vars.shadows.sm,
  borderRadius: '12px',
  minWidth: '150px',
  width: '100%',
  zIndex: 1,
  padding: 5,
  boxSizing: 'border-box',
  overflowX: 'hidden',
	overflowY: 'auto',
})

export const itemsContent = style({
  maxHeight: 200,
  margin: '2px 0 0',
  overflowY: 'auto',
  overflowX: 'hidden',
  listStyle: 'none',
  boxSizing: 'border-box',
  padding: '0 3px 0 0',
  '::-webkit-scrollbar': {
    width: '5px',
    height: '5px',
    display: 'block',
    background: toRgba(vars.colors.gray),
  },
  '::-webkit-scrollbar-thumb': {
    background: toRgba(vars.colors.background),
    borderRadius: '5px',
  },
  '::-webkit-scrollbar-track': {
    margin: '5px 0',
  },
})

export const item = recipe({
  base: {
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '10px',
    transition: 'all .25s',
    color: toRgba(vars.colors.text),
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
    selectors: {
      '&:hover:not([aria-selected="true"])': {
        color: toRgba(selectItemColorVar),
        transform: 'translateX(4px)',
      },
      '&:not(:last-child)': {
        marginBottom: '2px',
      },
    },
  },
  variants: {
    variant: {
      ...createColorVariantVars(selectItemColorVar),
    },
    selected: {
      true: {
        color: toRgba(selectItemColorVar),
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export const animationClass = 'p-select-transition'

globalStyle(`.${animationClass}-enter-active`, {
  transition: 'all .2s ease-out',
})

globalStyle(`.${animationClass}-leave-active`, {
  transition: 'all .2s ease-in',
})

globalStyle(`.${animationClass}-enter-from, .${animationClass}-leave-to`, {
  transform: 'translateY(-20px)',
  opacity: 0,
})

globalStyle(`.${animationClass}-enter-to, .${animationClass}-leave-from`, {
  transform: 'translateY(0)',
  opacity: 1,
})
