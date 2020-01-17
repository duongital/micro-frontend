<template>
  <div class="error-container">
    <h1 class="error-heading">404</h1>
    <p class="error-description">Sorry, we couldn't find the page you're looking for</p>
  </div>
</template>

<script>
export default {
  name: "p-not-found"
};
</script>

<style>
.error-container {
  background: #f7f7f7;
  height: 100%;
  width: 100%;
}

.error-heading {
  margin-top: 0px;
  text-align: center;
  font-size: 210px;
  padding-top: 20%;
  color: #789ca8;
  font-family: Gotham, Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.error-description {
  text-align: center;
  font-size: 22px;
  color: #789ca8;
  font-family: Gotham, Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

@media (max-width: 767px) {
  .error-heading {
    font-size: 110px;
  }
}
</style>
