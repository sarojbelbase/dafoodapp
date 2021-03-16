<template>
  <main class="container restaurants">
    <div class="restaurantheading">
      <h1>Restaurants</h1>
    </div>
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