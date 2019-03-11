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
export default {
  name: 'Typeform',
  data: () => ({
    message: 'Seu username',
    msgWelcome:'Bem vindo',

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
