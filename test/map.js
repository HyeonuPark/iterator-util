import {expect} from 'chai'
import {map} from '../src/map'

describe('map()', () => {
  it('should iterate modified all element from given iterable', () => {
    function* gen () {
      yield 1
      yield 2
      yield 3
    }
    const result = map(gen(), num => num + 3)
    expect([...result]).to.deep.equal([4, 5, 6])
  })

  it('should treat non-iterable as a single-element iterable', () => {
    const obj = {}
    const result = map(obj, elem => [elem], true)
    expect([...result])
      .to.have.lengthOf(1)
      .and.have.property(0)
      .with.property(0, obj)
  })

  it('should call callback func only once per element', () => {
    const array = [4, 5, 6]
    let count = 0

    function mutator (num) {
      count += 1
      return num + 1
    }

    const result = map(array, mutator)
    expect([...result]).to.deep.equal([5, 6, 7])
    expect(count).to.equal(3)
  })
})
