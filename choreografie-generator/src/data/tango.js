import { Dance } from "./dance";
import { StandardFigure } from "./standardFigure";

const RF = "RF";
const LF = "LF";
const FACING_DW = "Facing DW";
const FACING_DC = "Facing DC";
const FACING_LOD = "Facing LOD";
const BACKING_LOD = "Backing LOD";

let walkingStepLF = new StandardFigure(
  "Gehschritt mit dem linken Fuß",
  "D",
  LF,
  RF,
  "false",
  "false",
  FACING_DW,
  FACING_DW
);
let walkingStepRF = new StandardFigure(
  "Gehschritt mit dem rechten Fuß",
  "D",
  RF,
  LF,
  "false",
  "false",
  FACING_DW,
  FACING_DW
);

export let tango = new Dance("Tango", "30", "Standard", [
  walkingStepLF,
  walkingStepRF,
]);
