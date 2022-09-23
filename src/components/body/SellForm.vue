<template>
  <div class="sellForm">
    <h3 class="sellForm--title title">i want sell</h3>
    <div class="sellForm--form form">
      <div class="form--left left">
        <h4>You can sell only:</h4>
        <ul>
          <li v-for="model in models" :key="model">{{ model.modelName }}</li>
        </ul>
        <h4>From 2005 to 2022</h4>
      </div>
      <div class="form--right right">
        <div>
          <b-form-select
            class="wd-100"
            v-model="selected"
            :options="Modeloptions"
          ></b-form-select>
        </div>
        <p><b>Value:</b> {{ selected }}</p>
        <div class="mt-1">
          <input
            v-model="carType"
            type="text"
            class="wd-100"
            placeholder="Write the car type"
            required
          />
        </div>
        <p><b>Value:</b> {{ carType }}</p>
        <div class="mt-1"></div>
        <b-form-group class="mb-0">
          <b-form-textarea
            id="textarea-formatter"
            v-model="desc"
            placeholder="Enter your description"
          ></b-form-textarea>
        </b-form-group>
        <p><b>Value:</b> {{ desc }}</p>
        <p class="mt-4">
          you should know that after our moderators check the start options of
          your ad, they will contact you to clarify the details, for all other
          items
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desc: "",
      carType: "",
      models: [
        { modelName: "BMW" },
        { modelName: "Audi" },
        { modelName: "Mercedes-Benz" },
        { modelName: "Volkswagen" },
        { modelName: "Huyndai" },
      ],
      text1: "",
      selected: null,
      Modeloptions: [
        { value: null, text: "Please select the car model" },
        { value: "Audi", text: "Audi" },
        { value: "Mercedes-Benz", text: "Mercedes-Benz" },
        { value: "BMW", text: "BMW" },
        { value: "Huyndai", text: "Huyndai" },
        { value: "Volkswagen", text: "Volkswagen" },
      ],
    };
  },
};
</script>

<style lang="scss">
.sellForm {
  max-width: 90%;
  margin-top: 20px;
  padding: 20px;
  background-color: #1a1a1a;
  color: white;
  border-radius: 20px;
  @media screen and (max-width: 780px) {
    max-width: 100%;
  }
  .title {
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .form {
    padding: 10px;
    background-color: #a9a9a933;
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
    @media screen and (max-width: 780px) {
      flex-direction: column;
      align-items: center;
    }
    .left {
      margin-right: 30px;
      padding: 10px;
      background-color: #1a1a1a;
      border: 1px solid white;
      border-radius: 10px;
      @media screen and (max-width: 780px) {
        width: 100%;
        margin: 0 0 20px 0;
        text-align: center;
      }
      > ul {
        > li {
          @media screen and (max-width: 780px) {
            display: inline-block;
          }
        }
      }
    }
    .right {
      border: 1px solid white;
      border-radius: 10px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      max-width: 50%;
      background-color: #1a1a1a;
      @media screen and (max-width: 780px) {
        max-width: 100%;
        width: 100%;
      }
      > p {
        text-transform: uppercase;
        color: deeppink;
      }
    }
  }
}
.wd-100 {
  width: 100%;
}
</style>
