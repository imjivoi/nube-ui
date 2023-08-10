const handleRipple = (element: HTMLElement, binding: any, ev: any) => {
  // if (element.children.length > 5) return
  // const rippleElement = document.createElement('span')
  // rippleElement.classList.add('ripple')

  // let currentDiameter = 1
  // let currentOpacity = 0.4
  // let animationHandler = setInterval(animateRippleSpread, 10)
  // let maximalDiameter = 50
  // applyRippleStyle()

  // function applyRippleStyle() {
  //   const elementCoordinates = element.getBoundingClientRect()
  //   maximalDiameter = elementCoordinates.width / 2

  //   const offsetY = ev.clientY - elementCoordinates.y
  //   const offsetX = ev.clientX - elementCoordinates.x
  //   rippleElement.style.position = 'absolute'
  //   rippleElement.style.height = '5px'
  //   rippleElement.style.width = '5px'
  //   rippleElement.style.borderRadius = '100%'
  //   rippleElement.style.background = binding.value?.background || '#f2f2f291'
  //   rippleElement.style.zIndex = '0'
  //   rippleElement.style.left = `${offsetX}px`
  //   rippleElement.style.top = `${offsetY}px`
  //   element.appendChild(rippleElement)
  // }

  // function animateRippleSpread() {
  //   // const maximalDiameter = +binding.value?.diameter || 50
  //   if (currentDiameter <= maximalDiameter) {
  //     currentDiameter++
  //     currentOpacity -= 0.5 / maximalDiameter
  //     rippleElement.style.transform = `scale(${currentDiameter})`
  //     rippleElement.style.opacity = `${currentOpacity}`
  //   } else {
  //     rippleElement.remove()
  //     clearInterval(animationHandler)
  //   }
  // }

  const target = element
  // Get border to avoid offsetting on ripple container position
  let targetBorder = parseInt(getComputedStyle(target).borderWidth.replace('px', ''))

  // Get necessary variables
  let rect = target.getBoundingClientRect(),
    left = rect.left,
    top = rect.top,
    width = target.offsetWidth,
    height = target.offsetHeight,
    dx = ev.clientX - left,
    dy = ev.clientY - top,
    maxX = Math.max(dx, width - dx),
    maxY = Math.max(dy, height - dy),
    style = window.getComputedStyle(target),
    radius = Math.sqrt(maxX * maxX + maxY * maxY),
    border = targetBorder > 0 ? targetBorder : 0

  // Create the ripple and its container
  let ripple = document.createElement('div'),
    rippleContainer = document.createElement('div')
  rippleContainer.className = 'ripple-container'
  ripple.className = 'ripple'

  //Styles for ripple
  ripple.style.marginTop = '0px'
  ripple.style.marginLeft = '0px'
  ripple.style.width = '1px'
  ripple.style.height = '1px'
  ripple.style.transition = 'all ' + 250 + 'ms cubic-bezier(0.4, 0, 0.2, 1)'
  ripple.style.borderRadius = '50%'
  ripple.style.pointerEvents = 'none'
  ripple.style.position = 'relative'
  ripple.style.zIndex = '0'
  ripple.className = binding.value?.background || 'bg-black/30'

  //Styles for rippleContainer
  rippleContainer.style.position = 'absolute'
  rippleContainer.style.left = 0 - border + 'px'
  rippleContainer.style.top = 0 - border + 'px'
  rippleContainer.style.height = '0'
  rippleContainer.style.width = '0'
  rippleContainer.style.pointerEvents = 'none'
  rippleContainer.style.overflow = 'hidden'

  // Store target position to change it after
  var storedTargetPosition =
    target.style.position.length > 0 ? target.style.position : getComputedStyle(target).position
  // Change target position to relative to guarantee ripples correct positioning
  if (storedTargetPosition !== 'relative') {
    target.style.position = 'relative'
  }

  rippleContainer.appendChild(ripple)
  target.appendChild(rippleContainer)

  ripple.style.marginLeft = dx + 'px'
  ripple.style.marginTop = dy + 'px'

  // No need to set positioning because ripple should be child of target and to it's relative position.
  // rippleContainer.style.left    = left + (((window.pageXOffset || document.scrollLeft) - (document.clientLeft || 0)) || 0) + "px";
  // rippleContainer.style.top     = top + (((window.pageYOffset || document.scrollTop) - (document.clientTop || 0)) || 0) + "px";
  rippleContainer.style.width = width + 'px'
  rippleContainer.style.height = height + 'px'
  rippleContainer.style.borderTopLeftRadius = style.borderTopLeftRadius
  rippleContainer.style.borderTopRightRadius = style.borderTopRightRadius
  rippleContainer.style.borderBottomLeftRadius = style.borderBottomLeftRadius
  rippleContainer.style.borderBottomRightRadius = style.borderBottomRightRadius

  rippleContainer.style.direction = 'ltr'

  setTimeout(function () {
    ripple.style.width = radius * 2 + 'px'
    ripple.style.height = radius * 2 + 'px'
    ripple.style.marginLeft = dx - radius + 'px'
    ripple.style.marginTop = dy - radius + 'px'
  }, 0)

  function clearRipple() {
    setTimeout(function () {
      ripple.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    }, 250)

    // Timeout set to get a smooth removal of the ripple
    setTimeout(function () {
      rippleContainer?.parentNode?.removeChild(rippleContainer)
    }, 850)

    element.removeEventListener('mousedown', clearRipple, false)
    element.removeEventListener('mouseout', clearRipple, false)

    // After removing event set position to target to it's original one
    // Timeout it's needed to avoid jerky effect of ripple jumping out parent target
    setTimeout(function () {
      var clearPosition = true
      for (var i = 0; i < target.childNodes.length; i++) {
        if (target.children[i]?.className === 'ripple-container') {
          clearPosition = false
        }
      }

      if (clearPosition) {
        if (storedTargetPosition !== 'static') {
          target.style.position = storedTargetPosition
        } else {
          target.style.position = ''
        }
      }
    }, 750)
  }

  if (ev.type === 'mousedown') {
    element.addEventListener('mouseup', clearRipple, false)
    element.addEventListener('mouseout', clearRipple, false)
  } else {
    clearRipple()
  }
}

const vRipple = {
  mounted: (el: any, binding: any) => {
    if (binding.value === false) return
    el.style.position = 'relative'
    el.style.overflow = 'hidden'
    el.addEventListener('mousedown', (ev: any) => handleRipple(el, binding, ev))
  },
}

export { vRipple }
