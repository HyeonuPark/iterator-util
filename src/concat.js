import {resolve} from './resolve'

function* concatInternal (iterableList) {
  for (let iterable of iterableList) {
    yield* iterable
  }
}

export function concat (...maybeIterable) {
  const validIterable = maybeIterable
    .filter(elem => elem != null)
    .map(resolve)

  const validLength = validIterable.length
  
  if (validLength === 0) {
    return []
  } else if (validLength === 1) {
    return validIterable[0]
  }

  return concatInternal(validIterable)
}
