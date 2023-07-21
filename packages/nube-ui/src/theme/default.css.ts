import { createGlobalTheme, globalStyle, assignVars } from '@vanilla-extract/css'

import { vars } from '../styles/vars.css'
import { spaces, colorVarsLightDefault, colorVarsDarkDefault, twShadows } from '../styles/default-vars'

createGlobalTheme(':root', vars, {
  colors: colorVarsDarkDefault,
  shadows: twShadows,
  spaces: spaces,
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
