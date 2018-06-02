<template>
  <div id="app">
    <Navigation/>
    <router-view></router-view>
  </div>
</template>

<script>
  import VueCharts from 'vue-chartjs';
  import router from './router';

  import Navigation from './components/Navigation.vue';

  export default {
    name: 'app',
    router,
    components: {
      VueCharts,
      Navigation,
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5vh;
  margin-bottom: 5vh;
}
</style>
