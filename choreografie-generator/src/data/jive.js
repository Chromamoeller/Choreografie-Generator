import { Dance } from "./dance";
import { LateinFigure } from "./lateinFigure";


let basicInPlace = new LateinFigure("Grundschritt", "D", "LF", "LF", false, false)
let basicInFallaway = new LateinFigure("Grundschritt in Fallaway", "D", "LF", "LF", false, false)
let changeOfPlaceRightToLeft = new LateinFigure("Platzwechsel von Rechts nach Links", "D", "LF", "LF", false, false)

export let jive = new Dance("Jive", "40", "Latein", [
    basicInPlace,
    basicInFallaway,
    changeOfPlaceRightToLeft

])