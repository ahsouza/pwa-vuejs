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
import Subheader from './components/Subheader'

export default {
  components: {
    Subheader
  },
  data: () => ({

  })
}
</script>
