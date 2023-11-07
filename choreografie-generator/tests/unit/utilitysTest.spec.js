import * as utilitys from "@/utilitys/functionTests";

test("Update Style im Userobjekt", () => {
  var userState = {};
  utilitys.updateStyleJS(userState, "Standard");

  expect(userState.choosenStyle).toBe("Standard");
});

test("Update Level im Userobjekt", () => {
  var userState = {};
  utilitys.updateLevelJS(userState, "D");

  expect(userState.choosenLevel).toBe("D");
});
test("Update Amount im Userobjekt", () => {
  var userState = {};
  utilitys.updateAmountJS(userState, "20");

  expect(userState.choosenAmount).toBe("20");
});
test("Update Dance im Userobjekt", () => {
  var userState = {};
  utilitys.updateDanceJS(userState, "Langsamer Walzer");

  expect(userState.choosenDance).toBe("Langsamer Walzer");
});

test("Setze die Figuenliste abhängig der Auswahl des Tanzes", () => {
  var userState = {};
  var figurenList = {};
  utilitys.setFigureList(userState, figurenList);

  expect().toBe();
});
