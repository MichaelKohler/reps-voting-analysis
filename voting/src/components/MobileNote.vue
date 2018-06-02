<template>
  <div class="mobilenote">
    <p>
      Please note that chart views are hard to get right on mobile, therefore we didn't do any optimization for
      mobile views. We gladly appreciate any PR that does so :)
    </p>
  </div>
</template>

<script>
  export default {
    name: 'MobileNote',
  }
</script>

<style scoped>
  .mobilenote {
    display: none;
    background-color: #f87979;
    padding: 2vh;
    margin-bottom: 3vh;
    font-weight: bold;
  }

  @media only screen and (max-device-width: 850px) {
    .mobilenote {
      display: block;
    }
  }

  p {
  }
</style>