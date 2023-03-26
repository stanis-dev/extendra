<script setup lang="ts">
import icons from './icons'

type ButtonTypeSizes = 'low' | 'normal' | 'wide' | 'narrow'

const props = defineProps({
  size: {
    type: String as PropType<ButtonTypeSizes>,
    default: 'normal'
  },
  label: {
    type: String,
    required: false
  },
  icon: {
    type: String as PropType<keyof typeof icons>,
    required: false
  },
  variant: {
    type: String as PropType<'white' | 'black'>,
    default: 'white'
  },
  tag: {
    type: String as PropType<'a' | 'button'>,
    default: 'a'
  },
  href: {
    type: String,
    required: false
  }
})

const gradientRef = ref<HTMLElement | null>(null)
const btnRef = ref<HTMLElement | null>(null)

const { elementX, elementY, isOutside } = useMouseInElement(btnRef)

const handleMouseOver = () => {
  if (isOutside.value) {
    return
  }

  const btn = gradientRef.value
  if (!btn) {
    return
  }

  btn.style.setProperty('--pointer-x', `${elementX.value}px`)
  btn.style.setProperty('--pointer-y', `${elementY.value}px`)
}

const buttonSize = () => {
  switch (props.size) {
    case 'low':
      return 'px-[59px] h-[48px]'
    case 'wide':
      return 'px-[166px] h-[66px]'
    case 'narrow':
      return 'px-8 h-[66px]'
    default:
      return 'px-[52px] h-[66px]'
  }
}

const buttonColor = () => {
  const btn = gradientRef.value
  if (!btn) {
    return
  }

  switch (props.variant) {
    case 'white':
      btn.style.setProperty('--gradient-start', 'rgba(190, 190, 190, 0.74)')
      return 'bg-white text-black'
    default:
      btn.style.setProperty('--gradient-start', 'rgba(247, 247, 248, 0.2)')
      return 'bg-black text-cream'
  }
}
</script>

<template>
  <component
    :is="tag"
    ref="btnRef"
    :class="`group inline-flex gap-[10px] select-none appearance-none items-center justify-center overflow-hidden outline-none transition duration-300 ease-out will-change-transform text-btn rounded-2xl ${buttonSize()} ${buttonColor()}`"
    @mousemove="handleMouseOver"
    data-cursor="hover"
  >
    <div
      ref="gradientRef"
      class="gradient pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-150 ease-out group-hover:opacity-100 rounded-full"
    />
    <span v-if="label" class="relative z-10">
      {{ label }}
    </span>
    <span v-if="icon" class="h-6 w-[22px] z-10">
      <AppIcon :name="icon" />
    </span>
  </component>
</template>

<style scoped>
.gradient {
  --pointer-x: 0px;
  --pointer-y: 0px;
  --gradient-end: rgba(247, 247, 248, 0);
  top: -100px;
  left: -100px;
  width: 200px;
  height: 200px;
  transform: translateX(var(--pointer-x)) translateY(var(--pointer-y));
  background-image: radial-gradient(
    80px,
    var(--gradient-start),
    var(--gradient-end)
  );
}
</style>
