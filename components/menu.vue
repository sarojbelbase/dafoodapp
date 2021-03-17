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
  computed: {
    ...mapGetters(["cartCount"])
  }
};
export default {
  components: {
    applogo
  }
};
</script>

<style lang="scss" scoped>
</style>