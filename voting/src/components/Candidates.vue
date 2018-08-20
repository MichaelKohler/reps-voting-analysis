<template>
  <div class="charts">
    <h1>Reps Voting Analysis - Candidates</h1>
    <CandidateVoteChart
      title="Votes/Views per Candidate"
      :voting="votingData"
    />
    <CandidatePossibleVotesChart
      title="Ratio Possible Votes per Candidate"
      subtitle="(1.0 if all voters voted max points for a candidate)"
      :voting="votingData"
    />
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import CandidateVoteChart from './charts/CandidateVoteChart';
  import CandidatePossibleVotesChart from './charts/CandidatePossibleVotesChart';

  export default {
    name: 'Candidates',
    props: {},
    components: {
      CandidateVoteChart,
      CandidatePossibleVotesChart,
    },
    computed: {
      ...mapState([
        'votingData'
      ]),
    },
  }
</script>