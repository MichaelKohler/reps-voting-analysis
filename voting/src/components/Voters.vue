<template>
  <div class="charts">
    <h1>Reps Voting Analysis - Voters</h1>
    <VotersChart :voting="votingData" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
  import VotersChart from './charts/VotersChart.vue';

  export default {
    name: 'Voters',
    props: {},
    components: {
      VotersChart,
    },
    computed: {
      ...mapState([
        'votingData'
      ]),
    },
  }
</script>