<template>
  <form class="pa-2">
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="Nome"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-select
      v-model="select"
      :items="items"
      :error-messages="selectErrors"
      label="Área que estuda"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>
    <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Você concorda?"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>

  </form>
</template>
<style scoped>
* {
  background-color: #fff;
}
</style>
<script>
import {validationMixin } from 'vuelidate'
import {required, maxLength, email} from 'vuelidate/lib/validators'

export default {
  name: 'VuetifyFormInputs',
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(14) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked (val) {
        return val
      }
    }
  },
  data: () => ({
    name: '',
    email: '',
    select: null,
    items: [
     'Matemática',
     'Economia',
     'Tecnologia',
     'História',
     'Física'
    ],
    checkbox: false
  }),
  computed: {
    checkboxErrors () {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('Você concorda em continuar!')
    },
    selectErrors () {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Aplicativo para comunicação é obrigatório')
      return errors
    },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('O nome deve ter no máximo 14 carácter')
      !this.$v.name.required && errors.push('Nome é obrigatório')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('E-mail inválido!')
      !this.$v.email.required && errors.push('E-mail é obrigatório')
      return errors
    }
  },
  methods: {
    submit () {
      this.$v.$touch()
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
    }
  }
}
</script>
