import { createVar, globalStyle, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars, createColorVariantVars } from '@/styles'
import { pxToRem, toRgba } from '../../utils'

const checkboxSizeVar = createVar()
const checkboxBackgroundVar = createVar()
const checkboxCheckedBackgroundVar = createVar()

export const base = style({
  display: 'flex',
  alignItems: 'center',
  gap: pxToRem(10),
  selectors: {
    '&:not(:disabled)': {
      cursor: 'pointer',
    },
  },
})
export const container = recipe({
  base: {
    width: checkboxSizeVar,
    height: checkboxSizeVar,
    borderRadius: '9px',
    position: 'relative',
    zIndex: 1,
    background: toRgba(checkboxBackgroundVar),
    overflow: 'hidden',
    transition: 'all .35s',
    vars: {
      [checkboxBackgroundVar]: vars.colors.gray,
      [checkboxSizeVar]: '23px',
    },
    selectors: {
      [`${base}:hover &`]: {
        boxShadow: vars.shadows.sm,
      },
    },
  },
  variants: {
    variant: createColorVariantVars(checkboxCheckedBackgroundVar),
    checked: {
      true: {
        background: toRgba(checkboxCheckedBackgroundVar),
        selectors: {
          [`${base}:hover &`]: {
            boxShadow: `0 0 0 2px ${toRgba(checkboxCheckedBackgroundVar, 0.5)}`,
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export const input = style({
  position: 'absolute',
  opacity: 0,
  cursor: 'pointer',
  height: 0,
  width: 0,
})

export const label = style({
  color: toRgba(vars.colors.text),
})

export const checkmark = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
})

export const checkmarkIcon = style({
  height: checkboxSizeVar,
  width: checkboxSizeVar,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all .35s',
})

globalStyle(`${checkmarkIcon} > span`, {
  transform: 'rotate(45deg)',
  display: 'block',
  position: 'relative',
  width: '8px',
  height: '13px',
  marginTop: '-4px',
})

export const checkmarkFirstLine = recipe({
  base: {
    content: '',
    background: 'transparent',
    position: 'absolute',
    width: '8px',
    height: '1px',
    borderRadius: '5px',
    zIndex: '1',
    bottom: '0px',
    ':after': {
      content: '',
      position: 'absolute',
      left: '0px',
      width: '0%',
      height: '2px',
      background: 'white',
      borderRadius: '5px 0px 0px 5px',
    },
  },

  variants: {
    checked: {
      true: {
        ':after': {
          width: '100%',
          transition: 'width 0.25s ease 0.1s',
        },
      },
    },
  },
})

export const checkmarkSecondLine = recipe({
  base: {
    content: '',
    position: 'absolute',
    height: '13px',
    borderRadius: '5px',
    bottom: '0',
    right: '0',
    background: 'transparent',
    width: '2px',
    ':after': {
      content: '',
      position: 'absolute',
      width: '2px',
      height: '0%',
      background: 'white',
      left: '0px',
      bottom: '0px',
      borderRadius: '5px 5px 0px 0px',
    },
  },

  variants: {
    checked: {
      true: {
        ':after': {
          height: '100%',
          transition: 'height 0.2s ease 0.3s',
        },
      },
    },
  },
})
