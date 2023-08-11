<template>
  <Menu as="div" :class="classes.root()">
    <div>
      <MenuButton as="template" :disabled="disabled">
        <slot name="trigger">
          <NButton :variant="variant" :flat="flat" :plain="plain" :shadow="shadow">
            {{ label }}
            <Icon :class="classes.chevron()" icon="vaadin:chevron-down-small" />
          </NButton>
        </slot>
      </MenuButton>
    </div>
    <transition
      :enter-active-class="classes['transition-enter-active']()"
      :enter-from-class="classes['transition-enter-from']()"
      :enter-to-class="classes['transition-enter-to']()"
      :leave-active-class="classes['transition-leave-active']()"
      :leave-from-class="classes['transition-leave-from']()"
      :leave-to-class="classes['transition-leave-to']()"
    >
      <MenuItems :class="[classes.menu()]">
        <slot>
          <NDropdownItem
            :variant="variant"
            :flat="flat"
            :plain="plain"
            :shadow="shadow"
            v-for="(item, idx) in items"
            :key="item.key || idx"
            @click="item.onClick"
          >
            {{ item.label }}
          </NDropdownItem>
        </slot>
      </MenuItems>
    </transition>
  </Menu>
</template>
<script lang="ts">
export default {
  name: `NDropdown`,
}
</script>
<script lang="ts" setup>
import { computed } from 'vue'

import { Menu, MenuButton, MenuItems } from '@headlessui/vue'
import { Icon } from '@iconify/vue'

import { NButton } from '../button'
import { NDropdownItem } from './'

import { ColorVariantType } from '../../styles'

import { dropdown } from './styles'

export interface DropdownProps {
  variant?: ColorVariantType
  flat?: boolean
  plain?: boolean
  shadow?: boolean
  label?: string
  items?: Array<{ label: string; value: string; onClick: () => void; key?: string }>
  disabled?: boolean
}

const props = withDefaults(defineProps<DropdownProps>(), {
  variant: `primary`,
  flat: false,
  plain: false,
  shadow: false,
})

const classes = computed(() => dropdown(props))
</script>
