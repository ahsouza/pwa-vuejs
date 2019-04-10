import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'
import {withKnobs, text, boolean} from '@storybook/addon-knobs'

import VuetifyInputEmail from './vuetifyInputEmail'
import VuetifyInputShortText from './vuetifyInputShortText'
import VuetifyInputLongText from './vuetifyInputLongText'
import VuetifyInputDate from './vuetifyInputDate'
import VuetifyInputPictureChoice from './vuetifyInputPictureChoice'

storiesOf('Inputs', module)
  .addDecorator(withKnobs)
  .add('input-email-vuetify', () => ({
    components: {VuetifyInputEmail},
    template: '<VuetifyInputEmail/>'
  }))
  .add('input-short-text-vuetify', () => ({
    components: {VuetifyInputShortText},
    template: '<VuetifyInputShortText/>'
  }))
  .add('input-long-text-vuetify', () => ({
    components: {VuetifyInputLongText},
    template: '<VuetifyInputLongText/>'
  }))
  .add('input-date-vuetify', () => ({
    components: {VuetifyInputDate},
    template: '<VuetifyInputDate/>'
  }))
  .add('input-picture-choice-vuetify', () => ({
    components: {VuetifyInputPictureChoice},
    template: '<VuetifyInputPictureChoice/>'
  }))
