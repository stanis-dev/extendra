<script setup lang="ts">
import { UseMouseOptions } from '@vueuse/core'

const { x, y } = useMouse({
  type: 'client'
} as UseMouseOptions)

const isMouseDown = ref(false)

const cursorColor = computed(() => {
  const el = document
    .elementsFromPoint(x.value, y.value)
    .find(el => el.hasAttribute('data-cursor-color'))
  return el ? el.getAttribute('data-cursor-color') : 'black'
})

const showCircle = computed(
  () =>
    !document
      .elementsFromPoint(x.value, y.value)
      .some(
        el =>
          !!el.getAttribute('data-cursor') ||
          el.tagName === 'A' ||
          el.tagName === 'BUTTON'
      ) && !isMouseDown.value
)

const showDrag = computed(
  () =>
    document
      .elementsFromPoint(x.value, y.value)
      .some(el => el.getAttribute('data-cursor') === 'drag') &&
    !isMouseDown.value
)

document.onmousedown = () => {
  isMouseDown.value = true
}

document.onmouseup = () => {
  isMouseDown.value = false
}
</script>

<template>
  <div class="cursor block">
    <div class="cursor-pointer-wrapper">
      <div
        class="cursor-pointer"
        :style="{
          transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
        }"
      ></div>
    </div>
    <div class="cursor-trackerWrapper">
      <div
        :class="`cursor-tracker ${showCircle ? 'cursor-tracker--active' : ''}`"
        :style="{
          transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
        }"
      ></div>
      <div
        :class="`cursor-drag ${showDrag ? 'cursor-drag--active' : ''}`"
        :style="{
          transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
        }"
      >
        <svg width="48" height="10" viewBox="0 0 48 10" fill="none">
          <path
            d="M0.578125 5.125L8.82813 0.36186L8.82813 9.88814L0.578125 5.125Z"
            fill="#0F0F0F"
          />
          <path
            d="M47.8281 5.125L39.5781 9.88814L39.5781 0.36186L47.8281 5.125Z"
            fill="#0F0F0F"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style>
.cursor {
  left: 0;
  top: 0;
  position: fixed;
  pointer-events: none;
  opacity: 1;
  z-index: 9999;
  transition: 0.5s all ease;
  color: v-bind(cursorColor);
}

.cursor-pointer {
  width: 11px;
  height: 11px;
  transform-origin: center center;
  background-color: v-bind(cursorColor);
  border-radius: 10rem;
  position: absolute;
  z-index: 2;
  display: block;
  opacity: 1;
}

.cursor-tracker {
  width: 11px;
  height: 11px;
  opacity: 0;
  transform-origin: center center;
  border: 2px solid;
  border-color: currentColor;
  border-radius: 10rem;
  position: absolute;
  z-index: 2;
  transition: width 0.25s ease-in-out, height 0.2s ease-in-out,
    opacity 0.3s ease-in-out;
}

.cursor-drag {
  width: 11px;
  height: 11px;
  opacity: 0;
  transform-origin: center center;
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 0.25s ease-in-out, height 0.2s ease-in-out,
    opacity 0.3s ease-in-out;
}

.cursor-tracker--active {
  width: 48px;
  height: 48px;
  opacity: 1;
}

.cursor-drag--active {
  width: 48px;
  height: 48px;
  opacity: 1;
}
</style>
