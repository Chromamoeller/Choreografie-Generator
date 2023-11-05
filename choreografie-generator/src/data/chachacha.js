import { Dance } from "./dance";
import { LateinFigure } from "./lateinFigure";



closedBasic = new LateinFigure("Geschlossener Grundschritt", "D", "LF", "LF", false, false, "", "")
openBasic = new LateinFigure("Offener Grundschritt", "D", "LF", "LF", false, false, "", "")
fan = new LateinFigure("Fan", "D", "LF", "LF", false, false, "", "")


export let chachacha = new Dance("Chachacha", "30", "Latein", [
    closedBasic

])
