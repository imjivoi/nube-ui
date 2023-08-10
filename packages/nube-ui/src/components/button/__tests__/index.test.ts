import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Button from '../ui.vue'
import {button as classes} from '../styles'
import Loading from '../../loading/ui.vue'

//**TODO: add test ripple */

describe('Button', () => {
  it('render default props', () => {
    const wrapper = mount(Button)
    
    expect(wrapper.classes().join(' ')).toContain(classes().root())
  })

  it('contain text', () => {
    const text = 'Button text'

    const wrapper = mount(Button, {
      slots: {
        default: text,
      },
    })

    expect(wrapper.html()).toContain(text)
  })

  it('render Loading component', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true,
      },
    })

    expect(wrapper.findComponent(Loading).exists()).toBeTruthy()
  })

  it('is success variant', () => {
    const wrapper = mount(Button, {
      props: {
        variant: 'success',
      },
    })

    expect(wrapper.html()).toContain('variant_success')
  })

  it('is large size', () => {
    const wrapper = mount(Button, {
      props: {
        size: 'lg',
      },
    })

    expect(wrapper.html()).toContain('size_lg')
  })

  it('is flat type', () => {
    const wrapper = mount(Button, {
      props: {
        flat: true,
      },
    })

    expect(wrapper.html()).toContain('flat_true')
  })

  it('is plain type', () => {
    const wrapper = mount(Button, {
      props: {
        plain: true,
      },
    })

    expect(wrapper.html()).toContain('plain_true')
  })

  it('is outline type', () => {
    const wrapper = mount(Button, {
      props: {
        outline: true,
      },
    })

    expect(wrapper.html()).toContain('outline_true')
  })

  it('is pill border', () => {
    const wrapper = mount(Button, {
      props: {
        pill: true,
      },
    })

    expect(wrapper.html()).toContain('pill_true')
  })

  it('is square border', () => {
    const wrapper = mount(Button, {
      props: {
        square: true,
      },
    })

    expect(wrapper.html()).toContain('square_true')
  })

  it('is circle border', () => {
    const wrapper = mount(Button, {
      props: {
        circle: true,
      },
    })

    expect(wrapper.html()).toContain('circle_true')
  })

  it('is shadow', () => {
    const wrapper = mount(Button, {
      props: {
        shadow: true,
      },
    })

    expect(wrapper.html()).toContain('shadow_true')
  })

  it('is wide width', () => {
    const wrapper = mount(Button, {
      props: {
        wide: true,
      },
    })

    expect(wrapper.html()).toContain('wide_true')
  })

  it('is block width', () => {
    const wrapper = mount(Button, {
      props: {
        block: true,
      },
    })

    expect(wrapper.html()).toContain('block_true')
  })

  it('is disabled', () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true,
      },
    })

    expect(wrapper.html()).toContain('disabled_true')
    expect(Object.keys(wrapper.attributes())).toContain('disabled')
  })
})
