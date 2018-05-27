<template>
  <div class="charts">
    <h1>{{ msg }}</h1>
    <CandidateVoteChart
      title="Votes/Views per Candidate"
      :voting="voting"
    />
    <CandidatePossibleVotesChart
      title="Ratio Possible Votes per Candidate"
      subtitle="(1.0 if all voters voted max points for a candidate)"
      :voting="voting"
    />
  </div>
</template>

<script>
  import axios from 'axios';
  import CandidateVoteChart from './charts/CandidateVoteChart';
  import CandidatePossibleVotesChart from './charts/CandidatePossibleVotesChart';

  export default {
    name: 'RepsCharts',
    props: {
      msg: String,
    },
    components: {
      CandidateVoteChart,
      CandidatePossibleVotesChart,
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