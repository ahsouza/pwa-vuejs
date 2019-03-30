import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'
import {withKnobs, text, boolean} from '@storybook/addon-knobs'


import VuetifyComboBox from './vuetifyComboBox'

storiesOf('ComboBox', module)
  .addDecorator(withKnobs)
  .add('combobox-vuetify', () => ({
    components: {VuetifyComboBox},
    template: '<VuetifyComboBox/>'
  }))
