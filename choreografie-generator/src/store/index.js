import { createStore } from "vuex";
import { slowWalz } from "../data/slowWalz";
import { chachacha } from "@/data/chachacha";
import { rumba } from "@/data/rumba";
import { slowFoxtot } from "@/data/slowFoxtrot";
import { tango } from "@/data/tango";
import { vienneseWalz } from "@/data/vienneseWaltz";
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
      vienneseWalz: vienneseWalz,
      tango: tango,
    },
    latein: {
      rumba: rumba,
      chachacha: chachacha,
      samba: samba,
      jive: jive,
      pasoDoble: pasoDoble,
    },
    userState: {
      choosenStyle: "",
      choosenDance: "",
      chossenLevel: "",
      choosenAmount: 20,
      choreoList: [],
    },
  },
  getters: {},
  mutations: {
    setStyle(state, value) {
      state.userState.choosenStyle = value;
    },
    setAmount(state, value) {
      state.userState.choosenAmount = value;
      console.log(state.userState);
    },
    setDance(state, value) {
      state.userState.choosenDance = value;
    },
    setLevel(state, value) {
      state.userState.chossenLevel = value;
    },
    getData(state, value) {
      state.userState.choosenAmount = value;
      if (state.userState.choosenStyle == "Standard") {
        // das alles funktioniert nur für Standard  da es hier um Alignment geht  Bei latein gibt es das nicht
        let figurenListe;
        switch (state.userState.choosenDance) {
          case "Langsamer Walzer":
            figurenListe = state.standard.slowWalz.figures;
            break;
          case "Wiener Walzer":
            figurenListe = state.standard.vienneseWalz.figures;
            break;
          case "Tango":
            figurenListe = state.standard.tango.figures;
            break;
          case "Slow Fox":
            figurenListe = state.standard.slowFoxtot.figures;
            break;
          case "Quickstep":
            figurenListe = state.standard.quickstep.figures;
        }

        let counter = state.userState.choosenAmount;
        state.userState.choreoList = [figurenListe[0]]; // erste Figur immer in der liste um einen vergleichswert zu haben

        // die schleife geht so lange wieder beutzer will das die Liste lang ist
        while (state.userState.choreoList.length <= counter - 1) {
          let randomNr = Math.floor(Math.random() * figurenListe.length);

          if (
            //es wird überprüft ob der Fuß der frei ist, mit dem Fuß übereinstimmt der gebraucht wird für die Figur
            // wenn ja wird diese Figur der liste hinzugefügt
            figurenListe[randomNr].startingFoot ===
              state.userState.choreoList[state.userState.choreoList.length - 1]
                .freeFootAfterFinish &&
            figurenListe[randomNr].startsInPP ==
              state.userState.choreoList[state.userState.choreoList.length - 1]
                .endsInPP &&
            figurenListe[randomNr].startsInAlignment ===
              state.userState.choreoList[state.userState.choreoList.length - 1]
                .endsInAlignment
          ) {
            state.userState.choreoList.push(figurenListe[randomNr]);
          }
        }
        console.log(state.userState.choreoList);
      }
    },
  },
  actions: {},
  modules: {},
});
