import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'

import ButtonsV1 from './ButtonsV1'

storiesOf('Buttons', module)
  .add('V1', () => ({
    components: {ButtonsV1},
    template: '<ButtonsV1 />'
  }))
