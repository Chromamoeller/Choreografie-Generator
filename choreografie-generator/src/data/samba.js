import { Dance } from "./dance";
import { LateinFigure } from "./lateinFigure";


naturalBasicMovement = new LateinFigure("Grundschritt", "D", "RF", "RF", false, false)
sambaWiskToLeftAndRight = new LateinFigure("Wischer", "D", "LF", "LF", false, false)

export let samba = new Dance("Samba", "50", "Latein", [
    naturalBasicMovement,
    sambaWiskToLeftAndRight

])