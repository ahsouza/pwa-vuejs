<template>
  <div>
    <v-date-picker v-model="date" readonly></v-date-picker>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        fields: [{
          title: 'Input Date Pickers Vuetify',
          type: 'date',
          validations: {required: false},
          properties: {description: "Element input date pickers vuetify"}
        }],
        date: new Date().toISOString().substr(0, 10)
      }
    }
  }
</script>
