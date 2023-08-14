let count = 0;

export function uniqueId(): string {
  return `id${count++}`;
}
