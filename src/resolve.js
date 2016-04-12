export function resolve (maybeIterable) {
  if (maybeIterable && typeof maybeIterable[Symbol.iterator] === 'function') {
    return maybeIterable
  }
  if (arguments.length === 0) {
    return []
  }
  return [maybeIterable]
}
