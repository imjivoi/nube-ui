<template>
  <div style="display: grid; gap: 1.5rem">
    <div style="display: flex; gap: 1rem">
      <!-- <n-button>p-button</n-button> -->
      <n-switch v-model="checked"/>
    </div>
    
  </div>
</template>
<script lang="ts" setup>
import { NSwitch } from '@nube-ui/vue'

const checked= ref(false)
</script>
