<template>
  <div>
    <h1>{{ greeting }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    greeting(): string {
      const hour = new Date().getHours()
      if (hour < 12) return 'Buenos días.'
      if (hour < 18) return 'Buenas tardes.'
      return 'Buenas noches.'
    }
  }
})
</script>
