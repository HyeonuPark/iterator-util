export function resolve (maybeIterable) {
  if (maybeIterable && typeof maybeIterable[Symbol.iterator] === 'function') {
    return maybeIterable
  }
  if (maybeIterable == null) {
    return []
  }
  return [maybeIterable]
}
