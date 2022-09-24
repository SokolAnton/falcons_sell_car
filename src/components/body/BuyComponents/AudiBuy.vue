<!-- <template>
  <div class="BuyFind">
    <h2>You want to find: {{ carName }}</h2>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      carName: "Audi",
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
</style> -->
