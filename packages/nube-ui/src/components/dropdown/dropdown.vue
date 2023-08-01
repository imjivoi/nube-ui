<template>
  <Menu as="div" :class="styles.base">
    <div>
      <MenuButton as="template" :disabled="disabled">
        <slot name="trigger">
          <NButton :variant="variant" :flat="flat" :plain="plain" :shadow="shadow">
            {{ label }}
            <Icon :class="styles.chevron" icon="vaadin:chevron-down-small" />
          </NButton>
        </slot>
      </MenuButton>
    </div>
    <transition :name="styles.animationClass">
      <MenuItems :class="[styles.menu()]">
        <slot>
          <NDropdownItem
            :variant="variant"
            :flat="flat"
            :plain="plain"
            :shadow="shadow"
            v-for="(item, idx) in items"
            :key="item.key || idx"
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
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'
import { Icon } from '@iconify/vue'

import { NButton } from '../button'
import { NDropdownItem } from './'

import { ColorVariantType } from '../../styles'
import * as styles from './index.css'

export interface DropdownProps {
  variant?: ColorVariantType
  flat?: boolean
  plain?: boolean
  shadow?: boolean
  label?: string
  items?: Array<{ label: string; value: string; action: () => void; key?: string }>
  disabled?: boolean
}

const props = withDefaults(defineProps<DropdownProps>(), {
  variant: `primary`,
  flat: false,
  plain: false,
  shadow: false,
})
</script>
