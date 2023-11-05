import { createStore } from "vuex";
import { slowWalz } from "../data/slowWalz"
import { chachacha } from "@/data/chachacha";
import { rumba } from "@/data/rumba";
import { slowFoxtot } from "@/data/slowFoxtrot";
import { tango } from "@/data/tango";
import { samba } from "@/data/samba";
import { jive } from "@/data/jive";
import { quickstep } from "@/data/quickstep";
import { pasoDoble } from "@/data/pasoDoble";


export default createStore({
  state: {
    standard: {
      slowWalz: slowWalz,
      quickstep: quickstep,
      slowFoxtot: slowFoxtot,
      tango: tango
    },
    latein: {
      rumba: rumba,
      chachacha: chachacha,
      samba: samba,
      jive: jive,
      pasoDoble: pasoDoble

    },
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
