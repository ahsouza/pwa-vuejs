import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'
import {withKnobs, text, boolean} from '@storybook/addon-knobs'
import VuetifyFooter from './vuetifyFooter'

storiesOf('Footers', module)
  .addDecorator(withKnobs)
  .add('selection-controls-vuetify', () => ({
    components: {VuetifyFooter},
    template: '<VuetifyFooter/>'
  }))
