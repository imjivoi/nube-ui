import { tv } from 'tailwind-variants'

export const alert = tv({
  slots: {
    root: 'text-white',
    title: 'font-medium',
  },
  variants: {
    variant: {
      primary: {
        root: 'bg-primary',
      },
      secondary: {
        root: 'bg-secondary',
      },
      success: {
        root: 'bg-success',
      },
      warning: {
        root: 'bg-warning',
      },
      danger: {
        root: 'bg-danger',
      },
    },
    flat: {
      true: '',
    },
    shadow: {
      true: {
        root: 'shadow-md',
      },
    },
    rounded: {
      true: {
        root: 'rounded-lg',
      },
    },
    size: {
      sm: {
        root: 'py-2 px-4',
        title: 'tex-lg',
      },
      md: {
        root: 'py-4 px-8',
        title: 'text-xl mb-2',
      },
      lg: {
        root: 'py-8 px-12',
        title: 'text-2xl mb-3',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      flat: true,
      class: 'text-primary bg-primary/20',
    },
    {
      variant: 'secondary',
      flat: true,
      class: 'text-secondary bg-secondary/20',
    },
    {
      variant: 'warning',
      flat: true,
      class: 'text-warning bg-warning/20',
    },
    {
      variant: 'success',
      flat: true,
      class: 'text-success bg-success/20',
    },
    {
      variant: 'danger',
      flat: true,
      class: 'text-danger bg-danger/20',
    },

    {
      variant: 'primary',
      shadow: true,
      class: 'shadow-primary/50',
    },
    {
      variant: 'secondary',
      shadow: true,
      class: 'shadow-secondary/50',
    },
    {
      variant: 'warning',
      shadow: true,
      class: 'shadow-warning/50',
    },
    {
      variant: 'success',
      shadow: true,
      class: 'shadow-success/50',
    },
    {
      variant: 'danger',
      shadow: true,
      class: 'shadow-danger/50',
    },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})
