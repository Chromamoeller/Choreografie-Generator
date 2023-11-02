import { createStore } from "vuex";
import { slowWalz } from "../data/slowWalz"

export default createStore({
  state: {
    slowWalz: slowWalz,
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
    },
    setAmount(state, value) {
      state.userState.choosenAmount = value;
      console.log(state.userState)
    },
    setDance(state, value) {
      state.userState.choosenDance = value;
    },
    setLevel(state, value) {
      state.userState.chossenLevel = value;
    }
  },
  actions: {},
  modules: {},
});
