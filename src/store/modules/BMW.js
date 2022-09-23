import api from "../../api";

const state = {
  cars: [],
  pages: 0,
};
const getters = {
  getBMW(state) {
    return state.cars;
  },
};
const mutations = {
  SET_BMW(state, payload) {
    state.cars = payload;
  },
};
const actions = {
  getBMW({ commit }) {
    api.getBMW().then((resp) => {
      console.log("resp", resp.data.result.search_result.ids);
      commit("SET_BMW", resp.data.result.search_result.ids);
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
