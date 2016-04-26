import {createArray, execTest} from './perf'

import {some} from '../src/some'
import {every} from '../src/every'

const SIZE = 5000
const TIMES = 5000

const tester = el => el < 100

console.log('\nStart testing some() and every()\n')

execTest('some()', TIMES, function () {
  some(createArray(SIZE), tester)
})

execTest('Array#some', TIMES, function () {
  [...createArray(SIZE)].some(tester)
})

execTest('every()', TIMES, function () {
  every(createArray(SIZE), tester)
})

execTest('Array#every', TIMES, function () {
  [...createArray(SIZE)].every(tester)
})
