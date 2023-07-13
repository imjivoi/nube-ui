import { globalStyle } from '@vanilla-extract/css'

import { vars } from './'

globalStyle('html', {
  color: `rgb(${vars.colors.text})`,
})
