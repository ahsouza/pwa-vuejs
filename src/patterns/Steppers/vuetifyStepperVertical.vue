<template>
  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">
      Select an app
      <small>Summarize if needed</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">Configure analytics for this app</v-stepper-step>

    <v-stepper-content step="2">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">Select an ad format and name ad unit</v-stepper-step>

    <v-stepper-content step="3">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">View setup instructions</v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="primary" @click="e6 = 1">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<style scoped>
</style>

<script>
import ButtonVuetifySuccess from '../Buttons/vuetifyButtonSuccess'
import ButtonVuetifyWarning from '../Buttons/vuetifyButtonWarning'
import ButtonVuetifyPrimary from '../Buttons/vuetifyButtonPrimary'
import ButtonStoneSuccess from '../Buttons/stoneButtonSuccess'
import ButtonStoneWarning from '../Buttons/stoneButtonWarning'
import ButtonStonePrimary from '../Buttons/stoneButtonPrimary'

export default {
  name: 'vuetify-stepper-vertical',
  components: {
    ButtonVuetifySuccess,
    ButtonVuetifyWarning,
    ButtonVuetifyPrimary,
    ButtonStoneSuccess,
    ButtonStoneWarning,
    ButtonStonePrimary
  },
  data () {
      return {
        e6: 1
      }
    }
}
</script>
