<template>
  <Listbox v-model="model" as="div" :class="styles.base" v-slot="{ open }" :multiple="multiple">
    <ListboxButton :class="styles.button">
      <template v-if="selectedLabel">
        {{ selectedLabel }}
      </template>
      <label
        :class="
          styles.palceholder({
            label: (open && !!labelPlaceholder) || (!!labelPlaceholder && !!selectedLabel),
            hidden: !!selectedLabel,
          })
        "
      >
        {{ labelPlaceholder || placeholder }}
      </label>
      <label :class="styles.label" v-if="!!label && !labelPlaceholder">{{ label }}</label>
      <Icon :class="styles.chevron" width="20px" icon="ic:baseline-keyboard-arrow-down" :v-flip="open" />
    </ListboxButton>
    <Transition :name="styles.animationClass">
      <div :class="styles.items" v-if="open">
        <ListboxOptions :class="styles.itemsContent">
          <slot>
            <SelectItem :value="item" :variant="variant" v-for="(item, idx) in items" :key="item.key || idx">
              {{ item.label }}
            </SelectItem>
          </slot>
        </ListboxOptions>
      </div>
    </Transition>
  </Listbox>
</template>
<script lang="ts">
export default {
  name: 'NSelect',
}
</script>
<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxLabel } from '@headlessui/vue'

import SelectItem from './select-item.vue'

import * as styles from './index.css'
import { ColorType } from '../../styles'

export interface SelectProps {
  modelValue: any
  items?: Array<{ label: string; value: string; key?: string }>
  variant?: ColorType
  placeholder?: string
  label?: string
  labelPlaceholder?: string
  multiple?: boolean
}

export interface Emits {
  (e: 'update:modelValue', value: boolean | string[]): void
}

const props = defineProps<SelectProps>()
const emits = defineEmits<Emits>()

const model = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value)
  },
})

const selectedLabel = computed(() => {
  if (!props.modelValue || (Array.isArray(props.modelValue) && !props.modelValue.length)) return null
  return Array.isArray(props.modelValue)
    ? props.modelValue.map((item) => item.label).join(', ')
    : props.modelValue.label
})
</script>
