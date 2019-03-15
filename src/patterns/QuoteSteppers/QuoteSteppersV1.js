export default {
  name: 'quote-steppers-v1',
  data() {
    return {
      buttonStyles: {
        border: '1px solid #eee',
        borderRadius: 3,
        backgroundColor: 'blue',
        cursos: 'pointer',
        fontSize: 15,
        padding: '3px 10px',
        margin: 10
      }
    }
  },
  template: `
    <button :style="buttonStyles" @click="onClick">
      <slot></slot>
    </button>
  `,
  methods: {
   onClick() {
    this.$emit('click')
   }
  }
}
