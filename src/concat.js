import {resolve} from './resolve'

export function* concat (...iterableList) {
  for (let iterable of iterableList) {
    yield* resolve(iterable)
  }
}
