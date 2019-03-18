import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'
import {themes} from '@storybook/theming'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import SubheadersV1 from './SubheadersV1'
import SubheadersV2 from './SubheadersV2'
import Header from './../../components/vuetify/Subheader'

storiesOf('Subheaders', module, { options: { name: 'Foo', theme: themes.dark }} )
  .add('V1', () => ({
    components: {SubheadersV1},
    template: '<SubheadersV1 />'
  }))
  .add('V2', () => ({
    components: {Header},
    template: '<Header/>'
  }))
