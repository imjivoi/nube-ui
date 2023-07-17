import twColors from 'tailwindcss/colors.js'
import { hexToRgb, pxToRem } from '../utils'

import { Colors, Shadows } from './'

export const colorVarsLightDefault: Colors = {
  primary: hexToRgb(twColors.blue[600]),
  secondary: hexToRgb(twColors.violet[500]),
  success: hexToRgb(twColors.green[500]),
  danger: hexToRgb(twColors.red[500]),
  warning: hexToRgb(twColors.yellow[500]),
  text: hexToRgb(twColors.gray[900]),
  textLight: hexToRgb(twColors.gray[500]),
  background: hexToRgb(twColors.white),
  gray: hexToRgb(twColors.gray[200]),
}

export const colorVarsDarkDefault: Colors = {
  primary: hexToRgb(twColors.blue[700]),
  secondary: hexToRgb(twColors.violet[600]),
  success: hexToRgb(twColors.green[600]),
  danger: hexToRgb(twColors.rose[600]),
  warning: hexToRgb(twColors.yellow[600]),
  text: hexToRgb(twColors.white),
  textLight: hexToRgb(twColors.gray[400]),
  background: hexToRgb(twColors.gray[900]),
  gray: hexToRgb(twColors.gray[800]),
}

export const fontSizes = {
  xs: pxToRem(12),
  sm: pxToRem(14),
  md: pxToRem(16),
  lg: pxToRem(18),
  xl: pxToRem(20),
  '2xl': pxToRem(24),
  '3xl': pxToRem(28),
  '4xl': pxToRem(36),
}

export const fontWeights = {
  '400': 400,
  '500': 500,
  '600': 600,
  '700': 700,
  '800': 800,
}

export const twShadows: Shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  default: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  none: '0 0 #0000',
}

export const spaces = {
  auto: 'auto',
  0: '0',
  1: '0.125rem',
  2: '0.25rem',
  3: '0.375rem',
  4: '0.5rem',
  5: '0.625rem',
  6: '0.75rem',
  7: '0.875rem',
  8: '1rem',
  9: '1.25rem',
  10: '1.5rem',
  11: '1.75rem',
  12: '2rem',
  13: '2.25rem',
  14: '2.5rem',
  15: '2.75rem',
  16: '3rem',
  17: '3.5rem',
  18: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
}
