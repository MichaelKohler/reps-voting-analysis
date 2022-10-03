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
      path: '/:votingKey?',
      name: 'General',
      component: General
    },
    {
      path: '/:votingKey?/candidates',
      name: 'Candidates',
      component: Candidates
    },
    {
      path: '/:votingKey?/voters',
      name: 'Voters',
      component: Voters
    },
    {
      path: '/:votingKey?/votersPerCountry',
      name: 'VotersPerCountry',
      component: VotersPerCountry
    },
    {
      path: '/:votingKey?/votesPerDay',
      name: 'VotesPerDay',
      component: VotesPerDay
    }
  ]
})