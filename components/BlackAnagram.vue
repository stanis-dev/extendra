<script setup lang="ts">
defineProps({
  isActive: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path
      class="rotate transition-all"
      :style="{
        transform: `${isActive ? 'rotate(90deg)' : 'rotate(0deg)'}`
      }"
      d="m8,16H0v8c4.4183,0,8,3.5815,8,8h7.9999v-8c-4.4182,0-7.9999-3.5817-7.9999-8Z"
    />
    <path
      d="m24,15.9999c0-4.4185,3.5817-7.9999,8-7.9999V0h-8c0,4.4182-3.5817,8-7.9999,8h-.0001C11.5817,8,8,4.4182,8,0H0V8c4.4183,0,8,3.5815,8,7.9999h7.9999v5.1089h.0001v2.8911c4.4183,0,7.9999,3.5815,7.9999,8h8v-8c-4.4182,0-8-3.5817-8-8h0s0,0,0,0Z"
    />
  </svg>
</template>

<style>
.rotate {
  transform-box: fill-box;
  transform-origin: center;
}
</style>
