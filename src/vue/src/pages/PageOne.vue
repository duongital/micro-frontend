<template>
  <div>
      <h1>This is page 1</h1>
      <p>Vuex Store: {{ products }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";


export default {
  name: "p-one",
  mounted() {
    console.log('component mounted');
  },
  computed: {
    ...mapGetters({
      products: "getProducts",
    })
  },
};
</script>

