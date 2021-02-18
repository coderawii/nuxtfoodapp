<template>
  <main class="container restaurant">
    <h1>Restaurants</h1>
    <AppRestaurantInfo />
  </main>
  <!-- koristimo tag <main></main> za svaku single page -->
</template>

<script>
import AppRestaurantInfo from "@/components/AppRestaurantInfo.vue";

export default {
  components: {
    AppRestaurantInfo
  }
};
</script>

<style lang="scss" scoped></style>
