<script setup lang="ts">
const menuItemsArr: Array<any> = [
  [
    'Directorio',
    [
      { url: '/', name: 'Proyectos', disabled: true },
      { url: '/', name: 'Sectores', disabled: true },
      { url: '/', name: 'Usos', disabled: true },
      { url: '/', name: 'Nosotros', disabled: true }
    ]
  ],
  [
    'General',
    [
      { url: '/', name: 'Blog', disabled: true },
      { url: '/', name: 'FAQ', disabled: true },
      { url: '/', name: 'Newsletter', disabled: true },
      { url: '/contact', name: 'Contacto', disabled: false }
    ]
  ],
  [
    'Social',
    [
      { url: '/', name: 'LinkedIn', disabled: true },
      { url: '/', name: 'Instagram', disabled: true },
      { url: '/', name: 'Twitter', disabled: true },
      { url: '/', name: 'Facebook', disabled: true },
      { url: '/', name: 'Vimeo', disabled: true }
    ]
  ],
  [
    'Legal',
    [
      { url: '/', name: 'Privacidad', disabled: true },
      { url: '/', name: 'Cookies', disabled: true },
      { url: '/legal', name: 'Aviso Legal', disabled: false }
    ]
  ]
]

const menuItems = new Map<string, Array<Record<string, any>>>(menuItemsArr)

const { locale, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <footer class="pt-12 bg-cream mt-auto tablet:px-6">
    <div class="laptop:flex justify-between">
      <BlackLogo class="mb-20 h-5 tablet:h-8" />
      <div
        class="grid grid-cols-2 tablet:grid-cols-4 gap-y-20 mb-[164px] laptop:max-w-[700px] laptop:gap-x-20"
      >
        <div
          v-for="menu in menuItems"
          class="link-block w-1/2 tablet:w-[unset]"
        >
          <p
            class="link-block-title font-semimono text-sm text-app-gray opacity-40 mb-10"
          >
            {{ menu[0] }}
          </p>
          <ul>
            <li
              data-cursor="hover"
              v-for="menuItem in menu[1]"
              :class="`mb-6 last:mb-0 tablet:mb-2 text-lg leading-6 ${
                menuItem.disabled
                  ? 'text-app-gray opacity-40 pointer-events-none'
                  : 'text-black'
              }`"
            >
              <NuxtLink :to="menuItem.url">{{ menuItem.name }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="tablet:flex flex-wrap justify-between items-end">
      <div
        class="font-semimono text-sm mb-6 tablet:mb-0 leading-[14px] tablet:order-2 laptop:flex gap-1"
      >
        <p>Ⓒ Extendra 2022.</p>
        <p>Todos los derechos reservados.</p>
      </div>
      <FooterBarSvg class="mb-6 mx-auto w-full tablet:order-1" />
      <div
        class="flex justify-between tablet:gap-[76px] font-semimono text-sm tablet:order-4"
      >
        <p>{{ $t('footer.designedByWaka') }}</p>
        <p class="flex items-center gap-1">
          <a @click.prevent.stop="setLocale('en')">EN</a>
          <span
            class="w-2 h-[2px] -mr-1 transition"
            :class="`${
              locale === 'en' ? 'bg-black' : 'bg-app-gray opacity-40'
            }`"
          />
          <span
            class="w-2 h-[2px] transition"
            :class="`${
              locale === 'es' ? 'bg-black' : 'bg-app-gray opacity-40'
            }`"
          />
          <a @click.prevent.stop="setLocale('es')">ES</a>
        </p>
      </div>
    </div>
  </footer>
</template>
