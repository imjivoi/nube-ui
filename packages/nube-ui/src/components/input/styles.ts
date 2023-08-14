import { tv } from 'tailwind-variants'

export const input = tv({
  slots: {
    root: 'relative flex flex-col rounded-lg',
    wrapper: 'relative rounded-lg transition-all duration-200 linear focus-within:-translate-y-[2px]',
    container: 'rounded-lg transition-all duration-300 linear relative bg-gray flex items-center',
    content:
      'input-content bg-transparent border-none outline-none p-2 rounded-lg text-sm w-full text-text disabled:text-text/50',
    prefix: 'text-text-light text-sm',
    passwordButton: 'cursor-pointer text-text flex',
    message: 'text-xs text-left absolute top-[100%] left-0',
  },
  variants: {
    variant: {
      primary: {
        message: 'text-primary',
      },
      secondary: {
        message: 'text-secondary',
      },
      success: {
        message: 'text-success',
      },
      warning: {
        message: 'text-warning',
      },
      danger: {
        message: 'text-danger',
      },
    },
    shadow: {
      true: {
        wrapper: 'shadow-sm focus-within:shadow',
      },
    },
    border: {
      true: {
        container: 'focus-within:shadow-[0_0_0_2px_rgba(0,0,0,0.3)]',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      border: true,
      class: {
        container: 'focus-within:shadow-primary',
      },
    },
    {
      variant: 'secondary',
      border: true,
      class: {
        container: 'focus-within:shadow-secondary',
      },
    },
    {
      variant: 'warning',
      border: true,
      class: {
        container: 'focus-within:shadow-warning',
      },
    },
    {
      variant: 'success',
      border: true,
      class: {
        container: 'focus-within:shadow-success',
      },
    },
    {
      variant: 'danger',
      border: true,
      class: {
        container: 'focus-within:shadow-danger',
      },
    },
  ],
  defaultVariants: {
    variant: 'primary',
  },
})

const labelBase = 'absolute left-2 text-text-light pointer-events-none text-xs transition-all duration-300'

export const placeholder = tv({
  base: labelBase,
  variants: {
    label: {
      true: '[.input-content:focus + &]:opacity-100 [.input-content:focus + &]:-translate-y-7 [.input-content:focus + &]:-translate-x-2 [.input-content:focus + &]:text-text',
    },
    hidden: {
      true: 'opacity-0 -translate-y-[2px]',
    },
  },
  compoundVariants: [
    {
      label: true,
      hidden: true,
      class: '-translate-y-7 -translate-x-2 opacity-1 text-text',
    },
  ],
})

export const label = `${labelBase} text-text -translate-y-7 -translate-x-2`
