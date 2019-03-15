import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'

import QuoteSteppersV1 from './QuoteSteppersV1'
import QuoteSteppersV2 from './QuoteSteppersV2'

storiesOf.('QuoteSteppers', module)
  .add('V1', () => ({
    components: {QuoteSteppersV1},
    template: '<quote-steppers-v1 @click="action">BUTTON</quote-steppers-v1>',
    methods: { action: action('clicked') }
  }))
  .add('V2', () => ({
    components: {QuoteSteppersV2},
    template: '<quote-steppers-v2 @click="action">BUTTON</quote-steppers-v1>',
    methods: { action: action('clicked') }
  }))
