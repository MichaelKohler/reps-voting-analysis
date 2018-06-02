<template>
  <div class="candidates-chart">
    <h2>{{title}}</h2>
    <h3>{{subtitle}}</h3>
    <CustomBarChart :chart-data="datacollection" />
  </div>
</template>

<script>
  import CustomBarChart from './generic/CustomBarChart';

  export default {
    name: 'CandidateVoteChart',
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
            label: 'Votes',
            backgroundColor: '#f87979',
            data: this.voting.analysis && this.voting.analysis.nominees.map((nominee) => nominee.votes),
          }, {
            label: 'YT Video Views',
            backgroundColor: '#0099CC',
            data: this.voting.analysis && this.voting.analysis.nominees.map((nominee) => nominee.videoViews),
          }],
        };
      },
    },
    components: {
      CustomBarChart,
    },
  }
</script>
