import { tv } from 'tailwind-variants'

export const dropdown = tv({
  slots: {
    root: 'relative inline-block',
    menu: 'absolute left-0 bg-gray shadow-sm rounded-lg min-w-[150px] z-10 p-2 mt-2',
    chevron: 'ml-2',
    'transition-enter-active': 'transition-all duration-200 ease-out',
    'transition-leave-active': 'transition-all duration-200 ease-in',
    'transition-enter-from': 'transform opacity-0 scale-95',
    'transition-leave-to': 'transform opacity-0 scale-95',
    'transition-enter-to': 'transform opaccity-1 scale-95',
    'transition-leave-from': 'transform opacity-1 scale-1',
  },
})

export const dropdownItem = tv({
  base: 'cursor-pointer py-1 px-3 rounded-md text-text flex items-center',
  variants: {
    variant: {
      primary: 'hover:bg-primary hover:text-white',
      secondary: 'hover:bg-secondary hover:text-white',
      warning: 'hover:bg-warning hover:text-white',
      success: 'hover:bg-success hover:text-white',
      danger: 'hover:bg-danger hover:text-white',
    },
    flat: {
      true: {},
    },
    plain: {
      true: 'hover:bg-transparent',
    },
    shadow: {
      true: {},
    },
    disabled: {
      true: 'cursor-not-allowed opacity-5 text-text-light hover:bg-transparent hover:text-text-light',
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      flat: true,
      class: 'hover:bg-primary/20 hover:text-primary',
    },
    {
      variant: 'secondary',
      flat: true,
      class: 'hover:bg-secondary/20 hover:text-secondary',
    },
    {
      variant: 'warning',
      flat: true,
      class: 'hover:bg-warning/20 hover:text-warning',
    },
    {
      variant: 'success',
      flat: true,
      class: 'hover:bg-success/20 hover:text-success',
    },
    {
      variant: 'danger',
      flat: true,
      class: 'hover:bg-danger/20 hover:text-danger',
    },

    {
      variant: 'primary',
      plain: true,
      class: 'hover:text-primary',
    },
    {
      variant: 'secondary',
      plain: true,
      class: 'hover:text-secondary',
    },
    {
      variant: 'warning',
      plain: true,
      class: 'hover:text-warning',
    },
    {
      variant: 'success',
      plain: true,
      class: 'hover:text-success',
    },
    {
      variant: 'danger',
      plain: true,
      class: 'hover:text-danger',
    },

    {
      variant: 'primary',
      shadow: true,
      class: 'hover:shadow-dropdownItem hover:shadow-primary/50',
    },
    {
      variant: 'secondary',
      shadow: true,
      class: 'hover:shadow-dropdownItem hover:shadow-secondary/50',
    },
    {
      variant: 'warning',
      shadow: true,
      class: 'hover:shadow-dropdownItem hover:shadow-warning/50',
    },
    {
      variant: 'success',
      shadow: true,
      class: 'hover:shadow-dropdownItem hover:shadow-success/50',
    },
    {
      variant: 'danger',
      shadow: true,
      class: 'hover:shadow-dropdownItem hover:shadow-danger/50',
    },
  ],
  defaultVariants: {
    variant: 'primary',
  },
})
