<template>
  <main class="container">
    <appheader />
    <restaurantinfo />
  </main>
</template>

<script>
import appheader from "@/components/appheader.vue";
import restaurantinfo from "@/components/restaurantinfo.vue";

export default {
  components: {
    restaurantinfo,
    appheader
  }
};
</script>
