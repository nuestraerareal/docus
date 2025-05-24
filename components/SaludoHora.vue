<template>
  <p>{{ saludo }}</p>
</template>

<script setup lang="ts">
const hora = new Date().getHours()
const saludo =
  hora < 12 ? '¡Buenos días!' :
  hora < 19 ? '¡Buenas tardes!' :
  '¡Buenas noches!'
</script>
