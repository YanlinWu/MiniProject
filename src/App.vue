<template>
  <div id="app">
    <Search />
    <GoogleMap />
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import GoogleMap from "./components/GoogleMap.vue";

export default {
  name: "App",
  components: {
    GoogleMap,
    Search,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>