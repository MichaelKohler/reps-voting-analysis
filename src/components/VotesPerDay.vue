<template>
  <div class="charts">
    <h1>Reps Voting Analysis - Votes per Day</h1>
    <VotesPerDayChart v-if="votingData.votedPerDate" :voting="votingData" />
    <p v-if="!votingData.votedPerDate">No data available.</p>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import VotesPerDayChart from './charts/VotesPerDayChart.vue';

  export default {
    name: 'VotesPerDay',
    props: {},
    components: {
      VotesPerDayChart,
    },
    computed: {
      ...mapState([
        'votingData'
      ]),
    },
  }
</script>