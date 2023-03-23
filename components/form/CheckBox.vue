<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate'

defineProps({
  label: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  value: {
    type: String,
    default: false
  }
})
</script>

<template>
  <label data-cursor="hover" class="checkbox w-full">
    <Field
      class="checkbox_input p-0 h-[initial]] w-[initial] mb-0 hidden"
      type="checkbox"
      :disabled="disabled"
      :name="name"
      :value="value"
      :checked-value="value"
    />
    <span class="checkbox_label leading-4 relative text-caption">
      {{ label }}
    </span>
  </label>
</template>

<style scoped lang="scss">
.checkbox {
  &_input {
    &:checked {
      & + .checkbox_label::before {
        @apply border-blue bg-blue;
      }

      & + .checkbox_label::after {
        content: '';
        display: block;
        position: absolute;
        top: 3px;
        left: 6px;
        width: 5px;
        height: 11px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }
    }

    &:disabled {
      border: 1px solid;
      @apply border-gray-dark-10;
    }
  }

  &_label {
    &::before {
      content: '';
      display: inline-block;
      width: 16px;
      height: 16px;
      border: 3px solid;
      border-radius: 2px;
      margin-right: 10px;
      vertical-align: middle;
      @apply border-black;
    }
  }
}
</style>
