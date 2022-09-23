<template>
  <!-- FOOOOONTS -->
  <div id="app">
    <nav-header></nav-header>
    <CarBody></CarBody>
    <CarFooter></CarFooter>
    <router-view />
  </div>
</template>
<script>
import NavHeader from "./components/nav/NavHeader.vue";
import CarBody from "./components/body/CarBody.vue";
import CarFooter from "./components/footer/CarFooter.vue";
export default {
  components: { NavHeader, CarBody, CarFooter },
};
</script>
<style lang="scss">
body {
  scroll-behavior: smooth;
}
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  max-width: 90%;
  margin: 0 auto;
}
a {
  text-decoration: none;
}
</style>
