<template>
  <section class="full-nav">
    <div class="navigation">
      <ul>
        <li v-for="voting in availableVotings" :key="voting">
          <span class="bold">
            <a v-on:click="selectVoting(voting)">{{ voting }}</a>
          </span>
        </li>
      </ul>
    </div>
    <div class="navigation">
      <ul>
        <li><router-link :to="votingURL">General</router-link></li>
        <li><router-link :to="votingURL + '/candidates'">Candidates</router-link></li>
        <li><router-link :to="votingURL + '/voters'">Voters</router-link></li>
        <li><router-link :to="votingURL + '/votersPerCountry'">Voters per Country</router-link></li>
        <li><router-link :to="votingURL + '/votesPerDay'">Votes per Day</router-link></li>
      </ul>
    </div>
  </section>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'Navigation',
    props: {},
    components: {},
    methods: {
      selectVoting: function(votingKey) {
        this.$store.dispatch('changeVoting', votingKey);
      }
    },
    computed: {
      ...mapState([
        'votingData',
        'availableVotings',
        'votingURL',
        'route',
      ]),
    },
  }
</script>

<style scoped>
  .full-nav {
    margin-bottom: 10vh;
  }

  .navigation a {
    cursor: pointer;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  ul li {
    display: inline;
    padding: 0 5vh;
  }

  a {
    color: #0099cc;
    text-decoration: none;
  }

  @media only screen and (max-device-width: 768px) {
    ul li {
      display: block;
    }
  }
</style>