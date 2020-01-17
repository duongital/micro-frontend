<template>
  <div>
    <h1>Home Page: {{ firstName }}</h1>
    <p>Powered by VueJS</p>
    <br/>
    <a href="/react">go to ReactJS</a>
    <br/>
    <p class="text-yellow-500">tailwind css: yellow one </p>
    <br/>
    <router-link to="/page1">
        <a>Vue Router: Go to Page 1</a>
    </router-link>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Button
    </button>
  </div>
</template>

<script>
export default {
  name: "p-home",
  data() {
    return {
      firstName: "Duong"
    };
  }
};
</script>
