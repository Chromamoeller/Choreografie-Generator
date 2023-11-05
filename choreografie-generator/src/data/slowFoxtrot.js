import { Dance } from "./dance";
import { StandardFigure } from "./standardFigure";


featherStep = new StandardFigure("Federschritt", "D", "RF", "LF", false, false, "Facing DC", "Facing DC")
threeStep = new StandardFigure("Dreierschritt", "D", "RF", "LF", false, false, "Facing DW", "Facing DW")

export let slowFoxtot = new StandardDance("Slow Fox", "30", "Standard", [
    featherStep,
    threeStep

])