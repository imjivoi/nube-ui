import { createTheme } from '@vanilla-extract/css'

import { vars, colorVarsDarkDefault, colorVarsLightDefault, twShadows, spaces } from '@/styles'

export const lightTheme = createTheme(vars, {
  colors: colorVarsLightDefault,
  shadows: twShadows,
  spaces
})

export const darkTheme = createTheme(vars, {
  colors: colorVarsDarkDefault,
  shadows: twShadows,
  spaces
})
