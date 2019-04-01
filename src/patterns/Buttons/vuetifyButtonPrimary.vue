
<template class="pa-2">
  <v-btn :style="btnVuetify" round color="#03A9F4">
    <slot></slot>
  </v-btn>
</template>

<style scoped>


</style>

<script>

export default {
  name: 'vuetify-btn-primary',
  data() {
    return {
      btnVuetify: {
        color: '#fff',

      }
    }
  }
}
</script>
