<script setup lang="ts">
const formSelected = ref<'project' | 'other'>('other')
const options = [
  { label: 'Tengo un proyecto', value: 'project' },
  { label: 'Otro', value: 'other' }
]
</script>

<template>
  <div class="pt-[45px] tablet:pt-0 laptop:flex gap-[230px] items-center">
    <div class="left-side w-full max-w-[746px] mx-auto laptop:mx-0">
      <AppSelector
        :options="options"
        @option-selected="e => (formSelected = e)"
        class="w-full max-w-[422px] mb-14"
      />

      <ContactProjectForm v-if="formSelected === 'project'" />
      <ContactOtherForm v-else />
    </div>
    <div class="right-side hidden laptop:block w-full max-w-[620px]">
      <BlackAnagram class="w-full" />
    </div>
  </div>
</template>
