<template>

    <div>
      <Subheader />
      <main>
        <router-view/>
      </main>
    </div>

</template>

<style scoped>
</style>

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
