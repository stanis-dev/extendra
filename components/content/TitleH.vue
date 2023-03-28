<script setup lang="ts">
const props = defineProps({
  type: {
    type: String as PropType<'h1' | 'h2' | 'h3' | 'h4' | 'h5'>,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})

const render = () => {
  return h(
    props.type,
    {
      class: `text-${props.type} mb-4 tablet:mb-6`
    },
    props.content
  )
}
</script>

<template>
  <render />
</template>
