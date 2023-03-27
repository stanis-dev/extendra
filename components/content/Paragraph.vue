<script setup lang="ts">
const props = defineProps({
  content: {
    type: String,
    required: true
  }
})

const render = () => {
  return h('p', {
    class: 'paragraph text-body mb-[40px]',
    innerHTML: props.content
  })
}
</script>

<template>
  <render />
</template>

<style lang="scss" scoped>
.paragraph {
  .link {
    color: rgb(65 52 243) !important;
    @apply text-blue;
  }
}
</style>
