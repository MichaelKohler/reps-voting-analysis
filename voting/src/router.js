import Vue from 'vue';
import Router from 'vue-router';
import General from './components/General.vue';
import Candidates from './components/Candidates.vue';
import Voters from './components/Voters.vue';
import VotersPerCountry from './components/VotersPerCountry.vue';
import VotesPerDay from './components/VotesPerDay.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'General',
      component: General
    },
    {
      path: '/candidates',
      name: 'Candidates',
      component: Candidates
    },
    {
      path: '/voters',
      name: 'Voters',
      component: Voters
    },
    {
      path: '/votersPerCountry',
      name: 'VotersPerCountry',
      component: VotersPerCountry
    },
    {
      path: '/votesPerDay',
      name: 'VotesPerDay',
      component: VotesPerDay
    }
  ]
})