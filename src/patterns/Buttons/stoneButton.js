export default {
  name: 'stone-btn',
  props: {
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  props: ['cor', 'elevation', 'shadow', 'width', 'height', 'transition'],
  data() {
    return {
      hover: false,
      stoneButton: {
        boxShadow:'0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
        boxSizing: 'border-box',
        webkitAppearance: 'none',
        mozAppearance: 'none',
        appearance: 'none',
        backgroundColor: '#fff',
        border: '2px solid #1DE9B6',
        borderRadius: '0.6em',
        color: '#1DE9B6',
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
      stoneButtonHover: {
        transition: '.4s',
        boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        boxSizing: 'border-box',
        webkitAppearance: 'none',
        mozAppearance: 'none',
        appearance: 'none',
        backgroundColor: '#1DE9B6',
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
    <button :disabled="isDisabled" v-if="!hover" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" :style='stoneButton' @click="onClick">
      <slot />
    </button>

    <button :disabled="isDisabled" v-else v-on:mouseleave="mouseleave" :style='stoneButtonHover' @click="onClick">
      <slot />
    </button>
  `,
  methods: {
    onClick() {
      this.$emit('click')
    },
    mouseover: function(){
      return this.hover = true
     },
     mouseleave: function(){
       return this.hover = false
     }
  },

}
