import Vue from 'vue';
import Router from 'vue-router';
import GeneralCharts from './components/GeneralCharts.vue';
import RepsCharts from './components/RepsCharts.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'General',
      component: GeneralCharts
    },
    {
      path: '/candidates',
      name: 'RepsCharts',
      component: RepsCharts
    }
  ]
})