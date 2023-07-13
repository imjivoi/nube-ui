import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'

import { Icon } from '@iconify/vue'
import { NSwitch } from '../components'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Switch',
  component: NSwitch,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  argTypes: {
    variant: { control: { type: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger'] } },
  },
  args: {
    modelValue: false,
  },
  render: (args) => ({
    components: { NSwitch },
    setup() {
      return { args, checked: ref(false) }
    },
    template: `
          <NSwitch  v-bind="args" v-model="checked">{{ option }}</NSwitch>
      `,
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof NSwitch>

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
  (args) => {
    return {
      components: { NSwitch },
      setup() {
        return {
          args,
          checked: ref(false),
          variants: ['primary', 'secondary', 'success', 'warning', 'danger'],
        }
      },
      template: `
      <div style="display: flex; gap: 1rem">
        <NSwitch v-bind="args" v-model="checked" v-for="variant in variants" :variant="variant">
      </div>
          `,
    }
  },
]

export const WithIcon: Story = {}
WithIcon.decorators = [
  (args) => {
    return {
      components: { NSwitch, Icon },
      setup() {
        return {
          checked: ref(false),
          args,
        }
      },
      template: `
            <div style="display: flex; gap: 1rem">
              <NSwitch v-bind="args" v-model="checked">
                <template #icon>
                  <Icon icon="material-symbols:clear-day-rounded" color="#000" v-if="!checked" />
                  <Icon icon="material-symbols:dark-mode-outline" color="#fff" v-else />
                </template>
              </NSwitch>
            </div>
                `,
    }
  },
]
