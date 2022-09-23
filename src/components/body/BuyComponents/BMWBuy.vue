<template>
  <div class="BuyFind">
    <h2>You want to find: {{ carName }}</h2>
    <h3>Are you sure?</h3>
    <div class="card"></div>
    <div class="otherParametrs">
      <div class="otherParametrsBtn">
        <!-- <button
          type="button"
          class="burronChooseIwant"
          @click="component = 'OtherOptions'"
        >
          Other parameters
          <img src="@/assets/img/parametrs.png" alt="" />
        </button>
        <button type="button" class="burronChooseIwant" @click="component = ''">
          Close parameters
          <img src="@/assets/img/close.png" alt="" />
        </button> -->
        <button
          type="button"
          class="burronChooseIwant"
          @click="component = 'CarCard'"
        >
          Yes
        </button>
        <button type="button" class="burronChooseIwant" @click="component = ''">
          No
        </button>
      </div>
      <keep-alive>
        <component :is="component"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import OtherOptions from "./OtherOptions.vue";
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
      info: null,
      carName: "BMW",
      carLogoSrc: "BmwLogoMini.png",
      types: [
        { name: "Седан", id: 3 },
        { name: "Внедорожник", id: 3 },
        { name: "Хэтчбек", id: 3 },
        { name: "Универсал", id: 3 },
        { name: "Купе", id: 3 },
      ],
    };
  },
  components: { OtherOptions },
};
</script>

<style>
.carType {
  background: #1a1a1a;
  color: white;
  border-radius: 10px;
  width: 150px;
  transition: all 0.5s ease;
}
.carType:hover {
  background: white;
  color: #1a1a1a;
}
.carType + .carType {
  margin-left: 10px;
}
.BuyFind {
  text-align: center;
}
.otherParametrsBtn {
  display: flex;
  justify-content: space-around;
}
</style>
