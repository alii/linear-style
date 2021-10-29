/**
 * Get the brightness of a hex code
 * @param color
 */
export function getBrightness(color: string): number {
  const rgb = parseInt(color.substring(1), 16);

  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;

  // Calculate luma
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
