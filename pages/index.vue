<template>
  <main class="container">
    <appheader />
    <restaurantinfo :givensource="fooddata" />
  </main>
</template>

<script>
import { mapState } from "vuex";
import appheader from "@/components/header.vue";
import restaurantinfo from "@/components/restaurantinfo.vue";

export default {
  components: {
    restaurantinfo,
    appheader
  },
  computed: {
    ...mapState(["fooddata"])
  }
};
</script>
