import Vue from "vue";
import Vuex from "vuex";
import NProgress from "nprogress";

Vue.use(Vuex);

//DEFINE ROOT STORE VUEX
export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token"),
    errors: [],
    //LOADING
    isLoading: false
  },
  getters: {
    isAuth: state => {
      return state.token != "null" && state.token != null;
    }
  },
  mutations: {
    //SEBUAH MUTATIONS YANG BERFUNGSI UNTUK MEMANIPULASI VALUE DARI STATE token
    SET_TOKEN(state, payload) {
      state.token = payload;
    },
    SET_ERRORS(state, payload) {
      state.errors = payload;
    },
    CLEAR_ERRORS(state) {
      state.errors = [];
    },
    SET_LOADING(state, payload) {
      payload ? NProgress.start() : NProgress.done();
      state.isLoading = payload;
    }
  },
  actions: {}
});
