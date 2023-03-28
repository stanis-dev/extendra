<script setup lang="ts">
import { ContentTypes } from '../../types/contentTypes'

defineProps({
  content: {
    type: Object as PropType<ContentTypes>,
    required: true
  }
})

const typeToComponent = (type: ContentTypes['type']) => {
  switch (type) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
      return resolveComponent('content/TitleH')
    case 'paragraph':
      return resolveComponent('content/Paragraph')
    case 'ul':
    case 'ol':
      return resolveComponent('content/List')
  }
}
</script>

<template>
  <component
    :is="typeToComponent(content.type)"
    :type="content.type"
    :content="content.content"
  />
</template>

<style scoped></style>
