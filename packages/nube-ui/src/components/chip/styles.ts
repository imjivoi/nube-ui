import { tv } from 'tailwind-variants'

export const chip = tv({
  slots: {
    root: 'flex items-center w-fit',
    content: 'px-2',
  },
  variants: {
    variant: {
      default: {
        root: 'bg-gray',
      },
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
    size: {
      sm: {
        root: 'px-2 h-6',
      },
      md: {
        root: 'px-4 h-8',
      },
      lg: {
        root: 'px-8 h-10',
      },
    },
    rounded: {
      true: {
        root: 'rounded-lg',
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
    flat: {
      true: {},
    },
    outline: {
      true: {
        root: 'bg-transparent',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      flat: true,
      class: {
        root: 'bg-primary/50 text-primary',
      },
    },
    {
      variant: 'secondary',
      flat: true,
      class: {
        root: 'bg-secondary/50 text-secondary',
      },
    },
    {
      variant: 'success',
      flat: true,
      class: {
        root: 'bg-success/50 text-success',
      },
    },
    {
      variant: 'warning',
      flat: true,
      class: {
        root: 'bg-warning/50 text-warning',
      },
    },
    {
      variant: 'danger',
      flat: true,
      class: {
        root: 'bg-danger/50 text-danger',
      },
    },
    {
      variant: 'default',
      flat: true,
      class: {
        root: 'bg-gray text-black',
      },
    },

    {
      variant: 'primary',
      outline: true,
      class: {
        root: 'text-primary border-primary border-2',
      },
    },
    {
      variant: 'secondary',
      outline: true,
      class: {
        root: 'text-secondary border-secondary border-2',
      },
    },
    {
      variant: 'warning',
      outline: true,
      class: {
        root: 'text-warning border-warning border-2',
      },
    },
    {
      variant: 'success',
      outline: true,
      class: {
        root: 'text-success border-success border-2',
      },
    },
    {
      variant: 'danger',
      outline: true,
      class: {
        root: 'text-danger border-danger border-2',
      },
    },
    {
      variant: 'default',
      outline: true,
      class: {
        root: 'text-gray border-gray border-2',
      },
    },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'md',
    rounded: true,
  },
})
