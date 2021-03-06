import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'
import {withKnobs, text, boolean} from '@storybook/addon-knobs'


import StoneBtnDefault from './stoneButtonDefault'
import StoneBtnWarning from './stoneButtonWarning'
import StoneBtnSuccess from './stoneButtonSuccess'
import StoneBtnPrimary from './stoneButtonPrimary'
import VuetifyBtnPrimary from './vuetifyButtonPrimary'
import VuetifyBtnWarning from './vuetifyButtonWarning'
import VuetifyBtnSuccess from './vuetifyButtonSuccess'


storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add('default', () => ({
    components: {StoneBtnDefault},
    template: '<stone-btn-default>STONES</stone-btn-default>',
    props: {
      isDisabled: {
        default: boolean('Disabled', false)
      },
      text: {
        default: text('Text', 'Button Default')
      }
    },
    methods: { action: action('clicked') }
  }))
  .add('primary', () => ({
    components: {StoneBtnPrimary},
    template: '<stone-btn-primary>STONES</stone-btn-primary>',
    methods: { action: action('clicked') }
  }))
  .add('primary-vuetify', () => ({
    components: {VuetifyBtnPrimary},
    template: '<vuetify-btn-primary>STONES</vuetify-btn-primary>',
    methods: { action: action('clicked') }
  }))
  .add('success', () => ({
    components: {StoneBtnSuccess},
    template: '<stone-btn-success>STONES</stone-btn-success>',
    methods: { action: action('clicked') }
  }))
  .add('success-vuetify', () => ({
    components: {VuetifyBtnSuccess},
    template: '<vuetify-btn-success>STONES</vuetify-btn-success>',
    methods: { action: action('clicked') }
  }))
  .add('warning', () => ({
    components: {StoneBtnWarning},
    template: '<stone-btn-warning>STONES</stone-btn-warning>',
    methods: { action: action('clicked') }
  }))
  .add('warning-vuetify', () => ({
    components: {VuetifyBtnWarning},
    template: '<vuetify-btn-warning>STONES</vuetify-btn-warning>',
    methods: { action: action('clicked') }
  }))
