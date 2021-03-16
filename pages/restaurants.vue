<template>
  <main class="container restaurant">
    <div class="restaurantheading">
      <h1>Restaurants</h1>
      <appselect @change="selectedRestaurant = $event" />
      <pre>{{ $data }}</pre>
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
  },
  data() {
    return {
      selectedRestaurant: ""
    };
  }
};
</script>

<style lang="scss" scoped>
</style>