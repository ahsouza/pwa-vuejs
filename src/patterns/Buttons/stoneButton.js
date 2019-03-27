export default {
  name: 'stone-btn',
  props: ['red', 'blue', 'green', 'white', 'purple', 'pink', 'orange'],
  data() {
    return {
      btn: false,
      stoneButton: {
        boxSizing: 'border-box',
        webkitAppearance: 'none',
        mozAppearance: 'none',
        appearance: 'none',
        backgroundColor: 'transparent',
        border: '2px solid #e74c3c',
        borderRadius: '0.6em',
        color: '#e74c3c',
        cursor: 'pointer',
        display: 'flex',
        alignSelf: 'center',
        fontSize: '1rem',
        fontWeight: '400',
        lineHeight: '1',
        margin: '20px',
        padding: '1.2em 2.8em',
        textDecoration: 'none',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: '700',
      },
      stoneButtonA: {
        boxSizing: 'border-box',
        webkitAppearance: 'none',
        mozAppearance: 'none',
        appearance: 'none',
        backgroundColor: 'transparent',
        border: '2px solid #fff',
        borderRadius: '0.6em',
        color: '#fff',
        cursor: 'pointer',
        display: 'flex',
        alignSelf: 'center',
        fontSize: '1rem',
        fontWeight: '400',
        lineHeight: '1',
        margin: '20px',
        padding: '1.2em 2.8em',
        textDecoration: 'none',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: '700',
      }
    }
  },
  template: `
    <button v-if="!btn" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" :style='stoneButton' @click="onClick">
      <slot />
      {{btn}}
    </button>


    <button v-else v-on:mouseleave="mouseleave" :style='stoneButtonA' @click="onClick">
      <slot />
      {{btn}}
    </button>
  `,
  methods: {
    onClick() {
      this.$emit('click')
    },
    mouseover: function(){
      return this.btn = true
     },
     mouseleave: function(){
       return this.btn = false
     }
  },

}
