<template>

  <div class="container">
     <div id="my-embedded-typeform" style="width: 100%; height: 600px;"></div>

      <v-btn color="error" fab large dark>
        <v-icon>alarm</v-icon>
      </v-btn>

      <v-btn color="warning" fab dark>
        <v-icon>account_circle</v-icon>
      </v-btn>

  </div>
</template>

<style scoped>

h1 {
  color: blue
}
.container {
  margin: 0 auto;
  width: 100%;
}

.container p, .container h2 {
  text-align: center;
}

</style>

<script>
import Form from './vuetify/Form'


export default {
  name: 'Home',
  components: {
    Form
  },
  data: () => ({
    message: 'Seu username',
    msgWelcome:'Bem vindo',
    frutas: ['Banana', 'Abacate', 'Melancia', 'Manga' ],
    projetos: [
      { projetoNome: 'Desenvolvimento De Software'},
      { projetoNome: 'Desenvolvimento De E-commerce'},
      { projetoNome: 'Desenvolvimento De Campanhas Publicitária'},
      { projetoNome: 'Desenvolvimento De Sites'}
    ],
    messages: [
      { welcome: 'Seja bem vindo(a)', bye: 'Bye Bye!'}
    ]
  })

}


  window.addEventListener("DOMContentLoaded", function() {
    var el = document.getElementById("my-embedded-typeform")

    window.typeformEmbed.makeWidget(el, "https://admin.typeform.com/to/cVa5IG", {
      hideFooter: true,
      hideHeaders: true,
      opacity: 0
    })
  })
</script>
