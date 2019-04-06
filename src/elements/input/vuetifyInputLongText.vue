<template>
  <v-textarea v-model="title" label="Digite sua mensagem" :style="styleInputText" counter maxlength="120" full-width single-line></v-textarea>
</template>
<script>
export default {
  name: 'VuetifyInputLongText',
  data() {
    return {
      styleInputText: {
        backgroundColor: '#fff'
      }
    }
  }
}
</script>
