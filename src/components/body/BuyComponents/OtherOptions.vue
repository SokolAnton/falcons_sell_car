<template>
  <div class="types">
    <button
      class="carType"
      v-for="carType in types"
      :key="carType.name"
      @click="gggg"
    >
      {{ carType.name }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
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

<style></style>
