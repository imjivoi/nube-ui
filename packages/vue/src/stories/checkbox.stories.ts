import type { Meta, StoryObj } from '@storybook/vue3'

import { NCheckbox } from '@/components'
import { ref } from 'vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Checkbox',
  component: NCheckbox,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  argTypes: {
    variant: { control: { type: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger'] } },
  },
  args: {
    variant: 'primary',
    modelValue: false,
  },
  render: (args) => ({
    components: { NCheckbox },
    setup() {
      return { args, modevlValue: ref(), variants: ['primary', 'secondary', 'success', 'warning', 'danger'] }
    },
    template:
      '<div style="display: flex;gap: 1rem"><NCheckbox  v-bind="args" v-for="variant in variants" :variant="variant" v-model="modevlValue"/></div>',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof NCheckbox>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {}

export const MultipleSelect: Story = {}
MultipleSelect.decorators = [
  () => {
    return {
      components: { NCheckbox },
      setup() {
        return {
          people: ref(['William', 'Thomas', 'Jennifer']),
          selectedPeople: ref<string[]>([]),
        }
      },
      template: `<div style="display: flex; gap: 1rem">
                  <template v-for="person in people">
                    <NCheckbox v-model="selectedPeople" :value="person">
                      {{ person }}
                    </NCheckbox>
                  </template>
                </div>
                <div style="display: flex; gap: 1rem">
                  <span v-for="person in selectedPeople">
                    {{ person }}
                  </span>
                </div>
                `
    }
  },
]
