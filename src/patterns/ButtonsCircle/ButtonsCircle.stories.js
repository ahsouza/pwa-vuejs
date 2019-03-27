import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'

import ButtonCircle from './ButtonCircle'

storiesOf('ButtonCircle', module)
  .add('V1', () => ({
    components: {ButtonCircle},
    template: '<stone-btn-circle>+</stone-btn-circle>',
    methods: { action: action('clicked') }
  }))
