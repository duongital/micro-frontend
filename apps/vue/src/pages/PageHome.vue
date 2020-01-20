<template>
  <div class="text-center">
    <h1 class="mt-8">Home Page: {{ firstName }}</h1>
    <p>Powered by VueJS, ReactJS, LitElement</p>
    <p class="text-yellow-500">styled by: Tailwind CSS</p>
    <br />
    <a href="/react"
      >go to ReactJS
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Button
      </button>
    </a>
    <br />

    <br />
    <router-link to="/page1">
      <a>Vue Router: Go to Page 1</a>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Button
      </button>
    </router-link>
    <gvt-button>Button</gvt-button>
    <gvt-button filled>Filled Button</gvt-button>
    <vaadin-button ref="button">Vaadin Button</vaadin-button>
  </div>
</template>

<script>
import "@graviton/button";
import "@vaadin/vaadin-button";

export default {
  name: "p-home",
  data() {
    return {
      firstName: "Micro Frontend"
    };
  }
};
</script>
