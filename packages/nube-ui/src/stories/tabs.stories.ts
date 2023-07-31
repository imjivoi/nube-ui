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
      const options = [
        { label: 'Vue', value: 'vue' },
        { label: 'React', value: 'react' },
        { label: 'Angular', value: 'angular' },
      ]
      const selected = ref('vue')
      return {
        args,
        options,
        selected,
      }
    },
    template: `
          <NTabs v-model="selected" v-bind="args" :options="options">
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

export const Content: Story = {}
Content.decorators = [
  (args) => {
    return {
      components: { NTabs },
      setup() {
        return {
          args,
          selected: ref('vue'),
          options: [
            { label: 'Vue', value: 'vue', content: '<strong>Vue</strong> blabla bla' },
            { label: 'React', value: 'react', content: 'React bla bla gbla' },
            { label: 'Angular', value: 'angular', content: 'Angular blabla bla' },
          ],
        }
      },
      template: `
            <NTabs v-model="selected" v-bind="args" :options="options">
              <template v-slot:content="{ content }">
                <span v-html="content"></span>
              </template>
            </NTabs>
        `,
    }
  },
]

export const Disabled: Story = {}
Disabled.decorators = [
  (args) => {
    return {
      components: { NTabs },
      setup() {
        return {
          args,
          selected: ref('vue'),
          options: [
            { label: 'Vue', value: 'vue' },
            { label: 'React', value: 'react' },
            { label: 'Angular', value: 'angular', disabled: true },
          ],
        }
      },
      template: `
            <NTabs v-model="selected" v-bind="args" :options="options">
            </NTabs>
        `,
    }
  },
]