<script setup lang="ts"></script>

<template>
  <div class="pt-[45px] tablet:pt-0 laptop:flex gap-[230px] items-center">
    <div class="left-side w-full max-w-[746px] mx-auto laptop:mx-0">
      <AppSelector class="w-full max-w-[422px] mb-14" />
      <h2 class="text-h2 mb-14">Tenemos el metaverso que buscas. Hablemos.</h2>

      <ContactProjectForm />
    </div>
    <div class="right-side hidden laptop:block w-full max-w-[620px]">
      <BlackAnagram class="w-full" />
    </div>
  </div>
</template>
