<template>
  <v-container fluid>
    <v-layout wrap class="pa-2">
      <v-flex xs12>
        <v-combobox v-model="select" :items="items" chips :label="label"></v-combobox>
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
    props: ['label'],
    name: 'combo-box-vuetify',
    data () {
      return {
        fields: [{
          title: 'ComboBox Vuetify',
          type: 'comboBox',
          validations: {required: false},
          properties: {description: "Element comboBox with vuetify"}
        }],
        select: 'Custom interface and layout',
        items: [
          'Web site design',
          'Seo optimization',
          'CMS integrations (Wordpress)',
          'Newsletter Campaign',
          'Logo Design',
        ]
      }
    }
  }
</script>
