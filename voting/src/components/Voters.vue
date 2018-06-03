<template>
  <div class="charts">
    <h1>Voters</h1>
    <VotersChart :voting="voting" />
  </div>
</template>

<script>
  import axios from 'axios';
  import VotersChart from './charts/VotersChart.vue';

  export default {
    name: 'Voters',
    props: {},
    components: {
      VotersChart,
    },
    data() {
      return {
        voting: {},
      };
    },
    mounted() {
      axios.get("voting_analysis.json")
        .then((response) => { this.voting = response.data; });
    },
  }
</script>