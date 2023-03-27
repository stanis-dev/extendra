<script setup lang="ts">
import { BodySection } from '../../types/contentTypes'

defineProps({
  section: {
    type: Array as PropType<BodySection>,
    required: true
  }
})
</script>

<template>
  <div class="section mb-16">
    <ContentComponent
      v-for="component in section"
      :key="component.type"
      :content="component"
    />
  </div>
</template>
