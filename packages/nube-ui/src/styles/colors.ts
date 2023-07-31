import { CSSVarFunction } from '@vanilla-extract/private'

import { vars } from './'

export const ColorVariants = ['primary', 'secondary', 'success', 'warning', 'danger'] as const

export type ColorType = (typeof ColorVariants)[number]

/**
 *
 * @param {object} cssVars
 * @returns {object}
 */
export function createColorVariantVars(cssVar: CSSVarFunction): Record<ColorType, string> {
  const result = new Map()

  for (const color of ColorVariants) {
    result.set(color, {
      vars: {
        [cssVar]: vars.colors[color],
      },
    })
  }

  return Object.fromEntries(result)
}
