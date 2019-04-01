import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'
import {withKnobs, text, boolean} from '@storybook/addon-knobs'

import VuetifyFormInputs from './vuetifyFormInputs'

storiesOf('FormInputs', module)
  .addDecorator(withKnobs)
  .add('form-inputs-vuetify', () => ({
    components: {VuetifyFormInputs},
    template: '<VuetifyFormInputs/>'
  }))
