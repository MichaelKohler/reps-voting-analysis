<template>
  <div id="app">
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script>
  import axios from 'axios';
  import { mapState, mapMutations, mapActions } from 'vuex';
  import { sync } from 'vuex-router-sync';
  import VueCharts from 'vue-chartjs';
  import router from './router';
  import store from './store';

  import Navigation from './components/Navigation.vue';

  sync(store, router);

  export default {
    name: 'app',
    router,
    store,
    components: {
      VueCharts,
      Navigation,
    },
    computed: {
      ...mapState([
        'votingData'
      ]),
    },
    mounted() {
      axios.get("voting_analysis.json")
        .then((response) => { this.setVotingData(response.data); });
    },
    methods: {
      ...mapMutations([
        'CHANGE_VOTING_DATA'
      ]),
      ...mapActions([
        'setVotingData'
      ]),
    },
  }
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5vh;
  margin-bottom: 5vh;
}

.bold {
  font-weight: 600;
}
</style>
