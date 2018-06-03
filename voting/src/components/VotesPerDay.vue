<template>
  <div class="charts">
    <h1>Votes per Day</h1>
    <VotesPerDayChart :voting="voting" />
  </div>
</template>

<script>
  import axios from 'axios';
  import VotesPerDayChart from './charts/VotesPerDayChart.vue';

  export default {
    name: 'VotesPerDay',
    props: {},
    components: {
      VotesPerDayChart,
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