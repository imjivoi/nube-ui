import { createVar, globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../styles'
import { recipe } from '@vanilla-extract/recipes'
import { createColorVariantVars } from '../../styles/colors'
import { toRgba } from '../../utils'

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

const switchBackgroundVar = createVar()
const switchCheckedBackgroundVar = createVar()
const switchHoverColorVar = createVar()

const switchSliderBackgroundVar = createVar()
const switchSliderSizeVar = createVar()

export const main = style({
  boxSizing: 'border-box',
  width: '48px',
  height: '28px',
  border: 0,
  borderRadius: '20px',
  position: 'relative',
  padding: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  transition: 'all .35s',
  vars: {
    [switchBackgroundVar]: vars.colors.gray,
  },
})

export const background = recipe({
  base: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transition: 'all .35s ease',
    background: toRgba(switchBackgroundVar),

    selectors: {
      [`${input}:checked ~ &`]: {
        vars: {
          [switchBackgroundVar]: switchCheckedBackgroundVar,
        },
      },
    },
  },
  variants: {
    color: createColorVariantVars(switchCheckedBackgroundVar),
  },
  defaultVariants: {
    color: 'primary',
  },
})

export const slider = style({
  width: switchSliderSizeVar,
  height: switchSliderSizeVar,
  borderRadius: '20px',
  background: toRgba(switchSliderBackgroundVar),
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  left: '4px',
  transition: 'all .35s ease',
  vars: {
    [switchSliderBackgroundVar]: vars.colors.textLight,
    [switchSliderSizeVar]: '20px',
  },
})

globalStyle(`${input}:checked ~ ${slider}`, {
  left: 'calc(100% - 24px)',
  vars: {
    [switchSliderBackgroundVar]: vars.colors.background,
  },
})
globalStyle(`${input}:active ~ ${slider}`, {
  width: `25px`,
})

globalStyle(`${input}:active:checked ~ ${slider}`, {
  left: 'calc(100% - 30px)',
})

globalStyle(`${slider} i`, {
  height: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
