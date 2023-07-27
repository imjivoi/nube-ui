# Nube UI vue components library

## Install

1. Add `nube-ui/nube-ui` dependency to your project

```bash
# Using pnpm
pnpm add nube-ui/nube-ui

# Using yarn
yarn add nube-ui/nube-ui

# Using npm
npm install nube-ui/nube-ui
```

2. Import to main.js

```js
import { createApp } from 'vue'
import NubeUI from 'nube-ui/nube-ui'

import 'nube-ui/index.css'
// Import default theme or create ypur proper
import 'nube-ui/theme/default.css'

import App from './app.vue'

createApp(App).use(NubeUI)


// Using in .vue file

<template>
  <div :class="css({ display: 'flex' })">
    <n-button>Button</n-button>
  </div>
</template>
<script setup>
import { css } from 'nube-ui'

</script>
```
