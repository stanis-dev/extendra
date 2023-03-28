<script setup lang="ts">
const isActive = ref(false)

const menuItems = [
  { label: 'Proyectos', href: 'projects', disabled: false },
  { label: 'Sectores', href: 'sectores', disabled: true },
  { label: 'Usos', href: 'usos', disabled: true },
  { label: 'Nosotros', href: 'nostos', disabled: true },
  { label: 'Contacto', href: 'contact', disabled: false }
]

const router = useRouter()

const handleRouteChange = (route: string) => {
  isActive.value = false
  router.push({ name: route })
}
</script>

<template>
  <div
    @click.capture="isActive = !isActive"
    data-cursor="hover"
    :class="`w-[72px] h-[72px] flex justify-center items-center rounded-full bg-white fixed bottom-6 left-1/2 -translate-x-1/2 z-50 
             shadow-[0px_0px_20px_rgba(0,0,0,0.07)] backdrop:blur-[8px] border-opacity-10 border-[0.1px] border-gray-dark-10 `"
  >
    <div
      :class="`btn-wrapper absolute -top-[430px] tablet:-top-24 w-[396px] h-[410px] tablet:w-[500px] tablet:h-[151px] ${
        isActive ? '' : 'pointer-events-none'
      }`"
    >
      <div
        :class="`rounded-2xl tablet:bg-transparent relative w-full h-full z-50 ${
          isActive ? 'bg-cream-80' : 'bg-transparent'
        }`"
      >
        <AppButton
          @click="handleRouteChange(menuItems[0].href)"
          :class="`!w-[380px] tablet:!w-[151px] absolute transition-all ${
            isActive
              ? 'left-2 tablet:left-0 top-2 tablet:top-0'
              : 'top-[100%] tablet:top-24 left-1/2 -translate-x-1/2 opacity-0 pointer-events-none'
          }`"
          :label="menuItems[0].label"
          variant="white"
          :disabled="menuItems[0].disabled"
        />
        <AppButton
          @click="handleRouteChange(menuItems[1].href)"
          :class="`!w-[380px] tablet:!w-[151px] absolute left-1/2 -translate-x-1/2 transition-all ${
            isActive
              ? 'top-[90px] tablet:top-0'
              : 'top-full tablet:top-24 opacity-0 pointer-events-none'
          }`"
          label="Sectores"
          variant="white"
          :disabled="menuItems[1].disabled"
        />
        <AppButton
          @click="handleRouteChange(menuItems[2].href)"
          :class="`!w-[380px] tablet:!w-[151px] absolute transition-all ${
            isActive
              ? 'right-2 tablet:right-0 top-[172px] tablet:top-0'
              : 'top-full tablet:top-24 right-2 tablet:right-1/2 tablet:translate-x-1/2 opacity-0 pointer-events-none'
          }`"
          label="Usos"
          variant="white"
          :disabled="menuItems[2].disabled"
        />
        <AppButton
          @click="handleRouteChange(menuItems[3].href)"
          :class="`!w-[380px] tablet:!w-[151px] absolute transition-all ${
            isActive
              ? 'bottom-[90px] tablet:bottom-0 left-2 tablet:left-10'
              : '-bottom-[80px] tablet:-bottom-2 left-2 tablet:left-1/2 tablet:-translate-x-1/2 opacity-0 pointer-events-none'
          }`"
          label="Nosotros"
          variant="white"
          :disabled="menuItems[3].disabled"
        />
        <AppButton
          @click="handleRouteChange(menuItems[4].href)"
          :class="`!w-[380px] tablet:!w-[151px] absolute transition-all ${
            isActive
              ? 'bottom-2 tablet:bottom-0 right-2 tablet:right-10'
              : '-bottom-[80px] tablet:-bottom-2 right-2 tablet:right-1/2 tablet:translate-x-1/2 opacity-0 pointer-events-none'
          }`"
          label="Contacto"
          variant="black"
          :disabled="menuItems[4].disabled"
        />
      </div>
    </div>
    <BlackAnagram class="h-8 w-8" :is-active="isActive" />
  </div>
</template>
