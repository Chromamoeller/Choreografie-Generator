import { Dance } from "./dance";
import { StandardFigure } from "./standardFigure";


let RFclosedChange = new StandardFigure("Übergang von Rechts zu Links", "D", "LF", "RF", false, false, "Facing DW", "Facing DW")
let LFclosedChange = new StandardFigure("Übergang von Links zu Rechts", "D", "RF", "LF", false, false, "Facing DC", "Facing DC")
let OneToTreeNaturalTurn = new StandardFigure("1 bis 3 der Rechtsdrehung", "D", "RF", "LF", false, false, "Facing DC", "Backing LOD")
let FourToSixNaturalTurn = new StandardFigure("4 bis 6 der Rechtsdrehung", "D", "LF", "RF", false, false, "Backing LOD", "Facing DC")


export let slowWalz = new Dance("Langsamer Walzer", "30", "Standard", [
    RFclosedChange,
    LFclosedChange,
    OneToTreeNaturalTurn,
    FourToSixNaturalTurn
])