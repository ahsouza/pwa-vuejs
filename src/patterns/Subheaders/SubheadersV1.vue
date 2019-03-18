
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

    <v-container
      v-for="type in types"
      :key="type"
      fluid
      grid-list-md
      grey
      lighten-4
    >
      <v-subheader>{{ type }}</v-subheader>

      <v-layout row wrap>
        <v-spacer></v-spacer>
        <v-flex
          v-for="card in cards"
          :key="card"
          xs12
          sm6
          md4
        >
          <v-card>
            <v-img
              :src="`https://picsum.photos/200/300?image=${getImage()}`"
              height="300px"
            >
              <span
                class="headline white--text pl-3 pt-3"
                v-text="card.title"
              ></span>
            </v-img>

            <v-card-actions class="white justify-center">
              <v-btn
                v-for="(social, i) in socials"
                :key="i"
                :color="social.color"
                class="white--text"
                fab
                icon
                small
              >
                <v-icon>{{ social.icon }}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<style scoped>


</style>

<script>

export default {
  name: 'SubheadersV1',
  data: () => ({

  })

}
</script>
