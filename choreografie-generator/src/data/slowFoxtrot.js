import { Dance } from "./dance";
import { StandardFigure } from "./standardFigure";

const RF = "RF";
const LF = "LF";
const FACING_DW = "Facing DW";
const FACING_DC = "Facing DC";
const FACING_LOD = "Facing LOD";
const BACKING_LOD = "Backing LOD";

let featherStep = new StandardFigure(
  "Federschritt",
  "D",
  RF,
  LF,
  "false",
  "false",
  FACING_DC,
  FACING_DC
);
let threeStep = new StandardFigure(
  "Dreierschritt",
  "D",
  LF,
  RF,
  "false",
  "false",
  FACING_DW,
  FACING_DW
);

export let slowFoxtot = new Dance("Slow Fox", "30", "Standard", [
  featherStep,
  threeStep,
]);
