<script setup lang="ts">
defineProps({
  options: {
    type: Array as PropType<{ label: string; value: string }[]>,
    required: true
  },
  value: {
    type: String as PropType<string>,
    required: true
  }
})

defineEmits(['option-selected'])
</script>

<template>
  <div
    class="switches-container text-btn rounded-2xl relative flex p-0 bg-cream w-full backdrop:blur-[8px] border-btn"
    data-cursor="hover"
  >
    <input
      type="radio"
      @input="$emit('option-selected', options[0].value)"
      id="switchProject"
      name="switchPurpose"
      value="project"
      :checked="value === options[0].value"
    />
    <input
      @input="$emit('option-selected', options[1].value)"
      type="radio"
      id="switchOther"
      name="switchPurpose"
      value="other"
      :checked="value === options[1].value"
    />
    <label for="switchProject">{{ options[0].label }}</label>
    <label for="switchOther">{{ options[1].label }}</label>
    <div class="switch-wrapper">
      <div
        class="switch rounded-2xl bg-white h-full border-btn backdrop:blur-[8px]"
      >
        <AppButton tag="button" :label="options[0].label" class="px-0 h-full" />
        <AppButton tag="button" :label="options[1].label" class="px-0 h-full" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.switches-container {
  line-height: 3rem;
  margin-left: auto;
  margin-right: auto;
}

/* input (radio) for toggling. hidden - use labels for clicking on */
.switches-container input {
  visibility: hidden;
  position: absolute;
  top: 0;
}

/* labels for the input (radio) boxes - something to click on */
.switches-container label {
  width: 50%;
  padding: 0;
  margin: 0;
  text-align: center;
  cursor: pointer;
}

/* switch highlighters wrapper (sliding left / right) 
    - need wrapper to enable the even margins around the highlight box
*/
.switch-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  z-index: 3;
  transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}

/* switch box labels
    - default setup
    - toggle afterwards based on radio:checked status 
*/
.switch button {
  width: 100%;
  // text-align: center;
  opacity: 0;
  display: block;
  transition: opacity 0.2s cubic-bezier(0.77, 0, 0.175, 1) 0.125s;
  will-change: opacity;
  position: absolute;
  top: 0;
  left: 0;
}

/* slide the switch box from right to left */
.switches-container input:nth-of-type(1):checked ~ .switch-wrapper {
  transform: translateX(0%);
}

/* slide the switch box from left to right */
.switches-container input:nth-of-type(2):checked ~ .switch-wrapper {
  transform: translateX(100%);
}

/* toggle the switch box labels - first checkbox:checked - show first switch div */
.switches-container
  input:nth-of-type(1):checked
  ~ .switch-wrapper
  .switch
  button:nth-of-type(1) {
  opacity: 1;
  z-index: 5;
}

/* toggle the switch box labels - second checkbox:checked - show second switch div */
.switches-container
  input:nth-of-type(2):checked
  ~ .switch-wrapper
  .switch
  button:nth-of-type(2) {
  opacity: 1;
  z-index: 5;
}
</style>
