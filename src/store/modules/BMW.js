import api from "../../api";
const state = {
  cars: [],
  carInfo: [],
  pages: 0,
};
const getters = {
  getBMW(state) {
    return state.cars;
  },
  getInfoCar(state) {
    return state.carInfo;
  },
};
const mutations = {
  SET_BMW(state, payload) {
    state.cars = payload;
  },
  SET_CAR_INFO(state, payload) {
    state.carInfo = payload;
  },
};
const actions = {
  getBMW({ commit }) {
    api.getBMW().then((resp) => {
      commit("SET_BMW", resp.data.result.search_result.ids);
      console.log("resp", resp.data.result.search_result.ids);
    });
  },
  getInfoCar({ commit }) {
    for (let i = 0; i < state.cars.length; i++) {
      api.getCarInfo(state.cars[i]).then((responce) => {
        console.log(responce.data.result);
        commit("SET_CAR_INFO", responce);
      });
    }
    console.log("State carinfo", state.carInfo[1]);
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};
