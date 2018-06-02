<template>
  <div class="navigation">
    <ul>
      <li><router-link to="/">General</router-link></li>
      <li><router-link to="/candidates">Candidates</router-link></li>
      <li><router-link to="/voters">Voters</router-link></li>
      <li><router-link to="/votersPerCountry">Voters per Country</router-link></li>
      <li><router-link to="/votesPerDay">Votes per Day</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Navigation',
    props: {},
    components: {},
  }
</script>

<style scoped>
  .navigation {
    margin-bottom: 10vh;
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
</style>