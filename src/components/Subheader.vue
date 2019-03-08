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
</style>

<script>
module.exports = {
  data: () => ({
    types: ['Places to Be', 'Places to See'],
  cards: ['Good', 'Best', 'Finest'],
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
