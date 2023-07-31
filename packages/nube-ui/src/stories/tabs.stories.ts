import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'

import { NTabs, NButton } from '../components'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Tabs',
  component: NTabs,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  argTypes: {
    variant: {
      control: { type: 'select', options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'] },
    },
    pill: { control: { type: 'boolean' } },
    rounded: { control: { type: 'boolean' } },
    square: { control: { type: 'boolean' } },
    noBackground: { control: { type: 'boolean' } },
  },
  args: {
    // modelValue: false,
  },
  render: (args) => ({
    components: { NTabs },
    setup() {
      return {
        args,
        selected: ref(),
        options: [
          { label: 'Vue', value: 'vue' },
          { label: 'React', value: 'react' },
          { label: 'Angular', value: 'angular' },
        ],
      }
    },
    template: `
          <NTabs v-bind="args" :options="options">
          </NTabs>
      `,
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof NTabs>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Rounded: Story = {}
Rounded.args = { rounded: true }

export const Square: Story = {}
Square.args = { square: true }

export const NoBackground: Story = {}
NoBackground.args = { noBackground: true }

export const Primary: Story = {}
Primary.args = { variant: 'primary' }

export const Secondary: Story = {}
Secondary.args = { variant: 'secondary' }

export const Success: Story = {}
Success.args = { variant: 'success' }

export const Warning: Story = {}
Warning.args = { variant: 'warning' }

export const Danger: Story = {}
Danger.args = { variant: 'danger' }
