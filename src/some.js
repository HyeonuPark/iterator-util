import {resolve} from './resolve'

export function some (iterable, tester) {
  if (typeof tester !== 'function') {
    const given = tester
    tester = arg => arg === given
  }

  for (let elem of resolve(iterable)) {
    if (tester(elem)) {
      return true
    }
  }

  return false
}
