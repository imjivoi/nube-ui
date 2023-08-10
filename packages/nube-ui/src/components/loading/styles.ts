import { tv } from 'tailwind-variants'

export const loading = tv({
  base: 'inline-block rounded-full border-box border-4 border-solid border-r-transparent animate-spin',
  variants: {
    variant: {
      primary: 'border-t-primary',
      secondary: 'border-t-secondary',
      success: 'border-t-success',
      warning: 'border-t-warning',
      danger: 'border-t-danger',
    },
    size: {
      xs: 'w-5 h-5',
      sm: 'w-10 h-10',
      md: 'w-15 h-15',
      lg: 'w-20 h-20',
      xl: 'w-25 h-25',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})
