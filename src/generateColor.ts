export function generateColor(): string {
  const color: number = Math.random();
  return color.toString(16).slice(-6);
}
