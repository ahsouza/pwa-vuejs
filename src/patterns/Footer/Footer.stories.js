import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'
import {withKnobs, text, boolean} from '@storybook/addon-knobs'
import VuetifyFooter from './vuetifyFooter'
import VuetifyFooterV2 from './vuetifyFooterV2'
import VuetifyFooterV3 from './vuetifyFooterV3'

storiesOf('Footers', module)
  .addDecorator(withKnobs)
  .add('Footer-v1', () => ({
    components: {VuetifyFooter},
    template: '<VuetifyFooter/>'
  }))
  .add('Footer-v2', () => ({
    components: {VuetifyFooterV2},
    template: `
      <VuetifyFooterV2>
        <template v-slot:footer-card-text>
          Seleção de Tecnologias para seu projeto
        </template>
      <VuetifyFooterV2/>
    `
  }))
  .add('Footer-v3', () => ({
    components: {VuetifyFooterV3},
    template: `
      <VuetifyFooterV3>
        
      <VuetifyFooterV3/>
    `
  }))
