import type { Meta, StoryObj } from '@storybook/vue3'

import { NTextarea } from '@/components'
import { ref } from 'vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Textarea',
  component: NTextarea,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  argTypes: {
    label: { type: 'string', control: 'text' },
    labelPlaceholder: { type: 'string', control: 'text' },
    placeholder: { type: 'string', control: 'text' },
    shadow: { type: 'boolean', control: 'boolean' },
    message: { type: 'string', control: 'text' },
    border: { type: 'boolean', control: 'boolean' },
    variant: { control: 'select', options: ['primary', 'secondary', 'success', 'error', 'warning'] },
  },
  args: {
    modelValue: '',
    variant: 'primary',
    placeholder: 'Textarea',
  },
  render: (args) => ({
    components: { NTextarea },
    setup() {
      return { args, modelValue: ref('') }
    },
    template: '<div style="max-width:320px"><NTextarea v-bind="args" v-model="modelValue" /></div>',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof NTextarea>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {}

export const Label: Story = {
  args: {
    label: 'Label',
  },
}

export const LabelPlaceholder: Story = {
  args: {
    labelPlaceholder: 'Label Placeholder',
  },
}

export const Placeholder: Story = {
  args: {
    placeholder: 'Placeholder',
  },
}

export const Shadow: Story = {
  args: {
    shadow: true,
  },
}

export const BorderPrimary: Story = {
  args: {
    border: true,
  },
}

export const BorderSuccess: Story = {
  args: {
    border: true,
    variant: 'success',
  },
}

export const Message: Story = {
  args: {
    message: 'Message',
  },
}

export const RowsCols: Story = {}
RowsCols.decorators = [
  (args) => {
    return {
      components: { NTextarea },
      setup() {
        return { args, modelValue: ref('') }
      },
      template:
        '<div style="max-width:320px"><NTextarea v-bind="args" v-model="modelValue" rows="4" cols="50"/></div>',
    }
  },
]
