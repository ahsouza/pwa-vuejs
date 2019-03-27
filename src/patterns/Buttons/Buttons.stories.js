import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'

import StoneBtn from './stoneButton'
import StoneBtnWarning from './stoneButtonWarning'
import StoneBtnSuccess from './stoneButtonSuccess'
import StoneBtnPrimary from './stoneButtonPrimary'

storiesOf('Buttons', module)
  .add('default', () => ({
    components: {StoneBtn},
    template: '<stone-btn>STONES</stone-btn>',
    methods: { action: action('clicked') }
  }))
  .add('success', () => ({
    components: {StoneBtnSuccess},
    template: '<stone-btn-success>STONES</stone-btn-success>',
    methods: { action: action('clicked') }
  }))
  .add('primary', () => ({
    components: {StoneBtnPrimary},
    template: '<stone-btn-primary>STONES</stone-btn-primary>',
    methods: { action: action('clicked') }
  }))
  .add('warning', () => ({
    components: {StoneBtnWarning},
    template: '<stone-btn-warning>STONES</stone-btn-warning>',
    methods: { action: action('clicked') }
  }))
