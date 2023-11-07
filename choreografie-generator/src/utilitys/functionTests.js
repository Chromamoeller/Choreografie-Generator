export function updateStyleJS(userState, value) {
  userState.choosenStyle = value;
}

export function updateDanceJS(userState, value) {
  userState.choosenDance = value;
}

export function updateLevelJS(userState, value) {
  userState.choosenLevel = value;
}

export function updateAmountJS(userState, value) {
  userState.choosenAmount = value;
}

export function setFigureList(userState, allStandardDances) {
  switch (userState.choosenDance) {
    case "Langsamer Walzer":
      return allStandardDances.slowWalz.figures;
    case "Wiener Walzer":
      return allStandardDances.vienneseWalz.figures;
    case "Tango":
      return allStandardDances.tango.figures;
    case "Slow Fox":
      return allStandardDances.slowFoxtot.figures;
    case "Quickstep":
      return allStandardDances.quickstep.figures;
  }
}
