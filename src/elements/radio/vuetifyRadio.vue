<template>
  <v-container fluid class="pa-2">
    <v-radio-group v-model="radioGroup">
      <v-radio :label="`Radio ${n}`" :value="n" color="purple"></v-radio>1
    </v-radio-group>
  </v-container>
</template>

<style scoped>
* { background-color: #fff; padding: 4px;}
</style>
<script>

export default {
 name: 'VuetifyRadio',
 data() {
  return {
    fields: [{
      title: 'Radio Vuetify',
      type: 'radio',
      validations: {required: false},
      properties: {description: "Element comboBox with vuetify"}
    }],
    checkbox: true,
    radioGroup: 1,
    switch1: true
  }
 }
}

</script>
