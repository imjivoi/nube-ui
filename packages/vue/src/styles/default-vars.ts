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
  gray: hexToRgb(twColors.gray[200])
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
