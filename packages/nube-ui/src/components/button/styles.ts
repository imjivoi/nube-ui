import { tv } from 'tailwind-variants'

export const rippleBackgrounds = {
  primary: 'bg-primary/10',
  secondary: 'bg-secondary/10',
  success: 'bg-success/10',
  warning: 'bg-warning/10',
  danger: 'bg-danger/10',
}

export const button = tv({
  slots: {
    root: 'active:scale-95 outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:transform-none font-medium transition-all duration-250 ease user-select-none z-1 rounded-xl flex items-center justify-center p-0',
    content: 'z-10 flex items-center justify-center w-full',
  },
  variants: {
    variant: {
      primary: {
        root: 'bg-primary text-white',
      },
      secondary: {
        root: 'bg-secondary text-white',
      },
      warning: {
        root: 'bg-warning text-white',
      },
      success: {
        root: 'bg-success text-white',
      },
      danger: { root: 'bg-danger text-white' },
    },
    size: {
      sm: {
        root: 'text-sm h-8',
        content: 'px-3'
      },
      md: {
        root: 'h-10',
        content: 'px-4'
      },
      lg: {
        root: 'h-12',
        content: 'px-6'
      },
      xl: {
        root: 'h-14',
        content: 'px-8'
      },
    },
    pill: {
      true: {
        root: 'rounded-full',
      },
    },
    square: {
      true: {
        root: 'rounded-none',
      },
    },
    circle: {
      true: {
        root: 'rounded-full',
        content: 'px-0'
      },
    },
    flat: {
      true: {
        root: 'bg-opacity-30',
      },
    },
    plain: {
      true: {},
    },
    outline: {
      true: {
        root: 'bg-transparent border-2',
      },
    },
    shadow: {
      true: {
        root: 'shadow-md',
      },
    },
    block: {
      true: {
        root: 'w-full',
      },
    },
    wide: { true: {} },
    disabled: {
      true: {
        root: 'shadow-none opacity-50',
      },
    },
    loading: {
      true: {
        root: 'opacity-50',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      flat: true,

      class: {
        root: 'text-primary',
      },
    },
    {
      variant: 'secondary',
      flat: true,

      class: {
        root: 'text-secondary',
      },
    },
    {
      variant: 'success',
      flat: true,

      class: {
        root: 'text-success',
      },
    },
    {
      variant: 'warning',
      flat: true,

      class: {
        root: 'text-warning',
      },
    },
    {
      variant: 'danger',
      flat: true,

      class: {
        root: 'text-danger',
      },
    },
    {
      shadow: true,
      variant: 'primary',
      class: {
        root: 'shadow-primary/50',
      },
    },
    {
      shadow: true,
      variant: 'secondary',
      class: {
        root: 'shadow-secondary/50',
      },
    },
    {
      shadow: true,
      variant: 'success',
      class: {
        root: 'shadow-success/50',
      },
    },
    {
      shadow: true,
      variant: 'warning',
      class: {
        root: 'shadow-warning/50',
      },
    },
    {
      shadow: true,
      variant: 'danger',
      class: {
        root: 'shadow-danger/50',
      },
    },
    {
      plain: true,
      variant: 'primary',
      class: {
        root: 'bg-transparent text-primary',
      },
    },
    {
      plain: true,
      variant: 'secondary',
      class: {
        root: 'bg-transparent text-secondary',
      },
    },
    {
      plain: true,
      variant: 'success',
      class: {
        root: 'bg-transparent text-success',
      },
    },
    {
      plain: true,
      variant: 'warning',
      class: {
        root: 'bg-transparent text-warning',
      },
    },
    {
      plain: true,
      variant: 'danger',
      class: {
        root: 'bg-transparent text-danger',
      },
    },
    {
      wide: true,
      size: 'sm',
      class: {
        root: 'px-5',
      },
    },
    {
      wide: true,
      size: 'md',
      class: {
        root: 'px-7',
      },
    },
    {
      wide: true,
      size: 'lg',
      class: {
        root: 'px-10',
      },
    },
    {
      wide: true,
      size: 'xl',
      class: {
        root: 'px-15',
      },
    },
    {
      circle: true,
      size: 'sm',
      class: {
        root: 'w-8',
      },
    },
    {
      circle: true,
      size: 'md',
      class: {
        root: 'w-10',
      },
    },
    {
      circle: true,
      size: 'lg',
      class: {
        root: 'w-12',
      },
    },
    {
      circle: true,
      size: 'xl',
      class: {
        root: 'w-14',
      },
    },
    {
      outline: true,
      variant: 'primary',
      class: {
        root: 'text-primary border-primary',
      },
    },
    {
      outline: true,
      variant: 'secondary',
      class: {
        root: 'text-secondary border-secondary',
      },
    },
    {
      outline: true,
      variant: 'warning',
      class: {
        root: 'text-warning border-warning',
      },
    },
    {
      outline: true,
      variant: 'success',
      class: {
        root: 'text-success border-success',
      },
    },
    {
      outline: true,
      variant: 'danger',
      class: {
        root: 'text-danger border-danger',
      },
    },
  ],
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
})
