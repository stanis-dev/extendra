<script setup lang="ts">
const isActive = ref(false)
</script>

<template>
  <div
    @click="isActive = !isActive"
    data-cursor="hover"
    :class="`w-[72px] h-[72px] flex justify-center items-center rounded-full bg-cream-80 fixed bottom-6 left-1/2 -translate-x-1/2 z-50 
             shadow-[0px_0px_20px_rgba(0,0,0,0.07)] backdrop:blur-[8px] border-opacity-10 border-[0.1px] border-gray-dark-10 `"
  >
    <div
      :class="`btn-wrapper absolute -top-[430px] tablet:-top-24 w-[396px] h-[410px] tablet:w-[500px] tablet:h-[151px] ${
        isActive ? '' : ''
      }`"
    >
      <div
        :class="`rounded-2xl tablet:bg-transparent relative w-full h-full ${
          isActive ? 'bg-cream-80' : 'bg-transparent'
        }`"
      >
        <AppButton
          :class="`!w-[380px] tablet:!w-[151px] absolute transition-all  ${
            isActive
              ? 'left-2 tablet:left-0 top-2 tablet:top-0'
              : 'top-[100%] tablet:top-24 left-1/2 -translate-x-1/2 opacity-0 pointer-events-none'
          }`"
          label="Proyectos"
          variant="white"
          href="/proyectos"
        />
        <AppButton
          :class="`!w-[380px] tablet:!w-[151px] absolute left-1/2 -translate-x-1/2 transition-all ${
            isActive
              ? 'top-[90px] tablet:top-0'
              : 'top-full tablet:top-24 opacity-0 pointer-events-none'
          }`"
          label="Sectores"
          variant="white"
          href="/sectores"
        />
        <AppButton
          :class="`!w-[380px] tablet:!w-[151px] absolute transition-all ${
            isActive
              ? 'right-2 tablet:right-0 top-[172px] tablet:top-0'
              : 'top-full tablet:top-24 right-2 tablet:right-1/2 tablet:translate-x-1/2 opacity-0 pointer-events-none'
          }`"
          label="Usos"
          variant="white"
          href="/usos"
        />
        <AppButton
          :class="`!w-[380px] tablet:!w-[151px] absolute transition-all ${
            isActive
              ? 'bottom-[90px] tablet:bottom-0 left-2 tablet:left-10'
              : '-bottom-[80px] tablet:-bottom-2 left-2 tablet:left-1/2 tablet:-translate-x-1/2 opacity-0 pointer-events-none'
          }`"
          label="Nosotros"
          variant="white"
          href="/nosotros"
        />
        <AppButton
          :class="`!w-[380px] tablet:!w-[151px] absolute transition-all ${
            isActive
              ? 'bottom-2 tablet:bottom-0 right-2 tablet:right-10'
              : '-bottom-[80px] tablet:-bottom-2 right-2 tablet:right-1/2 tablet:translate-x-1/2 opacity-0 pointer-events-none'
          }`"
          label="Contacto"
          variant="black"
          href="/contacto"
        />
      </div>
    </div>
    <BlackAnagram class="h-8 w-8" :is-active="isActive" />
  </div>
</template>
