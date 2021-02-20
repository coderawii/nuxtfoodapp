<template>
  <main class="container">
    <AppHeader />
    <AppRestaurantInfo :datasource="fooddata" />
    <!-- <AppRestaurantInfo :datasource="fooddata" /> -->
  </main>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppRestaurantInfo from "@/components/AppRestaurantInfo.vue";
import { mapState } from "vuex";

export default {
  components: {
    AppHeader,
    AppRestaurantInfo
    // AppRestaurantInfo: () =>
    //   import(/* webpackPrefetch: true */ "@/components/AppRestaurantInfo.vue")
  },
  computed: {
    ...mapState(["fooddata"])
  }
};
</script>

<style></style>
