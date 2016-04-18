import {expect} from 'chai'
import {every} from '../src/every'

describe('every()', () => {
  it('should return false when at least one element is failed the tester', () => {
    function* gen () {
      yield 3
      yield 4
      yield 5
    }

    const eq3 = elem => elem === 3
    const lte4 = elem => elem <= 4
    const lt3 = elem => elem < 3

    expect(every(gen(), eq3)).to.be.false
    expect(every(gen(), lte4)).to.be.false
    expect(every(gen(), lt3)).to.be.false
  })

  it('should return true when all elements are passed the tester', () => {
    function* gen () {
      yield 3
      yield 4
      yield 5
    }

    const lt6 = elem => elem < 6
    const gt1 = elem => elem > 1
    const lte5 = elem => elem <= 5

    expect(every(gen(), lt6)).to.be.true
    expect(every(gen(), gt1)).to.be.true
    expect(every(gen(), lte5)).to.be.true
  })

  it('should treat non-function tester as a equality checker', () => {
    const obj = {}

    function* gen (arg) {
      yield arg
    }

    expect(every(gen(obj), obj)).to.be.true
    expect(every(gen(42), obj)).to.be.false
    expect(every(gen(42), 42)).to.be.true
  })

  it('should treat non-iterable as a single-element iterable', () => {
    const obj = {}

    const eq = elem => elem === obj
    const neq = elem => elem !== obj

    expect(every(obj, eq)).to.be.true
    expect(every(obj, neq)).to.be.false
  })
})
