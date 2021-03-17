<template>
  <nav>
    <ul>
      <li>
        <nuxt-link exact to="/">
          <applogo />
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/restaurants">Restaurants</nuxt-link>
      </li>
    </ul>
    <nuxt-link to="/cart">Cart</nuxt-link>
  </nav>
</template>

<script>
import applogo from "@/components/logo.vue";

export default {
  components: {
    applogo
  }
};
</script>

<style lang="scss" scoped>
</style>