import { baseStyles, placeholderStyles } from "./base.js";
import { dayColumnStyles } from "./day-column.js";
import { desktopScaleStyles } from "./desktop-scale.js";
import { headerStyles } from "./header.js";
import { historyStyles } from "./history.js";
import { hourlyChartStyles } from "./hourly-chart.js";
import { popupStyles } from "./popup.js";

// Order matters: desktopScaleStyles overrides base sizes at equal specificity,
// so it must stay last.
export const cardStyles = [
  baseStyles,
  headerStyles,
  placeholderStyles,
  dayColumnStyles,
  popupStyles,
  hourlyChartStyles,
  historyStyles,
  desktopScaleStyles,
];
