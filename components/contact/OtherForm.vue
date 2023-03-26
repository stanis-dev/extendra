<script setup lang="ts">
import { z } from 'zod'
import {
  Form,
  FormContext,
  InvalidSubmissionHandler,
  SubmissionHandler
} from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'

const currentStep = ref<0 | 1>(0)
const formRef = ref<FormContext>()

const reasons = [
  { label: 'Unirme al equipo', value: 'join-team' },
  { label: 'Colaborar como partner', value: 'partner' },
  { label: 'Obtener información', value: 'info' }
]
const selectedReason = ref<string>('')

const requiredMessage = 'Este campo es obligatorio'

const OtherContactShema = toTypedSchema(
  z.object({
    name: z.string({ required_error: requiredMessage }).min(3, requiredMessage),
    email: z
      .string({ required_error: requiredMessage })
      .email({ message: 'Escribe un email válido' }),
    portforlioUrl: z
      .string({ required_error: requiredMessage })
      .url({ message: 'Escribe una URL válida' }),
    curriculum: z.custom<File>(
      v => v instanceof File && v.type === 'application/pdf',
      {
        message: 'Debes subir un archivo pdf'
      }
    )
  })
)

const professionalAreaOptions = [
  { label: 'Desarrollo', value: 'dev' },
  { label: 'Diseño', value: 'design' },
  { label: 'Marketing', value: 'marketing' },
  { label: 'Ventas', value: 'sales' },
  { label: 'Otros', value: 'other' }
]

const selectReason = (reason: string) => {
  selectedReason.value = reason
  currentStep.value = 1
}

const handleSubmit: SubmissionHandler = async values => {
  console.log('values: ', { ...values, reson: selectedReason.value })
}

const handleInvalidSubmit: InvalidSubmissionHandler = async values => {
  console.log('values: ', values)
}
</script>

<template>
  <div>
    <div class="mr-auto flex text-btn items-center text-gray-dark-100 h-5 mb-6">
      <template v-if="currentStep === 1">
        <AppIcon
          name="arrow-left-black"
          class="h-5 w-5 mr-2"
          @click="currentStep = 0"
        />
        <span> Volver </span>
      </template>
    </div>
    <h2 class="text-h2 mb-14">Tenemos el metaverso que buscas. Hablemos.</h2>
    <template v-if="currentStep === 0">
      <div class="btn-wrapper w-full flex flex-col gap-4">
        <AppButton
          type="button"
          v-for="reason in reasons"
          class="!bg-cream border-btn w-full"
          :label="reason.label"
          @click="selectReason(reason.value)"
        />
      </div>
    </template>
    <Form
      v-if="currentStep === 1"
      @submit="handleSubmit"
      @invalid-submit="handleInvalidSubmit"
      ref="formRef"
      keep-values
      :validation-schema="OtherContactShema"
    >
      <FormTextInput class="mb-4" label="Nombre" name="name" required />
      <FormTextInput
        class="mb-4"
        label="E-mail"
        type="email"
        name="email"
        required
      />
      <FormSelect
        class="mb-4 z-50"
        label="¿Cual es tu área?"
        :options="professionalAreaOptions"
        required
        name="budget"
      />

      <FormTextInput
        class="mb-4"
        label="Enlace a tu portfolio"
        name="portforlioUrl"
        required
      />
      <FormFileInput
        class="mt-3"
        label="Sube tu CV"
        placeholder="Selecciona un archivo..."
        name="curriculum"
        required
      />

      <AppButton
        v-if="currentStep === 1"
        tag="button"
        variant="black"
        class="w-36 tablet:mr-auto mt-14 laptop:mt-5"
        label="Enviar"
      />
    </Form>
  </div>
</template>
