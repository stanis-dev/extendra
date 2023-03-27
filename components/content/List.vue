<script setup lang="ts">
import { ContentList } from '../../types/contentTypes'

defineProps({
  type: {
    type: String as PropType<'ul' | 'ol'>,
    required: true
  },
  content: {
    type: Array as PropType<ContentList['content']>,
    required: true
  }
})
</script>

<template>
  <component
    :is="type"
    :class="`list-outside ml-7 text-body ${
      type === 'ol' ? 'list-decimal' : ''
    }`"
  >
    <li v-for="(item, index) of content" :key="index" class="list-item">
      {{ item }}
    </li>
  </component>
</template>
