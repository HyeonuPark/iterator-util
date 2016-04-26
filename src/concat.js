import {checkIterable} from './resolve'
import {getSelf, forwardReturn, forwardThrow} from './util'

const symbolIterator = Symbol.iterator

export function concat (...iterable) {
  iterable = iterable.filter(elem => elem != null)
  const iterableLength = iterable.length
  if (iterableLength === 0) {
    return {
      next () {
        return {done: true}
      }
    }
  } else if (iterableLength === 1) {
    const onlyIterable = iterable[0]
    const checked = checkIterable(onlyIterable)
    return checked.type === 'iterable'
      ? onlyIterable
      : checked.get()
  }

  let isDone = false
  let current = checkIterable(iterable.shift()).get()

  return {
    next () {
      if (isDone) return {done: true}

      const result = current.next()
      if (!result.done) {
        return result
      } else {
        const {value} = result
        if (iterable.length === 0) {
          isDone = true
          return {done: true, value}
        }
        current = checkIterable(iterable.shift()).get()
        return this.next()
      }
    },
    return: forwardReturn(current),
    throw: forwardThrow(current),
    [symbolIterator]: getSelf
  }
}
