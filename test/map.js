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
    const result = map(obj, elem => [elem])
    expect([...result])
      .to.have.lengthOf(1)
      .and.have.property(0)
      .with.property(0, obj)
  })
})
