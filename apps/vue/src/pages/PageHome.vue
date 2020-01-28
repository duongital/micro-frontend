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
    <br/>
    <p class="mt-12">button created fron btn class</p>
    <button class="btn btn-blue">BTN Button</button>
  </div>
</template>

<script>
export default {
  name: "p-home",
  data() {
    return {
      firstName: "Micro Frontend"
    };
  }
};
</script>
