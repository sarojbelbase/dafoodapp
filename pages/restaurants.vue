<template>
  <main class="container restaurants">
    <h1>Restaurants</h1>
    <restaurantinfo />
  </main>
</template>

<script>
import restaurantinfo from "@/components/restaurantinfo.vue";

export default {
  components: {
    restaurantinfo
  }
};
</script>

<style lang="scss" scoped>
</style>