<template>

<div class="container">
   <h1>Cupcake ipsum</h1>
   <h2>This is a typeform embedded as a widget</h2>


   <div id="my-embedded-typeform"
        style="width: 100%; height: 300px;"></div>

   <p>Tiramisu danish powder gingerbread sugar plum wafer biscuit marzipan. Danish soufflé oat cake pie liquorice dessert candy croissant. Biscuit candy gummi bears cookie sweet. Marshmallow jujubes wafer tart lollipop liquorice. Toffee candy liquorice macaroon.</p>


    <Form />

    <p>Olá {{ message }}...  </p>
    <input v-model="message">



    <ul >
      <li v-repeat='frutas'>
        {{$value}}
      </li>
    </ul>

    <h1>Home</h1>
    <v-btn large="true" color="#2979FF">Success</v-btn>
    <v-btn color="#6200EA">Error</v-btn>
    <v-btn color="#00E676">Warning</v-btn>
    <v-btn color="#BF360C">Info</v-btn>

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
  width: 600px;
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
