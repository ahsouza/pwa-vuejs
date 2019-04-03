<template>
  <v-layout spacing-playground class="pa-2">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="4.75"></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0"><slot name="card-title" /></h3>
            <div><slot name="content-card"/>dadadadadaddadad</div>
            <div><slot name="content-card"/>dadadadadaddadad</div>
            <div><slot name="content-card"/>dadadadadaddadad</div>
            <div><slot name="content-card"/>dadadadadaddadad</div>
            <div><slot name="content-card"/>dadadadadaddadad</div>
            <div><slot name="content-card"/>dadadadadaddadad</div>
            <div><slot name="content-card"/>dadadadadaddadad</div>
            <div><slot name="content-card"/>dadadadadaddadad</div>
            <div><slot name="content-card"/>dadadadadaddadad</div>
            <div><slot name="content-card"/>dadadadadaddadad</div>
            <div><slot name="content-card"/>dadadadadaddadad</div>
            <div><slot name="content-card"/>dadadadadaddadad</div>
            <div><slot name="content-card"/>dadadadadaddadad</div>
          </div>
        </v-card-title>

        <v-card-actions>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style scoped>

</style>

<script>
  export default {
    name: 'VuetifyCards',
    data () {
      return {
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
      }
    }
  }
</script>
