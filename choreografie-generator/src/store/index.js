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

    createChoreo(state, value) {
      state.userState.choosenAmount = value;
      var counter = state.userState.choosenAmount;
      if (state.userState.choosenStyle == "Standard") {
        // das alles funktioniert nur für Standard  da es hier um Alignment geht  Bei latein gibt es das nicht
        var figurenListe;
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

        state.userState.choreoList = [figurenListe[0]];

        while (state.userState.choreoList.length <= counter - 1) {
          var lastFigure =
            state.userState.choreoList[state.userState.choreoList.length - 1];
          // Filter nach startenden Fuß abhängig vom freien Fuß nach letzter figur aus der liste
          let newList = figurenListe.filter((freeFoot) =>
            freeFoot.startingFoot.includes(lastFigure.freeFootAfterFinish)
          );
          // sollte eig eine liste an figuren erstellen in der die Promenaden positionen überinstimmen
          newList = newList.filter((promenade) =>
            promenade.startsInPP.includes(lastFigure.endsInPP)
          );
          // Filtert die neue liste nach passt die Raumrichtung der letzen figr mit einer der aus der liste übrigen figurn?
          newList = newList.filter((roomAlignment) =>
            roomAlignment.startsInAlignment.includes(lastFigure.endsInAlignment)
          );
          let randomNr = Math.floor(Math.random() * newList.length);

          state.userState.choreoList.push(newList[randomNr]);
        }
        console.log(state.userState.choreoList);
      } else if (state.userState.choosenStyle == "Latein") {
        console.log("Latein hat noch keine ");
      }
    },
  },
  actions: {},
  modules: {},
});
