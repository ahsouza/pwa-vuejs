<template>
  <v-container fluid>
    <v-layout wrap>
      <v-flex xs12>
        <v-combobox v-model="select" :items="items" chips label="Tecnologias utilizadas"></v-combobox>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<style scoped>
* {
  background-color: #fff;

}
</style>

<script>
  export default {
    name: 'combo-box-vuetify',
    data () {
      return {
        select: 'Angular.js',
        items: [
          'Vue.js',
          'React.js',
          'Node.js',
          'Laravel PHP',
          'Spring JAVA',
          'Django Python',
          'Flask Python',
          'Cake PHP',
        ]
      }
    }
  }
</script>
