
<template>
  <v-btn :style="btnVuetify" round color="#FF5722">
    <slot></slot>
  </v-btn>
</template>

<style scoped>


</style>

<script>

export default {
  name: 'vuetify-btn-warning',
  data() {
    return {
      btnVuetify: {
        color: '#fff',

      }
    }
  }
}
</script>
