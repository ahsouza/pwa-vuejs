import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'
import {withKnobs, text, boolean} from '@storybook/addon-knobs'
import VuetifySelectionControls from './vuetifySelectionControls'

storiesOf('SelectionControls', module)
  .addDecorator(withKnobs)
  .add('selection-controls-vuetify', () => ({
    components: {VuetifySelectionControls},
    template: '<VuetifySelectionControls/>'
  }))
