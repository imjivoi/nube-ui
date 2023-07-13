import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'

import { NSelect, NSelectItem } from '@/components'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Select',
  component: NSelect,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  argTypes: {
    variant: { control: { type: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger'] } },
    multiple: { control: { type: 'boolean' } },
    modelValue: { control: { type: 'text' } },
  },
  args: {
    variant: 'primary',
    modelValue: '',
  },
  render: (args) => ({
    components: { NSelect },
    setup() {
      const items = [
        {
          label: 'Vue',
          value: 'vue',
        },
        {
          label: 'React',
          value: 'react',
        },
        {
          label: 'Angular',
          value: 'angular',
        },
        {
          label: 'Svelte',
          value: 'svelte',
        },
        {
          label: 'SvelteKit',
          value: 'sveltekit',
        },
        {
          label: 'Gatsby',
          value: 'gatsby',
        },
        {
          label: 'Nuxt',
          value: 'nuxt',
        },
        {
          label: 'Next',
          value: 'next',
        },
        {
          label: 'Vite',
          value: 'vite',
        },
        {
          label: 'Snowpack',
          value: 'snowpack',
        },
      ]
      const variants = ['primary', 'secondary', 'success', 'warning', 'danger']

      const modelValue = ref()

      return {
        modelValue,
        items,
        variants,
        args,
      }
    },
    template:
      '<div style="display:grid;gap:1.5rem"> <n-select :placeholder="variant" v-bind="args" :items="items" v-model="modelValue" :variant="variant" v-for="variant in variants" /></div>',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof NSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Multiple: Story = {
  args: {
    multiple: true,
  },
}

export const Label: Story = {
  args: {
    label: 'Label',
    placeholder: '',
  },
}

export const LabelPlaceholder: Story = {
  args: {
    labelPlaceholder: 'Label Placeholder',
    placeholder: '',
  },
}
