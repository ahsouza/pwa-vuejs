<template>
  <div>

    <Subheader />
    <h1>Meus Contatos</h1>
  </div>
</template>

<style scoped>
h1 {
  color: blue
}
</style>

<script>
import ButtonFloat from './ButtonFloat'
import Subheader from './Subheader'

export default {
  name: 'Contact',
  components: {
    ButtonFloat,
    Subheader
  },
  data () {
    return {

    }
  }
}
</script>
