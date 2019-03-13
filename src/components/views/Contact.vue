<template>

    <ButtonFloat />

</template>

<style scoped>
h1 {
  color: blue
}
</style>

<script>
import ButtonFloat from './../vuetify/ButtonFloat'

export default {
  name: 'Contact',
  components: {
    ButtonFloat
  },
  data () {
    return {
      users: []
    }
  },
  methods: {
    fetchUsers: () => {
      const baseURI = 'https://jsonplaceholder.typicode.com/users'
       this.$http.get(baseURI)
        .then((result) => {
          this.users = result.data
        })
    }
  }
}
</script>
