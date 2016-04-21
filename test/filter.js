import {expect} from 'chai'
import {filter, filterNot} from '../src/filter'

describe('filter()', () => {
  it('should iterate all element whilch pass test from given iterable', () => {
    function* gen () {
      yield 1
      yield 2
      yield 3
    }

    const eq2 = elem => elem === 2
    const neq2 = elem => elem !== 2
    const lt3 = elem => elem < 3

    expect([...filter(gen(), eq2)])
      .to.have.lengthOf(1)
      .and.deep.equal([2])
    expect([...filter(gen(), neq2)])
      .to.have.lengthOf(2)
      .and.deep.equal([1, 3])
    expect([...filter(gen(), lt3)])
      .to.have.lengthOf(2)
      .and.deep.equal([1, 2])
  })

  it('should treat non-iterable as a single-element iterable', () => {
    const obj = {}

    const eq = elem => elem === obj
    const neq = elem => elem !== obj

    expect([...filter(obj, eq)])
      .to.have.lengthOf(1)
      .and.have.property(0, obj)
    expect([...filter(obj, neq)])
      .to.have.lengthOf(0)
  })
})

describe('filterNot()', () => {
  it('should iterate all element whilch fail test from given iterable', () => {
    function* gen () {
      yield 1
      yield 2
      yield 3
    }

    const eq2 = elem => elem === 2
    const neq2 = elem => elem !== 2
    const lt3 = elem => elem < 3

    expect([...filterNot(gen(), eq2)])
      .to.have.lengthOf(2)
      .and.deep.equal([1, 3])
    expect([...filterNot(gen(), neq2)])
      .to.have.lengthOf(1)
      .and.deep.equal([2])
    expect([...filterNot(gen(), lt3)])
      .to.have.lengthOf(1)
      .and.deep.equal([3])
  })

  it('should treat non-iterable as a single-element iterable', () => {
    const obj = {}

    const eq = elem => elem === obj
    const neq = elem => elem !== obj

    expect([...filterNot(obj, eq)])
      .to.have.lengthOf(0)
    expect([...filterNot(obj, neq)])
      .to.have.lengthOf(1)
      .and.have.property(0, obj)
  })
})
