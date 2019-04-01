import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'
import {withKnobs, text, boolean} from '@storybook/addon-knobs'

import VuetifyStepperHorizontal from './vuetifyStepperHorizontal'
import VuetifyStepperVertical from './vuetifyStepperVertical'
import VuetifyComboBox from '../../elements/comboBox/vuetifyComboBox'


storiesOf('Steppers', module)
  .addDecorator(withKnobs)
  .add('Horizontal', () => ({
    components: {VuetifyStepperHorizontal},
    template: `<vuetify-stepper-horizontal>
      <template v-slot:header-step-1>
        Seleção de Tecnologias para seu projeto
      </template>


      <template v-slot:header-step-2>
        Cadastro Pessoal
      </template>

      <template v-slot:header-step-3>
        Enviar Orçamento
      </template>

      <template v-slot:btn-content-step-1>
        Próximo
      </template>

      <template v-slot:btn-content-step-2>
        Próximo
      </template>

      <template v-slot:btn-content-step-3>
        Próximo
      </template>

    </vuetify-stepper-horizontal>`,
    methods: { action: action('clicked') }
  }))
  .add('Vertical', () => ({
    components: {VuetifyStepperVertical},
    template: `<vuetify-stepper-vertical>
      <template v-slot:title-sumary>
        Partida
      </template>

      <template v-slot:subtitle-sumary>
        Faça seu orçamento
      </template>

      <template v-slot:content-step-1>
        Seleção de tecnologias
      </template>

      <template v-slot:content-step-2>
        Cadastro pessoal
      </template>

      <template v-slot:content-step-3>
        Tipo de orçamento
      </template>

      <template v-slot:content-step-4>
        Envie seu pedido
      </template>
    </vuetify-stepper-vertical>`,
    methods: { action: action('clicked') }
  }))
