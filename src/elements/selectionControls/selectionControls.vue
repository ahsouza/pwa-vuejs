<template>
  <v-container fluid px-0>
    <v-checkbox color="green" v-model="checkbox" :label="`Checkbox 1: ${checkbox.toString()}`">
    </v-checkbox>

    <v-radio-group v-model="radioGroup">
      <v-radio
        v-for="n in 3"
        :key="n"
        :label="`Radio ${n}`"
        :value="n"
        color="purple"
      ></v-radio>
    </v-radio-group>
    <v-switch v-model="switch1" :label="`Switch 1: ${switch1.toString()}`" color="pink"></v-switch>
  </v-container>
</template>

<style scoped>
* { background-color: #fff; padding: 4px;}
</style>
<script>

export default {
 name: 'VuetifySelectionControls',
 data() {
  return {
    checkbox: true,
    radioGroup: 1,
    switch1: true
  }
 }
}

</script>
