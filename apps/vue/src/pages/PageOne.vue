<template>
  <div class="text-center">
    <h1>This is page 1</h1>
    <p class="mb-8">Vuex Store: {{ products }}</p>
    <img class="mt-8" style="width: 30%; margin: auto" src="../images/2.jpg" />
    <p class="mt-8">Render from Lit Element:</p>
    <vaadin-text-field
      ref="textfield"
      label="Text Area Label"
      placeholder="Write something ..."
    ></vaadin-text-field>
    <vaadin-button ref="button">Vaadin Button</vaadin-button>
    <p class="mb-12">vue binding: {{ bindingData }}</p>
    <mwc-button outlined label="standard"></mwc-button>
    <mwc-button raised label="raised"></mwc-button>
    <dile-checkbox>Label for the element</dile-checkbox>
    <br/>
    <my-element></my-element>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import "@vaadin/vaadin-text-field";
import "@vaadin/vaadin-button";
import "@material/mwc-button";
// import "dile-checkbox/dile-checkbox";
import "merisier-ui/checkbox";
import "merisier-ui/my-element";

export default {
  name: "p-one",
  data() {
    return {
      bindingData: ""
    };
  },
  mounted() {
    this.$refs.button.addEventListener("click", event => {
      this.bindingData = this.$refs.textfield.value;
    });
  },
  computed: {
    ...mapGetters({
      products: "getProducts"
    })
  }
};
</script>
