<template>
  <Slide class="SlideBurger" right>
    <a href="#">
      <span class="spanNavBurger">Home</span>
    </a>
    <a href="#">
      <span class="spanNavBurger">About us</span>
    </a>
    <a href="#">
      <span class="spanNavBurger">Buy car</span>
    </a>
    <a href="#">
      <span class="spanNavBurger">Sell car</span>
    </a>
    <a href="#">
      <span class="spanNavBurger">Mail us</span>
    </a>
    <a href="#">
      <span class="spanNavBurger">Gallery</span>
    </a>
  </Slide>
</template>

<script>
import { Slide } from "vue-burger-menu";
export default {
  components: {
    Slide,
  },
};
</script>

<style>
.SlideBurger {
  display: none;
}
.spanNavBurger {
  width: 70%;
  transition: all 0.5s ease;
  padding: 10px;
  border-radius: 20px;
}
.spanNavBurger:hover {
  transform: rotateY(45deg);
  background-color: black;
}
@media screen and (max-width: 770px) {
  .SlideBurger {
    display: block;
  }
}
</style>
