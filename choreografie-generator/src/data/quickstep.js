import { Dance } from "./dance";
import { StandardFigure } from "./standardFigure";

const RF = "RF";
const LF = "LF";
const FACING_DW = "Facing DW";
const FACING_DC = "Facing DC";
const FACING_LOD = "Facing LOD";
const BACKING_LOD = "Backing LOD";
const BACKING_DC = "Backing DC";

let quaterTurnToRight = new StandardFigure(
  "1 bis 4 Grundschritt",
  "D",
  RF,
  RF,
  false,
  false,
  FACING_DW,
  BACKING_DC
);
let progressiveChasse = new StandardFigure(
  "5 bis 8 Grundschritt",
  "D",
  RF,
  RF,
  false,
  false,
  BACKING_DC,
  FACING_DW
);

export const quickstep = new Dance("Quickstep", "50", "Standard", [
  quaterTurnToRight,
  progressiveChasse,
]);
