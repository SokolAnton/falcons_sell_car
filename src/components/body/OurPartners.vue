<template>
  <section class="OurPartners">
    <div class="OurPartners--container container">
      <div class="container--title title">
        <h1>Our partners</h1>
      </div>
      <PartnersSlider></PartnersSlider>
    </div>
  </section>
</template>

<script>
import PartnersSlider from "./PartnersSlider.vue";
export default { components: { PartnersSlider } };
</script>

<style lang="scss">
.OurPartners {
  padding: 30px 0;
  background-color: #a9a9a933;
  .container {
    .title {
      > h1 {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 700;
        font-size: 80px;
        line-height: 94px;
        letter-spacing: 1px;
        color: #ffffff;
        text-align: center;
        text-transform: uppercase;
        @media screen and (max-width: 550px) {
          font-size: 40px;
        }
      }
    }
  }
}
</style>
