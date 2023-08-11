import type { Meta, StoryObj } from '@storybook/vue3'
import { ref, h } from 'vue'

import { Icon } from '@iconify/vue'
import { NDropdown, NDropdownItem, NButton } from '@/components'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Dropdown',
  component: NDropdown,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  argTypes: {},
  args: {
    variant: 'primary',
    label: 'Menu',
    flat: false,
    plain: false,
    shadow: false,
  },
  render: (args) => ({
    components: { NDropdown, NButton, Icon, NDropdownItem },
    setup() {
      const items = [
        {
          value: 'item 1',
          label: 'Item 1',
          acttion: () => {
            console.log('clicked')
          },
        },
        {
          value: 'item 2',
          label: 'Item 2',
          acttion: () => {
            console.log('clicked')
          },
        },
        {
          value: 'item 3',
          label: 'Item 3',
          acttion: () => {
            console.log('clicked')
          },
        },
      ]
      return { args, items }
    },
    template: `
        <div class="m-40">
          <NDropdown v-bind="args" :items="items"/>  
        </div>
      `,
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof NDropdown>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {}

export const Flat: Story = {
  args: {
    flat: true,
  },
}

export const Plain: Story = {
  args: {
    plain: true,
  },
}

export const Shadow: Story = {
  args: {
    shadow: true,
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const CustomDropdownItemContent: Story = {}
CustomDropdownItemContent.decorators = [
  (args) => {
    return {
      components: { Icon, NDropdown, NDropdownItem },
      setup() {
        return { args }
      },
      template: `
              <div class="m-40">
                <NDropdown> 
                  <NDropdown-item>
                    <Icon icon="ic:baseline-account-circle"/>
                    User
                  </NDropdown-item>
                  <NDropdown-item variant="danger">
                    <Icon icon="ic:baseline-logout"/>
                    Logout
                  </NDropdown-item>
                  <NDropdown-item disabled>
                    Disabled
                  </NDropdown-item>
                </NDropdown>
              </div>
              
              `,
    }
  },
]
