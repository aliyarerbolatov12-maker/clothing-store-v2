export default function getContrastColor(hex: string): "black" | "white" {
  const cleanHex = hex.replace("#", "");
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);

  const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  return brightness > 128 ? "black" : "white";
}
