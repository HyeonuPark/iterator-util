import {createSet, execTest} from './perf'

import {map} from '../src/map'
import {map as naive_map} from '../src/naive/map'

const SIZE = 5000
const TIMES = 5000

const set = createSet(SIZE)
const mutate = el => el + el

console.log('\nStart testing map()\n')

execTest('map()', TIMES, function () {
  [...map(set, mutate)]
})

execTest('naive map()', TIMES, function () {
  [...naive_map(set, mutate)]
})

execTest('Array#map', TIMES, function () {
  [...[...set].map(mutate)]
})
