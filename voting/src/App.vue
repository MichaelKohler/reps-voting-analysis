<template>
  <div id="app">
    <MobileNote />
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script>
  import axios from 'axios';
  import { mapState, mapMutations, mapActions } from 'vuex';
  import VueCharts from 'vue-chartjs';
  import router from './router';
  import store from './store';

  import MobileNote from './components/MobileNote.vue';
  import Navigation from './components/Navigation.vue';

  export default {
    name: 'app',
    router,
    store,
    components: {
      VueCharts,
      MobileNote,
      Navigation,
    },
    computed: {
      ...mapState([
        'votingData'
      ]),
    },
    mounted() {
      axios.get("voting_analysis.json")
        .then((response) => { this.setVotingData(response.data['2018-1']); });
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
