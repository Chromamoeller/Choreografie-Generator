import { Dance } from "./dance";
import { StandardFigure } from "./standardFigure";

let walkingStepLF = new StandardFigure("Gehschritt mit dem linken Fuß", "D", "LF", "RF", false, false, "Facing DW", "Facing DW")
let walkingStepRF = new StandardFigure("Gehschritt mit dem rechten Fuß", "D", "RF", "LF", false, false, "Facing DW", "Facing DW")


export let tango = new Dance("Tango", "30", "Standard", [
    walkingStepLF,
    walkingStepRF

])