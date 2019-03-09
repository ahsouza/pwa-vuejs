<template>
  <div>
    <Form />

    <p>Olá {{ message }}...  </p>
    <input v-model="message">


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
    messages: [
      { welcome: 'Seja bem vindo(a)', bye: 'Bye Bye!'}
    ]
  })

}
</script>
