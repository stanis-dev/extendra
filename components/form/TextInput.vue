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
  type: {
    type: String as PropType<'text' | 'email' | 'tel'>,
    default: 'text'
  },
  name: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <label class="w-full">
    <span v-if="label" class="text-caption text-gray-dark-40">
      {{ label }} <span v-if="required" class="text-blue">*</span>
    </span>
    <Field
      class="text-body2 py-2 bg-transparent border-b border-gray-dark-20 focus:border-gray-dark-40 focus:outline-none w-full disabled:text-gray-mid"
      :type="type"
      :disabled="disabled"
      :name="name"
    />

    <span class="text-caption text-blue mt-2 h-[14px] block">
      <ErrorMessage :name="name" />
    </span>
  </label>
</template>
