import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Checkbox from '../ui.vue'

//**TODO: add tests for multiple checkboxes */

describe('Checkbox', () => {
  it('modelValue should be updated', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: false,
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
      },
    })

    expect(wrapper.props().modelValue).toEqual(false)
    await wrapper.find('input[type="checkbox"]').setValue(true)

    expect(wrapper.props().modelValue).toEqual(true)
  })

  it('modelValue should not be updated when disabled', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: false,
        disabled: true,
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
      },
    })

    expect(wrapper.props().modelValue).toEqual(false)
    await wrapper.find('input[type="checkbox"]').setValue(true)

    expect(wrapper.props().modelValue).toEqual(false)
  })

  it('is variant primary', () => {
    const wrapper = mount(Checkbox)

    expect(wrapper.html()).toContain('variant_primary')
  })

  it('is variant secondary', () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: false,
        variant: 'secondary',
      },
    })

    expect(wrapper.html()).toContain('variant_secondary')
  })

})
