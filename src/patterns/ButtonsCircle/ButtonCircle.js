export default {
  name: 'stone-btn-circle',
  props: ['cor', 'elevation', 'shadow', 'width', 'height', 'transition'],
  data() {
    return {
      hover: false,
      ButtonCircle: {
        display: 'block',
        position:'relative',
        padding:'0',
        zIndex:' 98',
        margin:'0 auto',
        boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.3)',
        borderRadius:'50%',
        height:'60px',
        width: '60px',
        backgroundColor: '#3F51B5',
        transition: '0.2s',
        textAlign: 'center'
      },
      ButtonCircleInHover: {
        cursor: 'pointer',
        backgroundColor: '#606fc7',
        boxShadow: '0 8px 15px 0 rgba(0, 0, 0, 0.3)'
      }
    }
  },
  template: `
    <button v-if="!hover" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" :style='ButtonCircle' @click="onClick">
      <slot />
    </button>

    <button v-else v-on:mouseleave="mouseleave" :style='ButtonCircleInHover' @click="onClick">
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
