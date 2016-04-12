import {resolve} from './resolve'

export function* indexed (iterable) {
  let index = 0
  for (let value of resolve(iterable)) {
    yield {index, value}
    index += 1
  }
}
