<script setup lang="ts">
import icons from './icons'

defineProps<{
  name: keyof typeof icons
}>()
</script>

<template>
  <component :is="icons[name]" />
</template>
