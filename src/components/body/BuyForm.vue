<template>
  <div class="buyForm">
    <div class="sellForm">
      <h3 class="sellForm--title title">i want buy</h3>
      <div class="buyformAll">
        <div class="buyForm--left">
          <button
            class="customAnother"
            type="button"
            @click="component = 'BMWBuy'"
          >
            BMW
          </button>
          <button
            class="customAnother"
            type="button"
            @click="component = 'AudiBuy'"
          >
            Audi
          </button>
          <button class="customAnother" @click="component = 'MercBuy'">
            Mercedes-Benz
          </button>
          <button class="customAnother" @click="component = 'VolkBuy'">
            Volkswagen
          </button>
          <button class="customAnother" @click="component = 'HuyndaiBuy'">
            Huyndai
          </button>
        </div>
        <br />
        <div class="buyForm--right">
          <keep-alive>
            <component :is="component"></component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BMWBuy from "./BuyComponents/BMWBuy.vue";
import AudiBuy from "./BuyComponents/AudiBuy.vue";
import VolkBuy from "./BuyComponents/VolkBuy.vue";
import MercBuy from "./BuyComponents/MercBuy.vue";
import HuyndaiBuy from "./BuyComponents/HuyndaiBuy.vue";
export default {
  mounted() {
    this.$store.dispatch("getBMW");
  },
  computed: {
    cars() {
      return this.$store.getters.getBMW;
    },
  },
  data() {
    return {
      component: "",
      models: [
        { modelName: "BMW" },
        { modelName: "Audi" },
        { modelName: "Mercedes-Benz" },
        { modelName: "Volkswagen" },
        { modelName: "Huyndai" },
      ],
    };
  },
  components: { BMWBuy, AudiBuy, VolkBuy, MercBuy, HuyndaiBuy },
};
</script>

<style lang="scss">
.buyForm {
  .sellForm {
    max-width: 100%;
    .buyformAll {
      display: flex;
      justify-content: space-between;
      .buyForm--left {
        background-color: #a9a9a933;
        border-radius: 10px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        margin-right: 20px;
      }
    }
  }
}

.customAnother {
  color: white;
  font-size: 18px;
  border-radius: 10px;
  background: #1a1a1a;
  padding: 20px;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
    -webkit-box-shadow: 10px 10px 39px 4px rgba(48, 8, 48, 1);
    -moz-box-shadow: 10px 10px 39px 4px rgba(48, 8, 48, 1);
    box-shadow: 10px 10px 39px 4px rgba(48, 8, 48, 1);
  }
}
.customAnother + .customAnother {
  margin-top: 10px;
}
</style>
