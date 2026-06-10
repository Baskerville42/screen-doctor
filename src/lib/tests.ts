import { AUTO_TEST_DURATION_SECONDS } from "./config";

export type TestKind = "solid" | "pattern" | "motion";
export type TestId =
  | "white"
  | "black"
  | "red"
  | "green"
  | "blue"
  | "yellow"
  | "magenta"
  | "cyan"
  | "gradient-h"
  | "gradient-v"
  | "gradient-r"
  | "checker"
  | "grid"
  | "contrast"
  | "oled-rgb"
  | "oled-gray"
  | "banding-dark"
  | "banding-color"
  | "motion"
  | "motion-inverse";

export type DisplayTest = {
  id: TestId;
  kind: TestKind;
  className?: string;
  color?: string;
  weight: number;
};

export const DISPLAY_TESTS: DisplayTest[] = [
  { id: "white", kind: "solid", color: "#ffffff", weight: 12 },
  { id: "black", kind: "solid", color: "#000000", weight: 18 },
  { id: "red", kind: "solid", color: "#ff0000", weight: 11 },
  { id: "green", kind: "solid", color: "#00ff00", weight: 11 },
  { id: "blue", kind: "solid", color: "#0000ff", weight: 11 },
  { id: "yellow", kind: "solid", color: "#ffff00", weight: 9 },
  { id: "magenta", kind: "solid", color: "#ff00ff", weight: 9 },
  { id: "cyan", kind: "solid", color: "#00ffff", weight: 9 },
  { id: "gradient-h", kind: "pattern", className: "gradient-h", weight: 14 },
  { id: "gradient-v", kind: "pattern", className: "gradient-v", weight: 14 },
  { id: "gradient-r", kind: "pattern", className: "gradient-r", weight: 14 },
  { id: "checker", kind: "pattern", className: "checker", weight: 14 },
  { id: "grid", kind: "pattern", className: "grid", weight: 14 },
  { id: "contrast", kind: "pattern", className: "contrast", weight: 14 },
  { id: "oled-rgb", kind: "pattern", className: "oled-rgb", weight: 15 },
  { id: "oled-gray", kind: "pattern", className: "oled-gray", weight: 16 },
  { id: "banding-dark", kind: "pattern", className: "banding-dark", weight: 15 },
  { id: "banding-color", kind: "pattern", className: "banding-color", weight: 15 },
  { id: "motion", kind: "motion", weight: 26 },
  { id: "motion-inverse", kind: "motion", className: "inverse", weight: 26 },
];

const TOTAL_WEIGHT = DISPLAY_TESTS.reduce((sum, test) => sum + test.weight, 0);
export const TOTAL_AUTO_DURATION = AUTO_TEST_DURATION_SECONDS * 1000;
export const getTestDuration = (test: DisplayTest) => (test.weight / TOTAL_WEIGHT) * TOTAL_AUTO_DURATION;
