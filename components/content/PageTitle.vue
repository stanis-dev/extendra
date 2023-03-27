<script setup lang="ts">
defineProps({
  content: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h1 class="text-txt mt-[150px] mb-[111px]">{{ content }}</h1>
</template>
