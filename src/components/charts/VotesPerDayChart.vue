<template>
  <div class="votesPerDay-chart">
    <CustomBarChart :chart-data="datacollection" />
  </div>
</template>

<script>
  import CustomBarChart from './generic/CustomBarChart';

  export default {
    name: 'CandidateVoteChart',
    props: {
      voting: Object,
    },
    computed: {
      datacollection() {
        return {
          labels: Object.keys(this.voting.votedPerDate),
          datasets: [{
            label: 'Votes per Day',
            backgroundColor: '#f87979',
            data: Object.values(this.voting.votedPerDate),
          }],
        };
      },
    },
    components: {
      CustomBarChart,
    },
  }
</script>
