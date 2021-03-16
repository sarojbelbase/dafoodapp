<template>
  <main class="container restaurant">
    <div class="restaurantheading">
      <h1>Restaurants</h1>
      <appselect @change="selectedRestaurant = $event" />
    </div>
    <restaurantinfo :givensource="filteredRestaurants" />
  </main>
</template>

<script>
import restaurantinfo from "@/components/restaurantinfo.vue";
import { mapState } from "vuex";

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
  },
  computed: {
    ...mapState(["fooddata"]),
    filteredRestaurants() {
      if (this.selectedRestaurant) {
        return this.fooddata.filter(food => {
          let name = food.name.toLowerCase();
          return name.includes(this.selectedRestaurant);
        });
      }
      return this.fooddata;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>