import {createSet, execTest} from './perf'

import {concat} from '../src/concat'
import {concat as concat_naive} from '../src/naive/concat'

const SIZE = 5000
const TIMES = 5000

const set1 = createSet(SIZE)
const set2 = createSet(SIZE)
const set3 = createSet(SIZE)

console.log('\nStart testing concat()\n')

execTest('concat()', TIMES, function () {
  [...concat(set1, set2, set3)]
})

execTest('naive concat()', TIMES, function () {
  [...concat_naive(set1, set2, set3)]
})

execTest('spread to array', TIMES, function () {
  [...[...set1, ...set2, ...set3]]
})
