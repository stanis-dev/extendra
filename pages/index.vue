<script setup lang="ts">
definePageMeta({
  layout: 'no-footer'
})
</script>

<template>
  <div
    class="h-screen w-screen p-10 pb-24 bg-black flex flex-col justify-center relative"
  >
    <WhiteLogo
      class="w-[25vw] min-w-[400px] absolute top-1/2 left-1/2 -translate-x-1/2"
    />
    <div class="text-cream text-body flex w-full justify-between mt-auto">
      <p class="max-w-[220px] laptop:max-w-[240px] desktop:max-w-[250px]">
        Virtual realities, wide possibilities.
      </p>
      <div>
        <p><span class="text-3xl">&#x2022;</span> 00.00.00</p>
        <p>v0.1</p>
      </div>
    </div>
  </div>
</template>
