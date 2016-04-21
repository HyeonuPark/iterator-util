import assert from 'assert'

import {resolve} from './resolve'

export function* filter (iterable, test) {
  assert.strictEqual(typeof test, 'function')

  for (let elem of resolve(iterable)) {
    if (test(elem)) {
      yield elem
    }
  }
}

export function* filterNot (iterable, test) {
  assert.strictEqual(typeof test, 'function')

  for (let elem of resolve(iterable)) {
    if (!test(elem)) {
      yield elem
    }
  }
}
