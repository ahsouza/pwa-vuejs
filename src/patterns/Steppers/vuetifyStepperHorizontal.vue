<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">
        <slot name="header-step-1" />
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">
        <slot name="header-step-2" />
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">
        <slot name="header-step-3" />
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="mb-5" color="red" height="300px">

        </v-card>

        <v-btn color="#03A9F4" :style="styleButton" @click="e1 = 2">
          <slot name="btn-content-step-1" />
        </v-btn>

        <v-btn flat color="#d50000">Cancel</v-btn>
        <ButtonVuetifyPrimary >SALVAR </ButtonVuetifyPrimary>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-5" color="green" height="300px">
        </v-card>

        <v-btn color="#03A9F4" :style="styleButton" @click="e1 = 3">
          <slot name="btn-content-step-2" />
        </v-btn>

        <v-btn flat color="#d50000">Cancel</v-btn>
        <ButtonVuetifyWarning >SALVAR</ButtonVuetifyWarning>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-5" color="blue" height="300px">
        </v-card>

        <v-btn color="#03A9F4" :style="styleButton" @click="e1 = 1">
          <slot name="btn-content-step-3" />
        </v-btn>

        <v-btn flat color="#d50000">Cancel</v-btn>
        <ButtonVuetifySuccess >SALVAR</ButtonVuetifySuccess>
      </v-stepper-content>
    </v-stepper-items>

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
  name: 'vuetify-stepper-horizontal',
  components: {
    ButtonVuetifySuccess,
    ButtonVuetifyWarning,
    ButtonVuetifyPrimary,
    ButtonStoneSuccess,
    ButtonStoneWarning,
    ButtonStonePrimary
  },
  data() {
    return {
      e1: 0,
      styleButton: {
        color: '#fff',
      }
    }
  }
}
</script>
