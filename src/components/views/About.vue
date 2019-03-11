<template>
  <div>
     <h2>Sobre</h2>
  </div>
</template>

<style scoped>
h1 {
  color: blue
}
</style>

<script>

export default {
  name: 'About',
  components: {

  },
  data () {
    return {
      users: []
    }
  },
  methods: {
    fetchUsers: () => {
      const URI = 'https://jsonplaceholder.typicode.com/users'
      this.$http.get(baseURI)
        .then((result) => {
          this.users = result.data
        })
    }
  }
}
</script>
