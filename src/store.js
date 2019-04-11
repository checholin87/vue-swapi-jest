import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const URL = "https://swapi.co/api";

export const mutations = {
  planets(state, planets) {
    state.planets = planets;
  },
  planet(state, planet) {
    state.planet = planet;
  }
};

export const actions = {
  search({ commit }, search) {
    axios
      .get(`${URL}/planets/?search=${search}`)
      .then(response => {
        commit("planets", response.data.results);
      })
      .catch(() => {
        commit("planets", []);
      });
  },
  planet({ commit }, endpoint) {
    axios
      .get(endpoint)
      .then(response => {
        commit("planet", response.data);
      })
      .catch(() => {
        commit("planet", {});
      });
  }
};

export const getters = {
  planets(state) {
    return state.planets;
  },
  planet(state) {
    return state.planet;
  }
};

export default new Vuex.Store({
  state: {
    planets: [],
    planet: {}
  },
  mutations,
  actions,
  getters
});
