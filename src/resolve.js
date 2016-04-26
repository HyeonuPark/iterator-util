import {getSelf} from './util'

const symbolIterator = Symbol.iterator

export const nullIterator = {
  next () {
    return {done: true}
  },
  [symbolIterator]: getSelf
}

export const toIterator = iterable => () => iterable[symbolIterator]()

export const valueIterator = value => () => [value][symbolIterator]()

export function checkIterable (maybeIterable) {
  if (maybeIterable == null) {
    return {
      type: 'null',
      get: () => nullIterator
    }
  }

  if (
    maybeIterable &&
    typeof maybeIterable === 'object' &&
    typeof maybeIterable[symbolIterator] === 'function'
  ) {
    return {
      type: 'iterable',
      get: toIterator(maybeIterable)
    }
  }

  let isDone = false
  return {
    type: 'value',
    get: valueIterator(maybeIterable)
  }
}

export function resolve (maybeIterable) {
  const checked = checkIterable(maybeIterable)
  if (checked.type === 'iterable') {
    return maybeIterable
  }
  return checked.get()
}
