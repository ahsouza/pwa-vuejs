import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'

import TypeformV1 from './TypeformV1'
import TypeformV2 from './TypeformV2'

storiesOf('Typeforms', module)
  .add('V1', () => ({
    components: {TypeformV1},
    template: '<TypeformV1 />'
  }))
  .add('V2', () => ({
    components: {TypeformV2},
    template: '<quote-steppers-v2 @click="action">BUTTON</quote-steppers-v1>',
    methods: { action: action('clicked') }
  }))
