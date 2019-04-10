<template>
  <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
    <img :src="imageUrl" height="150" v-if="imageUrl"/>
    <v-text-field label="Picture Choice" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
    <input
      type="file"
      style="display: none"
      ref="image"
      accept="image/*"
      @change="onFilePicked"
    >
  </v-flex>
</template>

<script>
export default {
  name: 'VuetifyInputPictureChoice',
  data: () => ({
    title: "Image Upload",
    dialog: false,
    imageName: '',
    imageUrl: '',
    imageFile: ''
  }),
  methods: {
    pickFile () {
      this.$refs.image.click()
    },
    onFilePicked(e){
      const files = e.target.files
      if(files[0] !== undefined) {
        this.imageName = files[0].name
        if(this.imageName.lastIndexOf('.') <= 0) {
          return
        }
        const file = new FileReader()
        file.readAsDataURL(files[0])
        file.addEventListener('load', () => {
          this.imageUrl = file.result
          this.imageFile = file[0] // Here is an image file that can be sent to server
        })
      } else {
        this.imageName = ''
        this.imageFile = ''
        this.imageUrl = ''
      }
    }
  }
}
</script>
