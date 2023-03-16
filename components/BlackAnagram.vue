<script setup lang="ts">
defineProps({
  isActive: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <svg viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_3_920)">
      <path
        class="rotate transition-all"
        :style="{
          transform: `${isActive ? 'rotate(90deg)' : 'rotate(0deg)'}`
        }"
        d="M16.8045 23.9374V31.8743H8.86757C8.86757 27.4901 5.31395 23.9374 0.930664 23.9374V16.0005H8.86757C8.86757 20.3838 12.4212 23.9374 16.8045 23.9374Z"
        fill="#0F0F0F"
      />
      <path
        d="M8.86757 0.125732H0.930664V8.06263C5.31487 8.06263 8.86757 11.6163 8.86757 15.9995H16.8045V8.06263C12.4212 8.06263 8.86757 4.50902 8.86757 0.125732Z"
        fill="#0F0F0F"
      />
      <path
        d="M32.6892 8.06263V0.125732H24.7523C24.7523 4.50994 21.1987 8.06263 16.8154 8.06263V15.9995H24.7523C24.7523 11.6163 28.306 8.06263 32.6892 8.06263Z"
        fill="#0F0F0F"
      />
      <path
        d="M24.7523 31.8743H32.6892V23.9374C28.305 23.9374 24.7523 20.3838 24.7523 16.0005H16.8154V23.9374C21.1987 23.9374 24.7523 27.491 24.7523 31.8743Z"
        fill="#0F0F0F"
      />
    </g>
    <defs>
      <clipPath id="clip0_3_920">
        <rect
          width="31.9385"
          height="32"
          fill="white"
          transform="translate(0.84082)"
        />
      </clipPath>
    </defs>
  </svg>
</template>

<style>
.rotate {
  transform-box: fill-box;
  transform-origin: center;
  /* transform: rotate(90deg); */
}
</style>
