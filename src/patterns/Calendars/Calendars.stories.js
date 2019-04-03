import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'
import {withKnobs, text, boolean} from '@storybook/addon-knobs'

import VuetifyCalendar from './vuetifyCalendar'

storiesOf('Calendars', module)
  .addDecorator(withKnobs)
  .add('calendar-vuetify', () => ({
    components: {VuetifyCalendar},
    template: '<VuetifyCalendar/>'
  }))
