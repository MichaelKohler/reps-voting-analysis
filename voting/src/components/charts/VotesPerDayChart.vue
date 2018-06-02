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
          labels: this.voting.analysis && Object.keys(this.voting.analysis.votedPerDate),
          datasets: [{
            label: 'Votes per Day',
            backgroundColor: '#f87979',
            data: this.voting.analysis && Object.values(this.voting.analysis.votedPerDate),
          }],
        };
      },
    },
    components: {
      CustomBarChart,
    },
  }
</script>
