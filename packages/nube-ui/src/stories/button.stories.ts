import type { Meta, StoryObj } from '@storybook/vue3'
import { Icon } from '@iconify/vue'

import { NButton } from '@/components'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Button',
  component: NButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'gradient'],
    },
    flat: { control: 'boolean' },
    outline: { control: 'boolean' },
    shadow: { control: 'boolean' },
    pill: { control: 'boolean' },
    square: { control: 'boolean' },
    plain: { control: 'boolean' },
    wide: { control: 'boolean' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    noRipple: { control: 'boolean' },
    block: { control: 'boolean' },
  },
  args: {
    size: 'md',
    variant: 'primary',
    flat: false,
    outline: false,
    shadow: false,
    block: false,
  },
  render: (args) => ({
    components: { NButton },
    setup() {
      return { args, variants: ['primary', 'secondary', 'success', 'warning', 'danger'] }
    },
    template:
      '<div style="display: flex; gap: 1rem"> <NButton v-bind="args" v-for="variant in variants" :variant="variant" >{{variant}}</NButton></div>',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof NButton>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {}

export const Outline: Story = {
  args: {
    outline: true,
  },
}

export const Shadow: Story = {
  args: {
    shadow: true,
  },
}

export const NoRipple: Story = {
  args: {
    noRipple: true,
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}

export const Pill: Story = {
  args: {
    pill: true,
  },
}

export const Square: Story = {
  args: {
    square: true,
  },
}

export const Plain: Story = {
  args: {
    plain: true,
  },
}

export const Flat: Story = {
  args: {
    flat: true,
  },
}

export const Wide: Story = {
  args: {
    wide: true,
  },
}

export const Block: Story = {}
Block.decorators = [
  (args) => {
    return {
      components: { NButton },
      setup() {
        return { args, variants: ['primary', 'secondary', 'success', 'warning', 'danger'] }
      },
      template: `<div style="grid; gap: 1rem">
            <NButton v-bind="args" block v-for="variant in variants" :variant="variant">Button</NButton>
            </div>`,
    }
  },
]

export const Size: Story = {}
Size.decorators = [
  (args) => {
    return {
      components: { NButton },
      setup() {
        return { args, sizes: ['sm', 'md', 'lg', 'xl'] }
      },
      template: `<div style="display:flex; gap: 1rem">
            <NButton v-bind="args" block v-for="size in sizes" :size="size">{{size}}</NButton>
            </div>`,
    }
  },
]

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const IconButton: Story = {}
IconButton.decorators = [
  (args) => {
    return {
      components: { NButton, Icon },
      setup() {
        return { args, sizes: ['sm', 'md', 'lg', 'xl'] }
      },
      template: `<div style="display:flex; gap: 1rem">
                  <NButton v-bind="args" > 
                    <Icon icon="ic:baseline-favorite" />
                  </NButton>
                  <NButton v-bind="args" plain> 
                    <Icon icon="ic:baseline-favorite" />
                  </NButton>
                  <NButton v-bind="args" flat variant="danger"> 
                    <Icon icon="ic:baseline-favorite" />
                  </NButton>
                  <NButton v-bind="args" flat circle variant="danger"> 
                    <Icon icon="ic:baseline-favorite" />
                  </NButton>
                </div>`,
    }
  },
]
