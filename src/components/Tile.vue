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
      amount: [Number, String],
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .tile .number {
    font-size: 3rem;
  }

  @media only screen and (max-device-width: 768px) {
    .tile {
      min-width: 100vw;
      margin: 0 10vh 0 0;
    }

    .tile .number {
      margin-bottom: 2vh;
    }
  }
</style>