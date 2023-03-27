<script setup lang="ts">
defineProps({
  content: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h2 class="text-h2 mb-4 tablet:mb-6">{{ content }}</h2>
</template>
