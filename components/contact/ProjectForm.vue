<script setup lang="ts">
import { Form, FormContext, ValidationResult } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

const requiredMessage = 'Este campo es obligatorio'

const { data } = useFetch('/api/contact-page-content')
console.log('data: ', data.value)

const budgetOptions = [
  { label: 'Menos de $10,000', value: 'lt10' },
  { label: '$10,000 - $50,000', value: '10to50' },
  { label: '$50,000 - $100,000', value: '50to100' },
  { label: '$100,000 - $500,000', value: '100to500' },
  { label: '$500,000 - $1,000,000', value: '500to1mil' },
  { label: 'Más de $1,000,000', value: 'gt1mil' },
  { label: 'No estoy seguro', value: 'notsure' }
]

const projectDurationOptions = [
  { label: 'Menos de 3 meses', value: 'lt3' },
  { label: '3 - 6 meses', value: '3to6' },
  { label: '6 - 12 meses', value: '6to12' },
  { label: 'Más de 12 meses', value: 'gt12' },
  { label: 'No estoy seguro', value: 'notsure' }
]

const currentStep = ref<0 | 1>(0)
const schemas = [
  toTypedSchema(
    z.object({
      name: z
        .string({ required_error: requiredMessage })
        .min(3, requiredMessage),
      email: z
        .string({ required_error: requiredMessage })
        .email({ message: 'Escribe un email válido' }),
      tel: z.string().optional(),
      company: z
        .string({ required_error: requiredMessage })
        .nonempty(requiredMessage),
      sector: z.string().optional()
    })
  ),
  toTypedSchema(
    z.object({
      aboutProject: z
        .string({ required_error: requiredMessage })
        .min(3, requiredMessage),
      budget: z
        .string({ required_error: requiredMessage })
        .nonempty(requiredMessage)
        .default('notsure'),
      projectDuration: z
        .string({ required_error: requiredMessage })
        .nonempty(requiredMessage),
      requests: z.array(z.string()).default([])
    })
  )
]

const form = ref<FormContext>()
const nextStep = async (values: Record<string, any>) => {
  const result = await form.value?.validate()
  if (!result?.valid) {
    return
  }

  if (currentStep.value === 1) {
    console.log('submitting: ', JSON.stringify(values, null, 2))

    return
  }

  currentStep.value = 1
}

const currentSchema = computed(() => schemas[currentStep.value])
</script>

<template>
  <Form
    ref="form"
    v-slot="{ values, errors, handleSubmit, validate }"
    @submit="nextStep"
    keep-values
    :validation-schema="currentSchema"
    class="flex flex-col gap-5 items-center mb-10"
  >
    <template v-if="currentStep === 0">
      <FormTextInput label="Nombre" name="name" required />
      <FormTextInput label="E-mail" type="email" name="email" required />
      <FormTextInput label="Teléfono (opcional)" type="tel" name="tel" />
      <FormTextInput label="Nombre de tu empresa" name="company" required />
      <FormTextInput label="Sector (opcional)" name="sector" />
    </template>
    <template v-if="currentStep === 1">
      <FormTextArea
        label="Cuéntanos sobre tu proyecto"
        name="aboutProject"
        required
      />
      <FormSelect
        label="¿Cual es tu presupuesto?"
        :options="budgetOptions"
        required
        name="budget"
      />
      <FormSelect
        label="¿Para cuándo lo quieres tener?"
        :options="projectDurationOptions"
        required
        name="projectDuration"
      />

      <FormCheckBox
        label="Solicita una video call"
        name="requests"
        value="videoCall"
        class="-mb-3"
      />
      <FormCheckBox label="Solicita una demo" value="demo" name="requests" />

      <div class="btn-wrapper w-full flex justify-between">
        <AppButton
          type="button"
          tag="button"
          variant="white"
          class="w-36 laptop:mt-5"
          label="Volver"
          @click="currentStep = 0"
        />
      </div>
    </template>

    <AppButton
      :type="currentStep === 1 ? 'button' : 'submit'"
      tag="button"
      variant="black"
      class="w-36 tablet:mr-auto laptop:mt-5"
      :label="currentStep === 0 ? 'Siguiente' : 'Enviar'"
      @click="nextStep(values)"
    />
  </Form>
</template>

<style scoped></style>
