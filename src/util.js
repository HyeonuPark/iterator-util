const symbolIterator = Symbol.iterator

export function toNumber (num, min) {
  if (typeof num !== 'number' || Number.isNaN(num) || num < min) {
    return min
  }
  return num
}

export function getIterator (maybeIterable) {
  if (
    maybeIterable &&
    typeof maybeIterable !== 'string' &&
    typeof maybeIterable[symbolIterator] === 'function'
  ) {
    return maybeIterable[symbolIterator]()
  }

  let isCalled = false
  return {
    next () {
      if (isCalled) return {done: true}
      isCalled = true
      return {done: false, value: maybeIterable}
    }
  }
}

export function getSelf () {
  return this
}

export const forwardReturn = current => result => {
  if (isDone) return result

  const doReturn = current.return
  if (typeof doReturn === 'function') {
    return current.return(result)
  }

  const doThrow = current.throw
  if (typeof doThrow === 'function') {
    return current.throw(result)
  }

  return result
}

export const forwardThrow = current => result => {
  if (isDone) return result

  const doThrow = current.throw
  if (typeof doThrow === 'function') {
    return current.throw(result)
  }

  const doReturn = current.return
  if (typeof doReturn === 'function') {
    return current.return(result)
  }

  return result
}
