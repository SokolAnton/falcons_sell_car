<template>
  <div class="WhatIWant">
    <div class="WhatIWant--container container">
      <h1>What I want ?</h1>
      <div class="container--btnChoose btnChoose">
        <button
          type="button"
          class="burronChooseIwant"
          @click="component = 'SellFrom'"
        >
          Sell car
          <img src="@/assets/img/sell.png" alt="" width="40" />
        </button>
        <button
          type="button"
          class="burronChooseIwant"
          @click="component = 'BuyForm'"
        >
          Buy car
          <img src="@/assets/img/find.png" alt="" width="40" />
        </button>
        <button type="button" class="burronChooseIwant" @click="component = ''">
          Close
          <img src="@/assets/img/close.png" alt="" />
        </button>
      </div>
      <div class="components--space">
        <keep-alive>
          <component :is="component"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import SellFrom from "@/components/body/SellForm.vue";
import BuyForm from "@/components/body/BuyForm.vue";

export default {
  components: { SellFrom, BuyForm },
  data() {
    return {
      component: "",
    };
  },
};
</script>

<style lang="scss">
.WhatIWant {
  padding: 50px;
  background-color: #a9a9a933;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    .btnChoose {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      width: 70%;
      @media screen and (max-width: 540px) {
        flex-direction: column;
      }
    }
  }
}
.burronChooseIwant {
  margin: 10px;
  background-color: white;
  color: black;
  font-style: italic;
  padding: 10px 5px;
  border-radius: 10px;
  display: block;
  width: 40%;
  transition: all 0.5s ease;
  @media screen and (max-width: 550px) {
    width: 100%;
  }
  &:hover {
    transform: scale(1.1);
    -webkit-box-shadow: 10px 10px 39px 4px rgba(48, 8, 48, 1);
    -moz-box-shadow: 10px 10px 39px 4px rgba(48, 8, 48, 1);
    box-shadow: 10px 10px 39px 4px rgba(48, 8, 48, 1);
  }
}
.components--space {
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
</style>
