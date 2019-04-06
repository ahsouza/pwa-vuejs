<template>
  <v-form>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-text-field v-model="email" :rules="[rules.required, rules.email]" label="E-mail">
          </v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>
<script>
  export default {
    name: 'VuetifyInputEmail',
    data () {
      return {
        fields: [{
          title: 'Input Email Vuetify',
          type: 'email',
          validations: {required: true},
          properties: {description: "Element input with vuetify"}
        }],
        email: '',
        rules: {
          required: value => !!value || 'Campo obrigatório.',
          counter: value => value.length <= 20 || 'Max 20 carácteres',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'E-mail inválido!'
          }
        }
      }
    }
  }
</script>
