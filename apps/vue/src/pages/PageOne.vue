<template>
  <div class="text-center">
      <h1>This is page 1</h1>
      <p class="mb-8">Vuex Store: {{ products }}</p>
      <img class="mt-8" style="width: 30%; margin: auto" src="../images/2.jpg"/>
      <p class="mt-8">Render from Lit Element:</p>
      <vaadin-text-field ref="textfield" label="Text Area Label" placeholder="Write something ..."></vaadin-text-field>
      <vaadin-button ref="button">Vaadin Button</vaadin-button>
      <p> vue binding: {{ bindingData }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import "@vaadin/vaadin-text-field";
import "@vaadin/vaadin-button";

export default {
  name: "p-one",
  data() {
    return {
      bindingData: ""
    }
  },
  mounted() {
    console.log('component mounted');
    this.$refs.button.addEventListener('click', (event) => {
      console.log('hello');
      this.bindingData = this.$refs.textfield.value;
    })
  },
  computed: {
    ...mapGetters({
      products: "getProducts",
    })
  },
};
</script>

