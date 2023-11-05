import { Dance } from "./dance";
import { LateinFigure } from "./lateinFigure";



let basicMovement = new LateinFigure("Grundschritt", "D", "RF", "RF", false, false)
let surPlace = new LateinFigure("Sur Place", "D", "RF", "RF", false, false)
let chassesToRight = new LateinFigure("Chasse nach Rechts", "D", "RF", "RF", false, false)
let chassesToLeft = new LateinFigure("Chasse nach Links", "D", "RF", "RF", false, false)



export let pasoDoble = new Dance("Paso Doble", "60", "Latein", [
    basicMovement,
    surPlace,
    chassesToRight,
    chassesToLeft

])