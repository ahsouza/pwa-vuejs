import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'

import ButtonsV1 from './ButtonsV1'
import ButtonsV2 from './ButtonsV2'
import ButtonsV3 from './ButtonsV3'
import ButtonsV4 from './ButtonsV4'
import ButtonsV5 from './ButtonsV5'

storiesOf('Buttons', module)
  .add('V1', () => ({
    components: {ButtonsV1},
    template: '<ButtonsV1 />'
  }))
  .add('V2', () => ({
    components: {ButtonsV2},
    template: '<ButtonsV2 />'
  }))
  .add('V3', () => ({
    components: {ButtonsV3},
    template: '<ButtonsV3 />'
  }))
  .add('V4', () => ({
    components: {ButtonsV4},
    template: '<ButtonsV4 />'
  }))
  .add('V5', () => ({
    components: {ButtonsV5},
    template: '<ButtonsV5 />'
  }))
