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
        <v-card class="mb-5" height="420px">
          <VuetifyComboBox label="Qual tipo de projeto você precisa?"/>
          <VuetifySelectionControls />
        </v-card>

        <v-btn color="#03A9F4" :style="styleButton" @click="e1 = 2">
          <slot name="btn-content-step-1" />
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-5" color="#fff" height="420px">
          <VuetifyFormInputs/>
        </v-card>

        <v-btn color="#FF5722" :style="styleButton" @click="e1 = 1">Voltar</v-btn>

        <v-btn color="#03A9F4" :style="styleButton" @click="e1 = 3">
          <slot name="btn-content-step-2" />
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-5" color="blue" height="420px">
          <VuetifyCards/>
        </v-card>

        <v-btn color="#FF5722" :style="styleButton" @click="e1 = 2">
          Voltar
        </v-btn>
        <ButtonVuetifySuccess >CONCLUIR</ButtonVuetifySuccess>
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
import VuetifyCards from '../Cards/vuetifyCards'

import VuetifyComboBox from '../../elements/comboBox/vuetifyComboBox'
import VuetifySelectionControls from '../../elements/selectionControls/vuetifySelectionControls'
import VuetifyFormInputs from '../../elements/form/vuetifyFormInputs'

export default {
  name: 'vuetify-stepper-horizontal',
  components: {
    ButtonVuetifySuccess,
    ButtonVuetifyWarning,
    ButtonVuetifyPrimary,
    ButtonStoneSuccess,
    ButtonStoneWarning,
    ButtonStonePrimary,
    VuetifyFormInputs,
    VuetifyCards,
    VuetifyComboBox,
    VuetifySelectionControls
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
