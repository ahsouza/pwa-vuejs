<template>
  <v-container fluid class="pa-2">
    <v-checkbox color="green" v-model="checkbox" :label="`Checkbox 1: ${checkbox.toString()}`">
    </v-checkbox>
  </v-container>
</template>

<style scoped>
* { background-color: #fff; padding: 4px;}
</style>
<script>

export default {
 name: 'VuetifyCheckbox',
 data() {
  return {
    fields: [{
      title: 'Checkbox Vuetify',
      type: 'checkbox',
      validations: {required: false},
      properties: {description: "Element checkbox with vuetify"}
    }],
    checkbox: true,
    radioGroup: 1,
    switch1: true
  }
 }
}

</script>
