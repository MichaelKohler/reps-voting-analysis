<template>
  <div class="votersPerCountry-chart">
    <h1>Reps Voting Analysis - Voters per Country</h1>
    <table v-if="votingData.countryInfo">
      <thead>
        <th>Country</th>
        <th>Ratio</th>
        <th>Reps who voted</th>
        <th>Total Reps</th>
      </thead>
      <tbody>
        <tr v-for="country in this.countryData" :key="country.key">
          <td>{{ country.key }}</td>
          <td>{{ country.percentage }} %</td>
          <td>{{ country.voted }}</td>
          <td>{{ country.total }}</td>
        </tr>
      </tbody>
    </table>
    <p v-if="!votingData.countryInfo">No data available.</p>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'VotersPerCountry',
    props: {},
    computed: {
      ...mapState([
        'votingData'
      ]),
      countryData() {
        if (!this.votingData) {
          return [];
        }

        const allCountries = Object.keys(this.votingData.countryInfo).map((countryName) => {
          const countryInfo = this.votingData.countryInfo[countryName];
          const percentage = countryInfo.ratio * 100;
          const fullPercentage = percentage.toFixed(2);

          return {
            key: countryName,
            voted: countryInfo.voted,
            total: countryInfo.total,
            ratio: countryInfo.ratio,
            percentage: fullPercentage,
          };
        });
        const sortedCountries = allCountries.sort((a, b) => sortByVotes(a, b));

        return sortedCountries;
      },
    },
  }

  function sortByVotes(a, b) {
    if (a.ratio > b.ratio) {
      return -1;
    }

    if (b.ratio > a.ratio) {
      return 1;
    }

    return 0;
  }
</script>

<style scoped>
  table {
    width: 100%;
  }

  th {
    background-color: #f87979;
  }

  td {
    width: 25%;
  }
</style>
