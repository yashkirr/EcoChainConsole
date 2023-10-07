// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'



// Vuetify
import { createVuetify } from 'vuetify'
import { VStepper } from 'vuetify/labs/VStepper'

export default 
createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    components: {
      VStepper,
    },
  })
