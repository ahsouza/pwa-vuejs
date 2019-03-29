<template>
  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">
      <slot name="title-sumary" />
      <small><slot name="subtitle-sumary" /></small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="#03A9F4" :style="styleButton" @click="e6 = 2">Continue</v-btn>
      <v-btn color="#d50000" flat>Cancel</v-btn>
      <ButtonVuetifyWarning />
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2"><slot name="content-step-2" /></v-stepper-step>

    <v-stepper-content step="2">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="#03A9F4" :style="styleButton" @click="e6 = 3">Continue</v-btn>
      <v-btn color="#d50000" flat>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3"><slot name="content-step-3" /></v-stepper-step>

    <v-stepper-content step="3">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="#03A9F4" :style="styleButton" @click="e6 = 4">Continue</v-btn>
      <v-btn color="#d50000" flat>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step step="4"><slot name="content-step-4" /></v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="#03A9F4" :style="styleButton" @click="e6 = 1">Continue</v-btn>
      <v-btn color="#d50000" flat>Cancel</v-btn>
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
        e6: 1,
        styleButton: {
          color: '#fff'
        }
      }
    }
}
</script>
