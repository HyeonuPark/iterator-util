import {expect} from 'chai'
import {indexed} from '../src/indexed'

describe('indexed()', () => {
  it('should iterate all elements from given iterator with index', () => {
    const result = indexed([5, 4, 3, 2, 1])
    expect([...result]).to.deep.equal([
      {index: 0, value: 5},
      {index: 1, value: 4},
      {index: 2, value: 3},
      {index: 3, value: 2},
      {index: 4, value: 1}
    ])
  })

  it('should treat non-iterable as a single-element iterable', () => {
    const obj = {}
    const result = indexed(obj)
    expect([...result])
      .to.have.lengthOf(1)
      .and.have.property(0)
      .with.deep.equal({index: 0, value: obj})
  })
})
