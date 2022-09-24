<template>
  <div class="BuyFind">
    <h2>You want to find: {{ carName }}</h2>
    <h5>{{ cars }}</h5>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getInfoCar");
  },
  computed: {
    cars() {
      return this.$store.getters.getInfoCar;
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
};
</script>

<style>
.sub {
  color: deeppink;
}
.card {
  background: green !important;
  margin: 20px;
}
.CarName {
  background: deeppink;
}
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
