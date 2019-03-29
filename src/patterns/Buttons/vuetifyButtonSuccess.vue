
<template>
  <v-btn :style="btnVuetify" round color="#00C853">
    <slot></slot>
  </v-btn>
</template>

<style scoped>


</style>

<script>

export default {
  name: 'vuetify-btn-success',
  data() {
    return {
      btnVuetify: {
        color: '#fff',

      }
    }
  }
}
</script>
