import {expect} from 'chai'
import {product} from '../src/product'

describe('product()', () => {
  it('should iterate all possible pairs in order', () => {
    const result = product([1, 2, 3], [4, 5, 6])
    expect([...result]).to.deep.equal([
      [1, 4],
      [1, 5],
      [1, 6],
      [2, 4],
      [2, 5],
      [2, 6],
      [3, 4],
      [3, 5],
      [3, 6]
    ])
  })

  it('should be a variadic function', () => {
    const arg3 = product([1, 2], [3, 4], [5, 6])
    const arg4 = product([1], [2], [3], [4])

    expect([...arg3]).to.deep.equal([
      [1, 3, 5],
      [1, 3, 6],
      [1, 4, 5],
      [1, 4, 6],
      [2, 3, 5],
      [2, 3, 6],
      [2, 4, 5],
      [2, 4, 6]
    ])
    expect([...arg4]).to.deep.equal([
      [1, 2, 3, 4]
    ])
  })

  it('should immediately exit when no argument received', () => {
    const result = product()
    expect([...result]).to.be.empty
  })

  it('should treat non-iterable values as single-element iterable', () => {
    const result = product([1, 2], 3, [4, 5])
    expect([...result]).to.deep.equal([
      [1, 3, 4],
      [1, 3, 5],
      [2, 3, 4],
      [2, 3, 5]
    ])
  })

  it('should iterate once per given iterables', () => {
    function* range (min, max) {
      while (min <= max) {
        yield min
        min += 1
      }
    }

    const result = product(range(1, 3), range(1, 2))
    expect([...result]).to.deep.equal([
      [1, 1],
      [1, 2],
      [2, 1],
      [2, 2],
      [3, 1],
      [3, 2]
    ])
  })
})
