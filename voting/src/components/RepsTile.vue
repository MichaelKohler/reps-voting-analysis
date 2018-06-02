<template>
  <div class="tile">
    <p class="number">{{ this.amount }}</p>
    <p>{{ this.title }}</p>
  </div>
</template>

<script>
  export default {
    name: 'RepsTile',
    props: {
      amount: Number,
      title: String,
    },
    components: {},
  }
</script>

<style scoped>
  .tile {
    min-width: 15vw;
    min-height: 15vw;
    margin: 20px;
    background-color: #f87979;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .tile .number {
    font-size: 3rem;
  }
</style>