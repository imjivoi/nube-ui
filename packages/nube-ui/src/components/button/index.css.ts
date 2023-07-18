import { createVar, globalStyle, keyframes, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars, fontSizes, fontWeights, createColorVariantVars } from '@/styles'
import { pxToRem, toRgba } from '../../utils'

export const buttonBackgroundColorVar = createVar()
export const buttonTextColorVar = createVar()

export const buttonHeightVar = createVar()
export const buttonPaddingVar = createVar()
export const content = recipe({
  base: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `0 ${buttonPaddingVar}`,
    transition: 'all .25s ease',
    zIndex: 1,
  },
  variants: {
    loading: {
      true: {
        paddingLeft: `calc(1.5em + ${buttonPaddingVar})`,
      },
    },
  },
})

export const main = recipe({
  base: {
    border: 'none',
    margin: '5px',
    borderRadius: '12px',
    transition: 'all .25s ease',
    position: 'relative',
    userSelect: 'none',
    zIndex: 1,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    outline: 'none',
    boxSizing: 'border-box',
    background: toRgba(buttonBackgroundColorVar),
    cursor: 'pointer',
    height: buttonHeightVar,
    fontWeight: fontWeights[500],
    fontFamily: 'inherit',
    color: '#fff',
    // ':hover': {
    //   background: toRgba(buttonBackgroundColorVar, 0.8),
    // },
    ':focus': {
      outline: 'none',
    },
    ':focus-visible': {
      outline: 'none',
    },
    ':disabled': {
      // opacity: 0.85,
      cursor: 'not-allowed',
      transform: 'none',
    },
    selectors: {
      '&:active:not(:disabled)': {
        transform: `scale(0.95)`,
      },
    },
  },
  variants: {
    variant: {
      ...createColorVariantVars(buttonBackgroundColorVar),
      gradient: {
        background: `linear-gradient(to right, ${toRgba(vars.colors.primary)}, ${toRgba(vars.colors.secondary)})`,
      },
    },
    shadow: {
      true: {
        // boxShadow: `0 2px 8px 2px rgb(${buttonBackgroundVar}, 7%), 0 2px 4px -1px rgb(${buttonBackgroundVar}, 4%)`,
        boxShadow: `0 2px 14px 0 ${toRgba(buttonBackgroundColorVar, 0.5)}`,
      },
    },
    flat: {
      true: {
        background: toRgba(buttonBackgroundColorVar, 0.2),
        color: toRgba(buttonBackgroundColorVar),
      },
    },
    pill: {
      true: {
        borderRadius: '60rem',
      },
    },
    square: {
      true: {
        borderRadius: 0,
      },
    },
    circle: {
      true: {
        borderRadius: '50%',
        width: buttonHeightVar
      }
    },
    outline: {
      true: {
        borderColor: toRgba(buttonBackgroundColorVar),
        borderStyle: 'solid',
        borderWidth: 2,
        color: toRgba(buttonBackgroundColorVar),
        background: 'transparent',
      },
    },
    size: {
      sm: {
        fontSize: fontSizes.sm,
        vars: {
          [buttonPaddingVar]: pxToRem(10),
          [buttonHeightVar]: pxToRem(32)
        },
      },
      md: {
        fontSize: fontSizes.md,
        vars: {
          [buttonPaddingVar]: pxToRem(15),
          [buttonHeightVar]: pxToRem(40)
        },
      },
      lg: {
        height: pxToRem(48),
        fontSize: fontSizes.lg,
        vars: {
          [buttonPaddingVar]: pxToRem(20),
          [buttonHeightVar]: pxToRem(48)
        },
      },
      xl: {
        height: pxToRem(60),
        fontSize: fontSizes.xl,
        vars: {
          [buttonPaddingVar]: pxToRem(30),
          [buttonHeightVar]: pxToRem(60)
        },
      },
    },
    plain: {
      true: {
        background: 'transparent',
        color: toRgba(buttonBackgroundColorVar),
        boxShadow: 'none',
      },
    },
    wide: {
      true: {},
    },
    block: {
      true: {
        width: '100%',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        boxShadow: 'none',
      },
    },
    loading: {
      true: {
        opacity: 0.5,
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        wide: true,
        size: 'sm',
      },
      style: {
        vars: {
          [buttonPaddingVar]: pxToRem(20),
        },
      },
    },
    {
      variants: {
        wide: true,
        size: 'md',
      },
      style: {
        vars: {
          [buttonPaddingVar]: pxToRem(30),
        },
      },
    },
    {
      variants: {
        wide: true,
        size: 'lg',
      },
      style: {
        vars: {
          [buttonPaddingVar]: pxToRem(40),
        },
      },
    },
    {
      variants: {
        wide: true,
        size: 'xl',
      },
      style: {
        vars: {
          [buttonPaddingVar]: pxToRem(60),
        },
      },
    },
    {
      variants: {
        flat: true,
        shadow: true,
      },
      style: {
        boxShadow: 'none',
      },
    },
    {
      variants: {
        outline: true,
        shadow: true,
      },
      style: {
        boxShadow: 'none',
      },
    },
  ],

  defaultVariants: {
    variant: 'primary',
    shadow: false,
    size: 'md',
  },
})

export const loading = style({
  position: 'absolute',
  width: '1em',
  height: '1em',
  display: 'inline-block',
  paddingLeft: buttonPaddingVar,
  left: 0,
})
