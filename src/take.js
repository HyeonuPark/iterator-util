import {resolve, resolveNumber} from './resolve'

export function take (iterable, _count) {
  const count = resolveNumber(_count, 0)
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
