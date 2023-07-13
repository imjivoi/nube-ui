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

const fontSize = {
  xs: '',
  sm: '',
  md: '',
  lg: '',
  xl: '',
  '2xl': '',
  '3xl': '',
  '4xl': '',
}

export type Colors = typeof colors
export type Sizes = typeof sizes
export type Shadows = typeof shadows

export const themeVars = {
  colors,
  shadows,
  // fontSize
} as const

export const vars = createGlobalThemeContract(themeVars)
