<template>
  <div class="WhatPartnesSaySlide">
    <div v-for="(step, id) in quation" :key="id" class="step">
      <img
        :key="step.id"
        :src="`/imgCarLogo/${step.img}`"
        width="200"
        height="200"
        class="all_foto"
      />
      <div class="legal-aid__step-question"></div>
      <div class="btnPartners">
        <button class="btnPrevNext" @click="pushAnswer(step.no_section)">
          Previous
        </button>
        <div class="desc">
          <p>{{ step.desc }}</p>
        </div>
        <button class="btnPrevNext" @click="pushAnswer(step.yes_section)">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      answer: ["1"],
      stepsData: [
        {
          id: "1",
          yes_section: "2",
          no_section: "5",
          name: "AUDI",
          img: "audiLogo.png",
          desc: "«Vorsprung durch Technik» («Превосходство высоких технологий») ",
        },
        {
          id: "2",
          yes_section: "3",
          no_section: "1",
          name: "BMW",
          img: "bmwLogo.png",
          desc: "Freude am Fahren («С удовольствием за рулем»)",
        },
        {
          id: "3",
          yes_section: "4",
          no_section: "2",
          name: "Huyndai",
          img: "huyndaiLogo.png",
          desc: "New thinking, new possibilities («Новое мышление, новые возможности»)",
        },
        {
          id: "4",
          yes_section: "5",
          no_section: "3",
          name: "Mercedes-Benz",
          img: "mercLogo.png",
          desc: "The best or nothing! («Лучшее или ничего!»)",
        },
        {
          id: "5",
          yes_section: "1",
          no_section: "4",
          name: "Volkswagen",
          img: "volkLogo.png",
          desc: "Das Auto («Это машина»)",
        },
      ],
    };
  },
  computed: {
    quation() {
      return this.answer.map((answer) => {
        return this.stepsData.find((step) => step.id === answer);
      });
    },
  },
  methods: {
    pushAnswer(answer) {
      this.answer.pop(answer);
      this.answer.push(answer);
    },
  },
};
</script>

<style lang="scss">
.step {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btnPartners {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
.desc {
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 200%;
  color: #ffffff;
  text-align: center;
}
.btnPrevNext {
  background-color: black;
  color: white;
  padding: 10px 5px;
  border-radius: 10px;
  max-height: 40px;
  width: 50%;
  margin: 50px 20px 0;
}
.legal-aid__step-questio {
  > h3 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 94px;
    letter-spacing: 1px;
    color: #ffffff !important;
  }
}
</style>
