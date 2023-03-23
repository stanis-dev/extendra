<script setup lang="ts">
import { Field, useField } from 'vee-validate'
import { onClickOutside } from '@vueuse/core'

type Option = {
  label: string
  value: string
}

const props = defineProps({
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
  options: {
    type: Array as PropType<Option[]>,
    required: true
  }
})

const name = toRef(props, 'name')
const { handleChange } = useField(name)

const isOpen = ref(false)
const selectedOption = ref<Option>()

const selectRef = ref<HTMLElement | null>(null)
onClickOutside(selectRef, () => {
  if (!isOpen.value) return

  isOpen.value = false
})

onMounted(() => {
  if (props.options.length) {
    selectedOption.value = props.options[0]
    handleChange(selectedOption.value.value)
  }
})

const onUserSelect = (option: Option) => {
  handleChange(option.value)
  selectedOption.value = option
  setTimeout(() => {
    isOpen.value = false
  }, 100)
}
</script>

<template>
  <div
    :class="`select  flex flex-col justify-around w-full relative z-50 ${
      isOpen ? 'select_open' : ''
    }`"
    ref="selectRef"
    @click="isOpen = true"
    data-cursor="hover"
  >
    <span class="text-caption text-gray"
      >{{ label }} <span v-if="required" class="text-blue">*</span></span
    >

    <p class="text-body2">
      {{ selectedOption?.label }}
    </p>
    <div class="select_items absolute w-full">
      <ul class="select_options border-btn">
        <div class="select_options_wrapper">
          <li
            @click="onUserSelect(option)"
            v-for="option of options"
            class="select_option"
          >
            <input
              class="select_input"
              name="awesomeness"
              type="radio"
              :id="option.value"
              :value="option.value === selectedOption?.value"
            />
            <label
              data-cursor="hover"
              class="select_label text-body2"
              :for="option.value"
              >{{ option.label }}</label
            >
          </li>
        </div>
      </ul>
    </div>
    <!--  -->
  </div>
</template>

<style lang="scss">
.select {
  height: 67px;
  border-bottom: 1px solid black;

  &::after {
    content: '\003E';
    position: absolute;
    top: 42%;
    right: 0;
    transform: translateX(-50%) rotate(90deg) scaleY(1.75);
    color: #3e3e3e;
    font-size: 28px;
    pointer-events: none;
    z-index: 2;
    transition: all 250ms cubic-bezier(0.4, 0.25, 0.3, 1);
    opacity: 0.6;
  }

  &_open {
    &:hover::after {
      opacity: 1;
    }

    &::after {
      transform: translateX(-50%) rotate(90deg) scaleX(-1) scaleY(1.75);
    }

    .select_options {
      background-color: rgb(242, 242, 235);
      border-radius: 0px 0px 16px 16px;

      &_wrapper {
        @apply max-h-64 overflow-y-auto m-6;
      }

      .select_label {
        height: 16px;
        opacity: 1;
      }

      .select_option {
        @apply mb-6;
      }
    }
  }

  &_items {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 66px;
  }

  &_input {
    display: none;
  }

  &_label {
    transition: all 250ms cubic-bezier(0.4, 0.25, 0.3, 1);
    display: block;
    height: 0;
    overflow: hidden;
    opacity: 0;
  }
}
</style>
