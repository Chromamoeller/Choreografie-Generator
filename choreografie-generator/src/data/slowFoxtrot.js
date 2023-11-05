import { Dance } from "./dance";
import { StandardFigure } from "./standardFigure";


let featherStep = new StandardFigure("Federschritt", "D", "RF", "LF", false, false, "Facing DC", "Facing DC")
let threeStep = new StandardFigure("Dreierschritt", "D", "RF", "LF", false, false, "Facing DW", "Facing DW")

export let slowFoxtot = new Dance("Slow Fox", "30", "Standard", [
    featherStep,
    threeStep

])