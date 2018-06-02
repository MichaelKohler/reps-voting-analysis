<template>
  <div class="votesPerDay-chart">
    <p>Splitted up by when Reps have joined the program (in months)</p>
    <CustomBarChart :chart-data="datacollection" />
  </div>
</template>

<script>
  import CustomBarChart from './generic/CustomBarChart';

  export default {
    name: 'VotersChart',
    props: {
      voting: Object,
    },
    computed: {
      datacollection() {
        return {
          labels: this.voting.analysis && Object.keys(this.voting.analysis.joinedInfo),
          datasets: [{
            label: 'voted',
            backgroundColor: '#f87979',
            data: this.voting.analysis && Object.keys(this.voting.analysis.joinedInfo).map((bucket) => {
              return this.voting.analysis.joinedInfo[bucket].voted;
            }),
          }, {
            label: 'total',
            backgroundColor: '#0099CC',
            data: this.voting.analysis && Object.keys(this.voting.analysis.joinedInfo).map((bucket) => {
              return this.voting.analysis.joinedInfo[bucket].total;
            }),
          }],
        };
      },
    },
    components: {
      CustomBarChart,
    },
  }
</script>
