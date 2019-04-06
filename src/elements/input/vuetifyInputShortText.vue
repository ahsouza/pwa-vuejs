<template>
  <v-form>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-text-field v-model="title" :rules="[rules.required, rules.counter]" label="Seu título aqui" counter maxlength="28">
          </v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>
<script>
export default {
   data () {
     return {
       fields: [{
         title: 'Input short text',
         type: 'short_text',
         properties: {description: "Element input text with vuetify"}
       }],
       rules: {
         required: value => !!value || 'Campo obrigatório!',
         counter: value => value.length <= 28 || 'Max 28 carácteres'
       }
     }
  }
}
</script>
