<template>
  <div class="text-center">
    <h1>This is page 1</h1>
    <p class="mb-8">Vuex Store: {{ products }}</p>
    <!-- <img class="mt-8" style="width: 30%; margin: auto" src="../images/2.jpg" /> -->
    <p class="mt-8">Render from Lit Element:</p>
    <my-input ref="textfield"></my-input>
    <p class="mb-12">vue binding: {{ bindingData }}</p>
    <dile-rounded-button ref="button">Click Here</dile-rounded-button>
    <br />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

import "merisier-web-component/my-input";
import "merisier-web-component/dile-rounded-button";

export default {
  name: "p-one",
  data() {
    return {
      bindingData: ""
    };
  },
  mounted() {
    this.$refs.button.addEventListener("click", event => {
      this.bindingData = this.$refs.textfield.prop1;
    });
  },
  computed: {
    ...mapGetters({
      products: "getProducts"
    })
  }
};
</script>
