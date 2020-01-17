<template>
  <div>
      <h1>This is page 1</h1>
      <p>Vuex Store: {{ products }}</p>
      <img style="width: 30%" src="../images/2.jpg"/>
      <vaadin-text-field label="Text Area Label" placeholder="Write something ..."></vaadin-text-field>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import "@vaadin/vaadin-text-field";

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

