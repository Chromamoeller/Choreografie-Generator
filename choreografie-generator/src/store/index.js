import { createStore } from "vuex";

export default createStore({
  state: {
    userState: {
      choosenStyle: "",
      choosenDance: "",
      chossenLevel: "",
      choosenAmount: "",
    },
  },
  getters: {},
  mutations: {
    setStyle(state, value) {
      state.userState.choosenStyle = value;
      console.log(state.userState);
    },
  },
  actions: {},
  modules: {},
});
