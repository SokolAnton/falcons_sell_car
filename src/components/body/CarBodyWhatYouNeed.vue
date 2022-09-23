<template>
  <div class="WhatYouNeed">
    <img class="bcgImage" src="@/assets/img/WhatYouNeed.png" alt="" />
    <img class="bcgImageSmall" src="@/assets/img/WhatYouNeedSmall.png" alt="" />
    <div class="container">
      <h1 class="WhatYouNeed--title title">we know what you need</h1>
      <div class="WhatYouNeed--info info">
        <div class="info--left left">
          <div class="left--partners leftFonts bcg">
            240+
            <span> PARTNERS </span>
          </div>
          <div class="left--customers leftFonts bcg">
            92%
            <span> SATISFACTION CUSTOMERS </span>
          </div>
        </div>
        <div class="info--right right">
          <div class="right--about about bcg">
            Better data leads to more performance models. Performant models lead
            to faster deployment.
          </div>
          <div class="right--button button"><a href=""> Get Started</a></div>
        </div>
      </div>
    </div>
    <WhatYouNeedSalesOffer></WhatYouNeedSalesOffer>
  </div>
</template>

<script>
import WhatYouNeedSalesOffer from "./WhatYouNeedSalesOffer.vue";
export default { components: { WhatYouNeedSalesOffer } };
</script>

<style lang="scss">
.WhatYouNeed {
  position: relative;
  z-index: 2;
  //   background-image: url(@/assets/img/WhatYouNeed.png);
  //   background-size: cover;
  //   background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 800;
    font-size: 120px;
    line-height: 141px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    background: linear-gradient(
      90.01deg,
      #ffffff 0.01%,
      rgba(255, 255, 255, 0.3) 49.48%,
      #ffffff 99.99%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      justify-content: space-between;
    }
    .right {
      display: flex;
      flex-direction: column;
      .about {
        font-family: "Plus Jakarta Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 200%;
        letter-spacing: -0.03em;
        max-width: 400px;
      }
      .button {
        background: #ffffff;
        border-radius: 120px;
        max-width: 200px;
        padding: 20px;
        margin-top: 30px;
        font-family: "Plus Jakarta Sans";
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        text-align: center;
        text-transform: uppercase;
        > a {
          color: #1a1a1a;
          text-decoration: none;
        }
      }
    }
  }
}
.leftFonts {
  display: flex;
  flex-direction: column;
  font-family: "Plus Jakarta Display";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 52px;
  > span {
    font-weight: 500;
    font-size: 18px;
    line-height: 200%;
  }
}
.leftFonts + .leftFonts {
  margin-left: 40px;
}
.bcg {
  cursor: pointer;
  align-self: center;
  text-align: center;
  background-color: #808080;
  padding: 10px;
  background-image: linear-gradient(62deg, #808080 0%, #292529 100%);
  transition: all 0.6s ease;
  border: 1px solid black;
  border-radius: 32px;
  &:hover {
    transform: scale(1.1);
    border-color: #292529;
    color: white;
  }
}
.bcgImage {
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
}
.bcgImageSmall {
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
  display: none;
}
@media screen and (max-width: 990px) {
  .bcgImage {
    display: none;
  }
  .bcgImageSmall {
    display: block;
  }
  .info {
    flex-direction: column;
    align-items: center;
  }
  .left {
    margin-bottom: 20px;
  }
  .bcg {
    align-self: auto;
  }
  .title {
    font-size: 50px !important;
  }
}
</style>
