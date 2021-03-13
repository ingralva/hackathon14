<template>
<div class="content">
  <!-- <img alt="Vue logo" src="./assets/fondo-video.jpg">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header/>
    <Content/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Content from './components/Content.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Header,
    Content
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.content {
        width: 900px;
        margin: 0 auto;
    }

.Alineacion-Justificado {
  text-align: justify;
}

/* MOBILE */
@media (max-width: 576px) {
  .content {
      width: 100%;
      margin: 0 auto;
  }
}
</style>
