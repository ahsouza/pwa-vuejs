<template>
  <v-container fluid>
    <v-layout wrap>
      <v-flex xs12>
        <v-combobox v-model="select" :items="itemsFrontEnd" chips label="Tecnologias Front-End"></v-combobox>
      </v-flex>
      <v-flex xs12>
      <v-combobox v-model="select2" :items="itemsBackEnd" chips label="Tecnologias Back-End"></v-combobox>
      </v-flex>

      <v-flex xs12>
        <v-combobox v-model="select" chips label="Front-End" readonly></v-combobox>
        <v-combobox v-model="select2" chips label="Back-End" readonly></v-combobox>
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
        itemsFrontEnd: [
          'Vue.js',
          'React.js',
        ],
        select2: 'Node.js',
        itemsBackEnd: [
          'Node.js',
          'Laravel PHP',
          'Cake PHP',
          'Spring JAVA',
          'Django Python',
          'Flask Python',
          'Asp.Net C#',
        ]
      }
    }
  }
</script>
