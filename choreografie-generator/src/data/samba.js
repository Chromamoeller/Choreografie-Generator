import { Dance } from "./dance";
import { LateinFigure } from "./lateinFigure";


let naturalBasicMovement = new LateinFigure("Grundschritt", "D", "RF", "RF", false, false)
let sambaWiskToLeftAndRight = new LateinFigure("Wischer", "D", "LF", "LF", false, false)

export let samba = new Dance("Samba", "50", "Latein", [
    naturalBasicMovement,
    sambaWiskToLeftAndRight

])