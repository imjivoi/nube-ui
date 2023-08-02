import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Alert from '../ui.vue'

describe('Alert', () => {
  it('render default props', () => {
    const wrapper = mount(Alert)

    expect(wrapper.html()).toContain('alert_base')
    expect(wrapper.html()).toContain('variant_primary')
  })

  it('is variant secondary', () => {
    const wrapper = mount(Alert, {
      props: {
        variant: 'secondary',
      },
    })

    expect(wrapper.html()).toContain('variant_secondary')
  })

  it('render text', () => {
    const text = 'Alert text'
    const wrapper = mount(Alert, {
      slots: {
        default: text,
      },
    })

    expect(wrapper.html()).toContain(text)
  })

  it('has shadow', () => {
    const wrapper = mount(Alert, {
      props: {
        shadow: true,
      },
    })

    expect(wrapper.html()).toContain('shadow_true')
  })

  it('is flat', () => {
    const wrapper = mount(Alert, {
      props: {
        flat: true,
      },
    })

    expect(wrapper.html()).toContain('flat_true')
  })

  it('is rounded', () => {
    const wrapper = mount(Alert, {
      props: {
        rounded: true,
      },
    })

    expect(wrapper.html()).toContain('rounded_true')
  })
})
