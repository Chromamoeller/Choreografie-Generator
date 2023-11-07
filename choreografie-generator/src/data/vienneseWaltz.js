import { Dance } from "./dance";
import { StandardFigure } from "./standardFigure";

const RF = "RF";
const LF = "LF";
const FACING_DW = "Facing DW";
const FACING_DC = "Facing DC";
const FACING_LOD = "Facing LOD";
const BACKING_LOD = "Backing LOD";

let RFclosedChange = new StandardFigure(
  "Übergang von Rechts zu Links",
  "D",
  RF,
  LF,
  false,
  false,
  FACING_DC,
  FACING_DC
);
let LFclosedChange = new StandardFigure(
  "Übergang von Links zu Rechts",
  "D",
  LF,
  RF,
  false,
  false,
  FACING_DW,
  FACING_DW
);
let OneToTreeNaturalTurn = new StandardFigure(
  "1 bis 3 der Rechtsdrehung",
  "D",
  RF,
  LF,
  false,
  false,
  FACING_DW,
  BACKING_LOD
);
let FourToSixNaturalTurn = new StandardFigure(
  "4 bis 6 der Rechtsdrehung",
  "D",
  LF,
  RF,
  false,
  false,
  BACKING_LOD,
  FACING_DC
);
let OneToTheeReverseTurn = new StandardFigure(
  "1 bis 3 der Linksdrehung",
  "D",
  LF,
  RF,
  false,
  false,
  FACING_DC,
  BACKING_LOD
);
let FourToSixReverseTurn = new StandardFigure(
  "4 bis 6 der Linksdrehung",
  "D",
  RF,
  LF,
  false,
  false,
  BACKING_LOD,
  FACING_DW
);

export let vienneseWalz = new Dance("Wiener Walzer", "60", "Standard", [
  RFclosedChange,
  LFclosedChange,
  OneToTreeNaturalTurn,
  FourToSixNaturalTurn,
  OneToTheeReverseTurn,
  FourToSixReverseTurn,
]);
