<template>
  <main class="container restaurant">
    <div class="restaurantheading">
      <h1>Restaurants</h1>
      <appselect />
    </div>
    <restaurantinfo />
  </main>
</template>

<script>
import restaurantinfo from "@/components/restaurantinfo.vue";

import appselect from "@/components/select.vue";

export default {
  components: {
    appselect,
    restaurantinfo
  }
};
</script>

<style lang="scss" scoped>
</style>