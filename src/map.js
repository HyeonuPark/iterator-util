import {checkIterable, valueIterator, nullIterator} from './resolve'
import {forwardReturn, forwardThrow, getSelf} from './util'

const symbolIterator = Symbol.iterator

export function map (iterable, mutator) {
  const {type: argType, get} = checkIterable(iterable)
  if (argType === 'value') {
    return [mutator(iterable)]
  }
  if (argType === 'null') {
    return nullIterator
  }

  const iterator = iterable[symbolIterator]()

  return {
    next () {
      const {done, value} = iterator.next()
      return {done, value: mutator(value)}
    },
    return: forwardReturn(iterator),
    throw: forwardThrow(iterator),
    [symbolIterator]: getSelf
  }
}
