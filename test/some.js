import {expect} from 'chai'
import {some} from '../src/some'

describe('some()', () => {
  it('should return true when at least one element is passed the tester', () => {
    function* gen () {
      yield 3
      yield 4
      yield 5
    }

    const eq4 = elem => elem === 4
    const eq5 = elem => elem === 5
    const gte4 = elem => elem >= 4

    expect(some(gen(), eq4)).to.be.true
    expect(some(gen(), eq5)).to.be.true
    expect(some(gen(), gte4)).to.be.true
  })

  it('should return false when all elements are failed the tester', () => {
    function* gen () {
      yield 3
      yield 4
      yield 5
    }

    const eq2 = elem => elem === 2
    const eq6 = elem => elem === 6
    const lt3 = elem => elem < 3

    expect(some(gen(), eq2)).to.be.false
    expect(some(gen(), eq6)).to.be.false
    expect(some(gen(), lt3)).to.be.false
  })

  it('should treat non-function tester as a equality checker', () => {
    const obj = {}

    function* gen (arg) {
      yield arg
    }

    expect(some(gen(obj), obj)).to.be.true
    expect(some(gen(42), obj)).to.be.false
    expect(some(gen(42), 42)).to.be.true
  })

  it('should treat non-iterable as a single-element iterable', () => {
    const obj = {}

    const eq = elem => elem === obj
    const neq = elem => elem !== obj

    expect(some(obj, eq)).to.be.true
    expect(some(obj, neq)).to.be.false
  })
})
