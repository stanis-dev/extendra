<script setup lang="ts">
defineProps({
  type: {
    type: String as PropType<'two-lines' | 'inside' | 'outside'>,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})

const banner = ref<HTMLElement | null>(null)

onMounted(() => {
  if (banner.value) {
    banner.value.style.opacity = '1'
    banner.value.style.left = `-${banner.value.getBoundingClientRect().left}px`
  }

  window.onresize = () => {
    if (banner.value) {
      banner.value.style.left = '0'
      banner.value.style.left = `-${
        banner.value.getBoundingClientRect().left
      }px`
    }
  }
})
</script>

<template>
  <div class="wrapper relative">
    <div
      data-cursor-color="white"
      ref="banner"
      class="bg-black absolute left-0 opacity-0 transition max-w-screen w-screen h-full p-4 laptop:relative pb-[85px] laptop:p-0 flex flex-col items-center laptop:justify-center"
    >
      <div
        class="svg-container mb-24 w-full flex justify-between laptop:absolute laptop:top-1/2 laptop:-translate-y-1/2 laptop:left-0 laptop:px-12"
      >
        <template v-if="type === 'two-lines'">
          <svg viewBox="0 0 16 32">
            <path
              d="m0,24c4.4184,0,8,3.5815,8,8h8v-8c-4.4182,0-8-3.5818-8-8H0v8Z"
            ></path>
            <path
              d="m0,8c4.4184,0,8,3.5815,8,8h8v-8C11.5818,8,8,4.4182,8,0H0v8Z"
            ></path>
          </svg>
          <svg viewBox="0 0 16 32">
            <path
              d="m16,8V0h-8C8,4.4183,4.4185,8,0,8v7.9999H0v8.0001c4.4183,0,8,3.5815,8,8h8v-8c-4.4183,0-8-3.5817-8-8h0c0-4.4183,3.5817-8,8-8Z"
            />
          </svg>
        </template>
        <template v-if="type === 'inside'">
          <svg viewBox="0 0 16 32">
            <path
              d="m8,0H0V8c4.4184,0,8,3.5815,8,7.9999h0C8,20.4184,4.4185,24,0,24v8H8c0-4.4182,3.5818-8,8-8v-8h0V8C11.5818,8,8,4.4182,8,0Z"
            />
          </svg>
          <svg viewBox="0 0 16 32">
            <path
              d="m16,8V0h-8C8,4.4183,4.4185,8,0,8v7.9999H0v8.0001c4.4183,0,8,3.5815,8,8h8v-8c-4.4183,0-8-3.5817-8-8h0c0-4.4183,3.5817-8,8-8Z"
            />
          </svg>
        </template>
        <template v-if="type === 'outside'">
          <svg class="rotate-180" viewBox="0 0 16 32">
            <path
              d="m8,0H0V8c4.4184,0,8,3.5815,8,7.9999h0C8,20.4184,4.4185,24,0,24v8H8c0-4.4182,3.5818-8,8-8v-8h0V8C11.5818,8,8,4.4182,8,0Z"
            />
          </svg>
          <svg viewBox="0 0 16 32">
            <path
              d="m8,0H0V8c4.4184,0,8,3.5815,8,7.9999h0C8,20.4184,4.4185,24,0,24v8H8c0-4.4182,3.5818-8,8-8v-8h0V8C11.5818,8,8,4.4182,8,0Z"
            />
          </svg>
        </template>
      </div>
      <h3 class="text-h1 text-cream text-center mb-10 max-w-[616px]">
        {{ text }}
      </h3>
      <AppButton
        tag="a"
        @click="$router.push({ name: 'contact' })"
        class="mt-4 text-black w-[230px] px-6"
        label="Tengo un proyecto"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  @apply h-[563px] tablet:h-[804px] laptop:h-[648px];

  // width: 100vw;
  // margin-left: 50%;
  // transform: translateX(-50%);
  // max-width: 100%;
  .svg-container {
    svg {
      @apply w-auto h-40 tablet:h-[360px] laptop:h-[568px] fill-cream;
    }
  }
}
</style>
