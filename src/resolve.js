export function resolve (maybeIterable) {
  if (typeof maybeIterable === 'string') {
    return [maybeIterable]
  }
  if (maybeIterable && typeof maybeIterable[Symbol.iterator] === 'function') {
    return maybeIterable
  }
  if (maybeIterable == null) {
    return []
  }
  return [maybeIterable]
}

export function resolveNumber (num, min) {
  if (typeof num !== 'number' || num < min) {
    return min
  }
  return num
}
