<template>
  <div class="charts">
    <h1>Reps Voting Analysis - Spring 2018</h1>
    <section class="tiles">
      <RepsTile :amount="this.voting.analysis.nominees.length" title="Total nominees" />
      <RepsTile :amount="this.voting.analysis.totalVoters" title="Total voters" />
      <RepsTile :amount="this.voting.analysis.totalElegible" title="Total Elegible" />
      <RepsTile :amount="this.votersRatioInPercent" title="% voted" />
    </section>
  </div>
</template>

<script>
  import axios from 'axios';
  import RepsTile from './RepsTile.vue';

  export default {
    name: 'GeneralCharts',
    props: {},
    components: {
      RepsTile,
    },
    computed: {
      votersRatioInPercent() {
        const percentage = this.voting.analysis.totalVotersRatio * 100;
        return percentage.toFixed(2);
      }
    },
    data() {
      return {
        voting: {},
      };
    },
    mounted() {
      axios.get("/voting_analysis.json")
        .then((response) => { this.voting = response.data; });
    },
  }
</script>

<style scoped>
  .tiles {
    display: flex;
    margin: 20vh 10vw;
    justify-content: space-between;
  }
</style>