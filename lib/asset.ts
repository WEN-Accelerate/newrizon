/** Prefixes public asset paths with the base path when the site is hosted under a sub-path. */
export function asset(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
