import { createGlobalThemeContract, createThemeContract } from '@vanilla-extract/css'

export const colors = {
  primary: 'color-primary',
  secondary: 'color-secondary',
  success: 'color-success',
  warning: 'color-warning',
  danger: 'color-danger',
  text: 'color-text',
  textLight: 'color-text-light',
  background: 'color-background',
  gray: 'color-gray',
}

const sizes = {
  sm: 'size-sm',
  md: 'size-md',
  lg: 'size-lg',
  xl: 'size-xl',
  '2xl': 'size-2xl',
} as const

const shadows = {
  default: 'shadow-default',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  '2xl': 'shadow-2xl',
  none: 'shadow-none',
}

const fontSizes = {
  '3xs': 'font-size-3xs',
  '2xs': 'font-size-2xs',
  xs: 'font-size-xs',
  sm: 'font-size-sm',
  md: 'font-size-md',
  lg: 'font-size-lg',
  xl: 'font-size-xl',
  '2xl': 'font-size-2xl',
  '3xl': 'font-size-3xl',
  '4xl': 'font-size-4xl',
}
const spaces = {
  auto: 'space-auto',
  0: 'space-0',
  1: 'space-1',
  2: 'space-2',
  3: 'space-3',
  4: 'space-4',
  5: 'space-5',
  6: 'space-6',
  7: 'space-7',
  8: 'space-8',
  9: 'space-9',
  10: 'space-10',
  11: 'space-11',
  12: 'space-12',
  13: 'space-13',
  14: 'space-14',
  15: 'space-15',
  16: 'space-16',
  17: 'space-17',
  18: 'space-18',
  20: 'space-20',
  24: 'space-24',
  28: 'space-28',
  32: 'space-32',
  36: 'space-36',
  40: 'space-40',
  44: 'space-44',
  48: 'space-48',
  52: 'space-52',
  56: 'space-56',
  60: 'space-60',
  64: 'space-64',
  72: 'space-72',
  80: 'space-80',
  96: 'space-96',
}

export type Colors = typeof colors
export type Sizes = typeof sizes
export type Shadows = typeof shadows

export const themeVars = {
  colors,
  shadows,
  spaces,
  fontSizes
} as const

export const vars = createGlobalThemeContract(themeVars)
