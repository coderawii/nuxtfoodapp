<template>
  <div>
    <label :for="select">What {{ select }} do you want?</label>

    <select
      @change="$emit('change', $event.target.value)"
      :id="select"
      :name="select"
    >
      <option value>-- Please select a {{ select }} </option>
      <option v-for="option in selectOptions" :key="option" :value="option">{{
        option
      }}</option>
    </select>
    <!-- zasto ovde koristimo child emit (vemit-child) odn props a ne vuex recimo. jer vuex tj store kor kada citava app (tj sve komponente) treba da zna za nesto, tipa cart, tipa fooddata, ali za filtering nema potrebe cela app da zna. OVa AppSelect je child, a parent je u pages/restaurants.vue -->
  </div>
</template>

<script>
export default {
  props: {
    select: {
      type: String,
      default: "cuisine"
    },
    selectOptions: {
      type: Array,
      default: () => ["tacos", "pizza", "dim sum"] //! kada koristimo za props array, obavezno default mora biti f-ja
    }
  }
};
</script>

<style lang="scss" scoped></style>
