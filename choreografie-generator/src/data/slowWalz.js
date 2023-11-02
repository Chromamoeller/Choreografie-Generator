import { Dance } from "./dance";
import { Figure } from "./figure";


let RFclosedChange = new Figure("Übergang von Rechts zu Links", "D", "LF", "RF", false, false, "Facing DW", "Facing DW")
let LFclosedChange = new Figure("Übergang von Links zu Rechts", "D", "RF", "LF", false, false, "Facing DC", "Facing DC")
let OneToTreeNaturalTurn = new Figure("1 bis 3 der Rechtsdrehung", "D", "RF", "LF", false, false, "Facing DC", "Backing LOD")
let FourToSixNaturalTurn = new Figure("4 bis 6 der Rechtsdrehung", "D", "LF", "RF", false, false, "Backing LOD", "Facing DC")


export let slowWalz = new Dance("Langsamer Walzer", "30", "Standard", [
    RFclosedChange,
    LFclosedChange,
    OneToTreeNaturalTurn,
    FourToSixNaturalTurn
])