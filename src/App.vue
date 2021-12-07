<template>
  <MyF1Component></MyF1Component>
</template>

<script>
import MyF1Component from './components/MyF1Component.vue'

export default {
  name: 'App',
  components: {
    MyF1Component,

  }
}
</script>

<style>

@font-face {
  font-family: "F1";
  src: local("F1"),
    url("./assets/Formula1 Display Regular.ttf");
}

body {
  background-color : #252525;
}

* {
  font-family: F1,sans-serif;
}




</style>
