import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'

import { Icon } from '@iconify/vue'
import { NAlert } from '../components'

const variants = ['primary', 'secondary', 'warning', 'danger']
// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Alert',
  component: NAlert,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  argTypes: {
    variant: { control: { type: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger'] } },
    rounded: { control: { type: 'boolean' } },
    shadow: { control: { type: 'boolean' } },
    flat: { control: { type: 'boolean' } },
  },
  args: {
    variant: 'primary'
  },
  render: (args) => ({
    components: { NAlert },
    setup() {
      return { args }
    },
    template: `
          <NAlert v-bind="args">
            <template #title>
              Alert Title
            </template>
            Random text inside the alert 
          </NAlert>
      `,
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof NAlert>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {}
Variants.decorators = [
  () => {
    return {
      components: { NAlert },
      setup() {
        return {
          variants,
        }
      },
      template: `
        <div style="display: grid; gap: 1rem">
          <NAlert v-for="variant in variants" :key="variant" :variant="variant">
            <template #title>
              Alert {{ variant}}
            </template>
            Random text inside the alert 
          </NAlert>
        </div>
      `,
    }
  },
]

export const Flat: Story = {}
Flat.decorators = [
  () => {
    return {
      components: { NAlert },
      setup() {
        return {
          variants,
        }
      },
      template: `
        <div style="display: grid; gap: 1rem">
          <NAlert v-for="variant in variants" :key="variant" :variant="variant" flat>
            <template #title>
              Alert {{ variant}}
            </template>
            Random text inside the alert 
          </NAlert>
        </div>
      `,
    }
  },
]

export const Shadow: Story = {}
Shadow.decorators = [
  () => {
    return {
      components: { NAlert },
      setup() {
        return {
          variants,
        }
      },
      template: `
        <div style="display: grid; gap: 1rem">
          <NAlert v-for="variant in variants" :key="variant" :variant="variant" shadow>
            <template #title>
              Alert {{ variant}}
            </template>
            Random text inside the alert 
          </NAlert>
        </div>
      `,
    }
  },
]

export const Rounded: Story = {}
Rounded.args = {
  rounded: true,
}

export const Sizes: Story = {}
Sizes.decorators = [
  () => {
    return {
      components: { NAlert },
      setup() {
        return {
          sizes: ['sm','md', 'lg'],
        }
      },
      template: `
        <div style="display: grid; gap: 1rem">
          <NAlert v-for="size in sizes" :key="size" :size="size">
            <template #title>
              Alert {{ size}}
            </template>
            Random text inside the alert 
          </NAlert>
        </div>
      `,
    }
  },
]