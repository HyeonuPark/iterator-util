import {expect} from 'chai'
import {concat} from '../src/concat'

describe('concat()', () => {
  it('should iterate all elements of given iterables in order', () => {
    const result = concat([1, 2, 3], [4, 5, 6])
    expect([...result]).to.deep.equal([1, 2, 3, 4, 5, 6])
  })

  it('should be a variadic function', () => {
    const arg3 = concat([1, 2], [3, 4], [5, 6])
    const arg4 = concat([1, 2], [3, 4], [5, 6], [7, 8])

    expect([...arg3]).to.deep.equal([1, 2, 3, 4, 5, 6])
    expect([...arg4]).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8])
  })

  it('should immediately exit when no argument received', () => {
    const result = concat()
    expect([...result]).to.be.empty
  })

  it('should treat non-iterable values as single-element iterable', () => {
    const result = concat([1, 2], 3, [4, 5, 6])
    expect([...result]).to.deep.equal([1, 2, 3, 4, 5, 6])
  })
})
