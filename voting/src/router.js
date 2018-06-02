import Vue from 'vue';
import Router from 'vue-router';
import General from './components/General.vue';
import Candidates from './components/Candidates.vue';

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
    }
  ]
})