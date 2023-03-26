<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate'

defineProps({
  label: {
    type: String,
    required: false
  },
  required: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    required: false
  }
})

const fileName = ref<string>('')
</script>

<template>
  <label :for="`fileUpload:${name}`" class="w-full block">
    <div
      v-if="label"
      class="text-gray-dark-40 border-b border-black focus:border-gray-dark-40 focus:outline-none h-[55px] flex flex-col justify-around"
    >
      <span class="text-caption mr-2"
        >{{ label }} <span v-if="required" class="text-blue">*</span></span
      >

      <div class="text-body2 flex justify-between items-center">
        {{ fileName || placeholder }}
        <AppButton
          type="button"
          tag="button"
          class="h-7 w-[95px] !text-btn2 rounded-lg pointer-events-none"
          label="Buscar"
        />
      </div>
    </div>
    <Field
      class="hidden"
      type="file"
      :disabled="disabled"
      :name="name"
      :id="`fileUpload:${name}`"
      @input="e => (fileName = e.target.files[0].name)"
    />

    <span class="text-caption text-blue mt-2 h-[14px] block">
      <ErrorMessage :name="name" />
    </span>
  </label>
</template>
