<template>

    <div>
      <Subheader />
      <main>
        <router-view/>
      </main>
    </div>

</template>

<script>
import Subheader from './components/vuetify/Subheader'

export default {
  components: {
    Subheader
  },
  data: () => ({

  })
}
</script>

<style scoped>
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
</style>
