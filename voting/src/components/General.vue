<template>
  <div class="charts">
    <h1>Reps Voting Analysis - General</h1>
    <section class="tiles">
      <Tile :amount="this.votingData.nominees.length" title="Total nominees" />
      <Tile :amount="this.votingData.totalVoters" title="Total voters" />
      <Tile :amount="this.votingData.totalEligible" title="Total Eligible" />
      <Tile :amount="this.votersRatioInPercent" title="% voted" />
    </section>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Tile from './Tile.vue';

  export default {
    name: 'General',
    props: {},
    components: {
      Tile,
    },
    computed: {
      ...mapState([
        'votingData'
      ]),
      votersRatioInPercent() {
        const percentage = this.votingData.totalVotersRatio * 100;
        return percentage.toFixed(2);
      },
    },
  }
</script>

<style scoped>
  .tiles {
    display: flex;
    margin: 20vh 10vw;
    justify-content: space-between;
  }

  @media only screen and (max-device-width: 768px) {
    .tiles {
      margin: 0;
      flex-direction: column;
    }
  }
</style>