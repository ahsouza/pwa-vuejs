<template>
  <v-card
    flat
    tile
  >
    <v-toolbar
      color="cyan"
      dark
    >
      <v-toolbar-side-icon></v-toolbar-side-icon>

      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>


    </v-toolbar>

  </v-card>
</template>

<style scoped>
h1 {
  color: red
}
ul {
  list-style: none;
  display: flex;
  padding: 0;
  margin-right: 5%;
}
li {
  padding: 5px 15px 5px 0;

}
li a {
  text-decoration: none;
  font-family: Roboto;
  font-size: 16px;
  color: #fff;
}
li a:hover {
  color: #18ffff;
}
</style>

<script>

export default {
  name: 'Subheader',
  data: () => ({
    login: true,
    usernames: [
      { login: 'ahsouza'},
      { login: 'anibal'},
      { login: 'henrique'},
      { login: 'joão'},
      { login: 'maria'}
    ],
    links: [
      { name: 'Início', to: '/'},
      { name: 'Sobre', to: '/about'},
      { name: 'Contato', to: '/contacts'},
      { name: 'Loja', to: '/store'},
      { name: '404', to: '/random-bad-url'}
    ],
    types: ['Places to Be', 'Places to See'],
    cards: ['Good', 'Best'],
    socials: [
      {
        icon: 'fab fa-facebook',
        color: 'indigo'
      },
      {
        icon: 'fab fa-linkedin',
        color: 'cyan darken-1'
      },
      {
        icon: 'fab fa-instagram',
        color: 'red lighten-3'
      }
    ]
   }),

   methods: {
     getImage () {
       const min = 550
       const max = 560

       return Math.floor(Math.random() * (max - min + 1)) + min
     }
   }
}
</script>
