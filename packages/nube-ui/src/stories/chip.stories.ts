import type { Meta, StoryObj } from '@storybook/vue3'
import { NChip } from '../components'

const variants = ['default', 'primary', 'secondary', 'warning', 'danger', 'success']
// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Chip',
  component: NChip,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  argTypes: {
    variant: { control: { type: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger'] } },
    rounded: { control: { type: 'boolean' } },
    flat: { control: { type: 'boolean' } },
    square: { control: { type: 'boolean' } },
  },
  render: (args) => ({
    components: { NChip },
    setup() {
      return { args }
    },
    template: `
          <NChip v-bind="args">
            Chip
          </NChip>
      `,
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof NChip>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {}
Variants.decorators = [
  () => {
    return {
      components: { NChip },
      setup() {
        return {
          variants,
        }
      },
      template: `<div style="display: flex; gap: 0.5rem"> <NChip v-for="variant in variants" :key="variant" :variant="variant">{{variant}}</NChip></div>`,
    }
  },
]

export const Sizes: Story = {}
Sizes.decorators = [
  () => {
    return {
      components: { NChip },
      setup() {
        return {
          sizes: ['sm', 'md', 'lg'],
        }
      },
      template: `<div style="display: flex; gap: 0.5rem"> <NChip v-for="size in sizes" :key="size" :size="size">{{size}}</NChip></div>`,
    }
  },
]

export const Pill: Story = {}
Pill.args = {
  pill: true,
}

export const Square: Story = {}
Square.args = {
  square: true,
}

export const Flat: Story = {}
Flat.decorators = [
  ()=> {
    return {
      components: { NChip },
      setup() {
        return {
          variants
        }
      },
      template: `<div style="display: flex; gap: 0.5rem"><NChip v-for="variant in variants" :key="variant" flat :variant="variant">{{variant}}</NChip></div>`
    }
  }
]

export const Outline: Story = {}
Outline.decorators = [
  ()=> {
    return {
      components: { NChip },
      setup() {
        return {
          variants
        }
      },
      template: `<div style="display: flex; gap: 0.5rem"><NChip v-for="variant in variants" :key="variant" outline :variant="variant">{{variant}}</NChip></div>`
    }
  }
]