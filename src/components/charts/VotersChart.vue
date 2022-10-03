<template>
  <div class="votesPerDay-chart">
    <p>Split up by when Reps have joined the program (in months)</p>
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
          labels: Object.keys(this.voting.joinedInfo),
          datasets: [{
            label: 'voted',
            backgroundColor: '#f87979',
            data: Object.keys(this.voting.joinedInfo).map((bucket) => {
              return this.voting.joinedInfo[bucket].voted;
            }),
          }, {
            label: 'total',
            backgroundColor: '#0099CC',
            data: Object.keys(this.voting.joinedInfo).map((bucket) => {
              return this.voting.joinedInfo[bucket].total;
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
