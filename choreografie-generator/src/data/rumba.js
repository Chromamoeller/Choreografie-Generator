import { Dance } from "./dance";
import { LateinFigure } from "./lateinFigure";


let closedBasic = new LateinFigure("Geschlossener Grundschritt", "D", "LF", "LF", false, false)
let openBasic = new LateinFigure("Offener Grundschritt", "D", "LF", "LF", false, false)
let fan = new LateinFigure("Fan", "D", "LF", "LF", false, false)


export let rumba = new Dance("Rumba", "25", "Latein", [
    closedBasic,
    openBasic,
    fan

])