import {resolve} from './resolve'

export function* map (iterable, modifier) {
  for (let elem of resolve(iterable)) {
    yield modifier(elem)
  }
}
