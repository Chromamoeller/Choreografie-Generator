import { openBlock } from "vue";
import { Dance } from "./dance";
import { LateinFigure } from "./lateinFigure";



let closedBasic = new LateinFigure("Geschlossener Grundschritt", "D", "LF", "LF", false, false)
let openBasic = new LateinFigure("Offener Grundschritt", "D", "LF", "LF", false, false)
let fan = new LateinFigure("Fan", "D", "LF", "LF", false, false)


export let chachacha = new Dance("Chachacha", "30", "Latein", [
    closedBasic,
    openBasic,
    fan,

])
