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
    <div class="smallnum" v-if="cartCount > 0">{{ cartCount }}</div>
    <nuxt-link to="/cart">Cart</nuxt-link>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import applogo from "@/components/logo.vue";

export default {
  components: {
    applogo
  },
  computed: {
    ...mapGetters(["cartCount"])
  }
};
</script>

<style lang="scss" scoped>
</style>