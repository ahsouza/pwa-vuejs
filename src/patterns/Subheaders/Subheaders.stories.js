import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'

import SubheadersV1 from './SubheadersV1'
import SubheadersV2 from './SubheadersV2'
import Header from './../../components/vuetify/Subheader'

storiesOf('Subheaders', module)
  .add('V1', () => ({
    components: {SubheadersV1},
    template: '<subheaders-v1></subheaders-v1>',
    methods: { action: action('clicked') }
  }))
  .add('V2', () => ({
    components: {Header},
    template: '<Subheader/>'
  }))
