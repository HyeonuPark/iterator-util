import {expect} from 'chai'
import {take, first} from '../src/take'

describe('take()', () => {
  function* gen () {
    yield 3
    yield 4
    yield 5
  }

  it('should return array from given iterable with given length', () => {
    expect(take(gen(), 1))
      .to.have.lengthOf(1)
      .and.have.property(0, 3)

    expect(take(gen(), 2))
      .to.have.lengthOf(2)
      .and.deep.equal([3, 4])
  })

  it('should return empty array when length is 0 or ommited', () => {
    expect(take(gen(), 0)).to.have.lengthOf(0)
    expect(take(gen())).to.have.lengthOf(0)
  })

  it('should pad empty spaces with null when given length is longer then iterable', () => {
    expect(take(gen(), 4)).to.deep.equal([3, 4, 5, null])
    expect(take(gen(), 6)).to.deep.equal([3, 4, 5, null, null, null])
  })

  it('should treat non-number length as 0', () => {
    expect(take(gen(), 'foo')).to.have.lengthOf(0)
    expect(take(gen(), {})).to.have.lengthOf(0)
  })

  it('should treat non-iterable as a single-element iterable', () => {
    const obj = {}

    expect(take(obj, 1)).to.deep.equal([obj])
    expect(take(obj, 2)).to.deep.equal([obj, null])
  })
})

describe('first()', () => {
  function* gen () {
    yield 3
    yield 4
  }

  it('should return first element of given iterable', () => {
    expect(first(gen())).to.equal(3)
  })

  it('should return null when given iterable is empty', () => {
    expect(first([])).to.equal(null)
  })

  it('should return non-iterable argument back', () => {
    const obj = {}
    expect(first(obj)).to.equal(obj)
  })
})
