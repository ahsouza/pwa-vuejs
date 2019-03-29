import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'
import {withKnobs, text, boolean} from '@storybook/addon-knobs'

import VuetifyStepperHorizontal from './vuetifyStepperHorizontal'
import VuetifyStepperVertical from './vuetifyStepperVertical'


storiesOf('Steppers', module)
  .addDecorator(withKnobs)
  .add('Horizontal', () => ({
    components: {VuetifyStepperHorizontal},
    template: `<vuetify-stepper-horizontal>
      <template v-slot:header-step-1>
        Primeira etapa
      </template>

      <template v-slot:header-step-2>
        Segunda etapa
      </template>

      <template v-slot:header-step-3>
        Terceira etapa
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
    template: `<vuetify-stepper-vertical></vuetify-stepper-vertical>`,
    methods: { action: action('clicked') }
  }))
