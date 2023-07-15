import type { Meta, StoryObj } from '@storybook/vue3'

import { NRadio } from '@/components'
import { ref } from 'vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Radio',
  component: NRadio,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  argTypes: {
    variant: { control: { type: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger'] } },
  },
  args: {
    value: '',
  },
  render: (args) => ({
    components: { NRadio },
    setup() {
      return { args, options: ['one', 'two', 'three'], selectedOption: ref('') }
    },
    template: `
      <div style="display: grid; gap: 2rem">
      <div>
        <div style="display: flex; gap: 1rem">
          <NRadio v-for="option in options" :value="option" v-model="selectedOption">{{ option }}</NRadio>
        </div>
        <div>selected: {{ selectedOption }}</div>
      </div>
    </div>
      `,
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof NRadio>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {}

export const Variants: Story = {}
Variants.decorators = [
  () => {
    return {
      setup() {
        return {
          variants: ['primary', 'secondary', 'success', 'warning', 'danger'],
          selectedOption: ref(''),
        }
      },
      components: { NRadio },
      template: `
        <div style="display: flex; gap: 1rem">
          <NRadio v-for="variant in variants" :variant="variant" :value="variant" v-model="selectedOption">{{ variant }}</NRadio>
        </div>
      `,
    }
  },
]
