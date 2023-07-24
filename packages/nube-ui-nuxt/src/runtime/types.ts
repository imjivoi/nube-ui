export interface ThemeVariables {
  primary?: string
  secondary?: string
  warning?: string
  danger?: string
  gray?: string
  text?: string
  textLight?: string
  background?: string
}

export type Theme = Record<string, ThemeVariables>
