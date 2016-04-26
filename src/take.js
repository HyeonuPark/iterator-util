import {resolve} from './resolve'
import {toNumber} from './util'

export function take (iterable, _count) {
  const count = toNumber(_count, 0)
  const result = []

  for (let elem of resolve(iterable)) {
    if (result.length >= count) {
      return result
    }
    result.push(elem)
  }

  while (result.length < count) {
    result.push(null)
  }

  return result
}

export function first (iterable) {
  for (let elem of resolve(iterable)) {
    return elem
  }
  return null
}
