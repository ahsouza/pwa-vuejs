<template>
  <v-flex xs12 md4>
    <v-text-field v-model="model"
      :counter="max"
      :rules="rules"
      label="Short Text"
    ></v-text-field>
  </v-flex>
</template>

<script>
  export default {
    name:'VuetifyInputShortText',
    data: () => ({
      max: 0,
      model: 'Digite aqui seu texto'
    }),

    computed: {
      rules () {
        const rules = []

        if (this.max) {
          const rule =
            v => (v || '').length <= this.max ||
              `A maximum of ${this.max} characters is allowed`

          rules.push(rule)
        }

        if (!this.allowSpaces) {
          const rule =
            v => (v || '').indexOf(' ') < 0 ||
              'No spaces are allowed'

          rules.push(rule)
        }

        if (this.match) {
          const rule =
            v => (!!v && v) === this.match ||
              'Values do not match'

          rules.push(rule)
        }

        return {
          fields: [{
            title: 'Input Email Vuetify',
            type: 'short_text',
            validations: {required: false},
            properties: {description: "Element input short text with vuetify"}
          }],
          rules
        }
      }
    }
  }
</script>
