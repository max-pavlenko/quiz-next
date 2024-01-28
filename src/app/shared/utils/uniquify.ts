export function uniquify<T extends Record<string, any>>(items: T[]) {
  return items.map((item) => ({ ...item, id: crypto.randomUUID() }));
}
