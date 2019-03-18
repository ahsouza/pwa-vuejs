import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'

storiesOf('Avatar', module)
  .add('V1', () => ({
    template: '<img src="https://placehold.it/350x150" alt="My CDN placeholder" />',
    methods: { action: action('clicked') }
  }))
  .add('V2', () => ({
    template: '<img src="https://placehold.it/350x150" alt="My CDN placeholder" />',
    methods: { action: action('clicked') }
  }))
  .add('V3', () => ({
    template: '<img src="https://placehold.it/350x150" alt="My CDN placeholder" />',
    methods: { action: action('clicked') }
  }))
  .add('V4', () => ({
    template: '<img src="https://placehold.it/350x150" alt="My CDN placeholder" />',
    methods: { action: action('clicked') }
  }))
