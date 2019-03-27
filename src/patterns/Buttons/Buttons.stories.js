import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'

import StoneBtn from './stoneButton'

import ButtonsV1 from './ButtonsV1'
import ButtonsV2 from './ButtonsV2'
import ButtonsV3 from './ButtonsV3'

storiesOf('Buttons', module)
  .add('StoneBtnV1', () => ({
    components: {StoneBtn},
    template: '<stone-btn>STONES</stone-btn>',
    methods: { action: action('clicked') }
  }))
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
