<template>
  <div class="candidates-chart">
    <h2>{{title}}</h2>
    <h3>{{subtitle}}</h3>
    <CustomBarChart :data="datacollection" />
  </div>
</template>

<script>
  import CustomBarChart from './generic/CustomBarChart';

  export default {
    name: 'CandidatePossibleVotesChart',
    props: {
      title: String,
      subtitle: String,
      voting: Object,
    },
    computed: {
      datacollection() {
        return {
          labels: this.voting.analysis && this.voting.analysis.nominees.map((nominee) => nominee.name),
          datasets: [{
            label: 'Ratio from all possible votes',
            backgroundColor: '#0099CC',
            data: this.voting.analysis && this.voting.analysis.nominees.map((nominee) => nominee.ratioOfTotalPossibleVotes),
          }],
        };
      },
    },
    components: {
      CustomBarChart,
    },
  }
</script>
