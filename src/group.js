import {resolve} from './resolve'
import {toNumber} from './util'

export function* group (iterable, _length) {
  const length = toNumber(_length, 1)
  let cache = []

  for (let elem of resolve(iterable)) {
    cache.push(elem)

    if (cache.length >= length) {
      yield cache
      cache = []
    }
  }

  if (cache.length === 0) {
    return
  }

  while (cache.length < length) {
    cache.push(null)
  }
  yield cache
}
