import { tv } from 'tailwind-variants'

export const checkbox = tv({
  slots: {
    root: 'flex items-center gap-2 cursor-pointer',
    container: 'rounded-lg relative z-10 overflow-hidden transition-all duration-350 w-6 h-6 shadow-gray shadow-checkbox hover:bg-gray/40',
    checkmark: 'absolute w-full h-full',
    checkmarkIcon: 'flex items-center justify-center transition-all duration-350 w-6 h-6 [&>span]:rotate-[45deg] [&>span]:block [&>span]:relative [&>span]:w-[8px] [&>span]:h-[13px] [&>span]:-mt-1',
    checkmarkFirstLine: 'absolute bg-transparent w-[8px] h-[1px] rounded-[5px] z-10 bottom-0 after:content-[""] after:absolute after:left-0 after:w-0 after:h-[2px] after:bg-white after:rounded-t-[5px] rounded-b-[5px]',
    checkmarkSecondLine: 'absolute bg-transparent w-[2px] h-[13px] rounded-[5px] bottom-0 right-0 after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-[2px] after:h-0 after:bg-white after:rounded-t-[5px] rounded-r-[5px]',
    input: 'absolute inset-0 w-0 h-0 opacity-0 cursor-pointer',
    label: 'text-text',
  },
  variants: {
    variant: {
      primary: {
      },
      secondary: {
      },
      success: {
      },
      warning: {
      },
      danger: {
      },
    },
    checked: {
      true: {
        container: 'hover:shadow-checkbox',
        checkmarkFirstLine: 'after:w-full after:transition-width after:duration-250 after:ease after:delay-100',
        checkmarkSecondLine: 'after:h-full after:transition-height after:duration-200 after:ease after:delay-100'
      },
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      checked: true,
      class: {
        container: 'bg-primary hover:shadow-primary/50 hover:bg-primary',
      },
    },
    {
      variant: 'secondary',
      checked: true,
      class: {
        container: 'hover:shadow-secondary/50 bg-secondary hover:bg-secondary',
      },
    },
    {
      variant: 'success',
      checked: true,
      class: {
        container: 'hover:shadow-success/50 bg-success bg-success hover:bg-success',
      },
    },
    {
      variant: 'warning',
      checked: true,
      class: {
        container: 'hover:shadow-warning/50 bg-warning hover:bg-warning',
      },
    },
    {
      variant: 'danger',
      checked: true,
      class: {
        container: 'hover:shadow-danger/50 bg-danger hover:bg-danger',
      },
    },
  ],
  defaultVariants: {
    variant: 'primary',
  },
})
