<template>
  <div class="check">
    <h1>What our partners say</h1>
    <WhatPartnersSaySlide></WhatPartnersSaySlide>
  </div>
</template>

<script>
import WhatPartnersSaySlide from "./WhatPartnersSaySlide.vue";
export default {
  data() {
    return {};
  },
  components: { WhatPartnersSaySlide },
};
</script>

<style lang="scss">
.check h1 {
  font-family: "Raleway";
  font-style: normal;
  font-size: 80px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 94px;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  @media screen and (max-width: 550px) {
    font-size: 40px;
  }
}
.check {
  padding: 50px;
}
</style>
