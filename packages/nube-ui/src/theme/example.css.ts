import { createTheme } from '@vanilla-extract/css'

import { vars, colorVarsDarkDefault, colorVarsLightDefault, twShadows, spaces, fontSizes } from '@/styles'

export const lightTheme = createTheme(vars, {
  colors: colorVarsLightDefault,
  shadows: twShadows,
  spaces,
  fontSizes,
})

export const darkTheme = createTheme(vars, {
  colors: colorVarsDarkDefault,
  shadows: twShadows,
  spaces,
  fontSizes,
})
