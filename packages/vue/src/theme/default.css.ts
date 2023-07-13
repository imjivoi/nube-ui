import { createGlobalTheme, globalStyle, assignVars } from '@vanilla-extract/css'

import { colorVarsLightDefault, vars, colorVarsDarkDefault, twShadows, fontSizes } from '@/styles'

createGlobalTheme(':root', vars, {
  colors: colorVarsDarkDefault,
  shadows: twShadows,
  // fontSize: fontSizes
})

globalStyle('html[data-theme="light"]', {
  vars: assignVars(vars.colors, colorVarsLightDefault),
})

globalStyle('html', {
  fontFamily: 'Inter',
  '@media': {
    'screen and (prefers-color-scheme: light)': {
      vars: assignVars(vars.colors, colorVarsLightDefault),
    },
  },
})
