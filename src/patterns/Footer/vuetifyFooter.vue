<template>
  <v-footer height="auto" :style="styleFooter" color="primary lighten-1" >
    <v-layout justify-center row wrap>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        flat
        round
      >
        {{ link }}
      </v-btn>
      <v-flex
        primary
        lighten-2
        py-3
        text-xs-center
        white--text
        xs12
        :style="styleFooterFlex"
      >
        &copy;2019 — <strong>Vuetify</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>
<script>
  export default {
    name: 'VuetifyFooter',
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us'
      ],
      styleFooterFlex: {
        backgroundColor: '#ff0000'
      },
      styleFooter: {
        backgroundColor: '#ff8e8e'
      }
    })
  }
</script>
