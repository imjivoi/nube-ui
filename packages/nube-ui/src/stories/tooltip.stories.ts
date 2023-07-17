import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'

import { Icon } from '@iconify/vue'
import { NTooltip, NButton } from '../components'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Tooltip',
  component: NTooltip,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  argTypes: {
    // variant: { control: { type: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger'] } },
  },
  args: {
    // modelValue: false,
  },
  render: (args) => ({
    components: { NTooltip, NButton },
    setup() {
      return { args, checked: ref(false) }
    },
    template: `
          <NTooltip>
            <template #trigger>
              <NButton>Default</NButton>
            </template>
            Tooltip content
          </NTooltip>
      `,
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof NTooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Position: Story = {}
Position.decorators = [
  ()=> {
    return {
      setup() {
        return {
          positions: ['top', 'bottom', 'left', 'right'],
        }
      },
      components: { NTooltip, NButton },
      template: `
        <div style="display: flex; gap: 1rem; padding: 6rem">
          <NTooltip v-for="position in positions" :position="position">
            <template #trigger>
              <NButton>{{ position }}</NButton>
            </template>
            Tooltip content
          </NTooltip>
        </div>
      `,
    }
  }
]

export const Variants: Story = {}
Variants.decorators = [
  ()=> {
    return {
      setup() {
        return {
          variants: ['default', 'primary','secondary','success', 'warning', 'danger'],
        }
      },
      components: { NTooltip, NButton },
      template: `
        <div style="display: flex; gap: 1rem; flex-wrap: wrap">
          <NTooltip v-for="variant in variants" :variant="variant">
            <template #trigger>
              <NButton>{{ variant }}</NButton>
            </template>
            Tooltip content
          </NTooltip>
        </div>
      `,
    }
  }
]