/** List of default colors */
const defaultColors = [
  "#A0522D", // Sienna
  "#6B8E23", // Olive Drab
  "#556B2F", // Dark Olive Green
  "#D2B48C", // Tan
  "#8FBC8F", // Dark Sea Green
  "#CD853F", // Peru
  "#BC8F8F", // Rosy Brown
  "#F4A460", // Sandy Brown
  "#2E8B57", // Sea Green
  "#BDB76B", // Dark Khaki
  "#4682B4", // Steel Blue
  "#C0C0C0", // Silver
  "#DAA520", // Goldenrod
  "#808000", // Olive
];

// const defaultColors = [
//   "#66D1C8",
//   "#FEBF31",
//   "#F03351",
//   "#9ACE3B",
//   "#3C3C3B",
//   "#E7E4E3",
// ];
/** Function to generate hash code from a string */
const generateHashcode = (str: string): number => {
  return str.split("").reduce((hash, char) => {
    const charCode = char.charCodeAt(0);
    hash = (hash << 5) - hash + charCode;
    return hash & hash; // Convert to 32-bit integer
  }, 0);
};

/** Function to pick a color from the array based on a label */
const getAColor = (label: string, colors: string[]): string => {
  if (!label) return "transparent";

  const labelHash = generateHashcode(label);

  const index = Math.abs(labelHash) % colors.length;
  return colors[index];
};

/** Function to convert hex color to RGB */
const hexToRgb = (hex: string): number[] => {
  const bigint = parseInt(hex.substring(1), 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
};

/** Function to calculate brightness of an RGB color */
const calculateBrightness = (rgb: number[]): number => {
  return (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
};

/** Function to get a contrasting front color (black or white) based on background color */
const getFrontColor = (backgroundColor: string | undefined): string => {
  if (!backgroundColor) return "#ffffff";

  const brightness = calculateBrightness(hexToRgb(backgroundColor));
  return brightness > 0.5 ? "#000000" : "#ffffff";
};

/** Function to generate colors (foreground and background color) based on a label */
export const generateColors = (label: string) => {
  const backgroundColor = getAColor(label, defaultColors);
  const color = getFrontColor(backgroundColor);

  return {
    color,
    backgroundColor,
  };
};
