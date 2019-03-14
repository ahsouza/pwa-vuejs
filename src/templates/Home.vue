<template>

  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
     <Typeform />
    </v-layout>
  </v-container>

</template>

<style scoped>

h1 {
  color: blue
}

.container {
  margin: 0 auto;
  width: 100%;
  overflow-y: hidden;
}
#my-embedded-typeform::-webkit-scrollbar
{
	width: 12px;
	background-color: #F5F5F5;
  overflow-y: hidden;
}

#my-embedded-typeform::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #D62929;
  overflow-y: hidden;
}


#my-embedded-typeform {
  overflow-y: hidden;
}

.container p, .container h2 {
  text-align: center;
}

</style>

<script>
import Form from './../vuetify/Form'
import Typeform from './../typeform/Typeform'


export default {
  name: 'Home',
  components: {
    Form,
    Typeform
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
