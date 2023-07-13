import { createTheme } from '@vanilla-extract/css'

import { vars, colorVarsDarkDefault, colorVarsLightDefault, twShadows } from '@/styles'

export const lightTheme = createTheme(vars, {
  colors: colorVarsLightDefault,
  shadows: twShadows,
})

export const darkTheme = createTheme(vars, {
  colors: colorVarsDarkDefault,
  shadows: twShadows,
})
