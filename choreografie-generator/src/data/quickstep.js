import { Dance } from "./dance";
import { StandardFigure } from "./standardFigure";



let quaterTurnToRight = new StandardFigure("1 bis 4 Grundschritt", "D", "RF", "RF", false, false, "Facing DW", "Backing DC")
let progressiveChasse = new StandardFigure("5 bis 8 Grundschritt", "D", "RF", "RF", false, false, "Backing DC", "Facing DW")

export let quickstep = new Dance("Quickstep", "50", "Standard", [
    quaterTurnToRight,
    progressiveChasse

])