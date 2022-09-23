<template>
  <div class="carousel3D">
    <carousel-3d>
      <slide class="slideItem sliderItem1" :index="0">
        <span> BMW <sup>Scroll me</sup> </span>
      </slide>
      <slide class="slideItem sliderItem2" :index="1">
        <span> Audi <sup>Scroll me</sup></span>
      </slide>
      <slide class="slideItem sliderItem3" :index="2">
        <span> Hyundai <sup>Scroll me</sup></span>
      </slide>
      <slide class="slideItem sliderItem4" :index="3">
        <span> Mersedes Benz <sup>Scroll me</sup></span>
      </slide>
      <slide class="slideItem sliderItem5" :index="4">
        <span> Wolkswagen <sup>Scroll me</sup></span>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  components: {
    Carousel3d,
    Slide,
  },
};
</script>

<style lang="scss">
.slideItem {
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.slideItem span {
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 24px;
  font-weight: 700;
}
.sliderItem1 {
  background-image: url(@/assets/img/bmw.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
.sliderItem2 {
  background-image: url(@/assets/img/audi.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
.sliderItem3 {
  background-image: url(@/assets/img/tucson.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
.sliderItem4 {
  background-image: url(@/assets/img/mersedesBenz.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
.sliderItem5 {
  background-image: url(@/assets/img/golf.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
.carousel3D {
  padding: 15px;
  margin: 20px;
}
sup {
  visibility: hidden;
}
@media screen and (max-width: 550px) {
  sup {
    visibility: visible;
  }
  .slideItem span {
    font-size: 18px;
  }
}
</style>
