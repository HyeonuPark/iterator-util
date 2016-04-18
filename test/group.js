import {expect} from 'chai'
import {group} from '../src/group'

describe('group()', () => {
  it('should iterate arrays sliced from given iterable', () => {
    const data = [3, 4, 5, 6, 7, 8]

    expect([...group(data, 2)]).to.deep.equal([[3, 4], [5, 6], [7, 8]])
  })

  it('should pad last array with null to fill the length', () => {
    const data5 = [3, 4, 5, 6, 7]
    const data7 = [3, 4, 5, 6, 7, 8, 9]

    expect([...group(data5, 3)]).to.deep.equal([[3, 4, 5], [6, 7, null]])
    expect([...group(data7, 3)])
      .to.deep.equal([[3, 4, 5], [6, 7, 8], [9, null, null]])
  })

  it('should treat non-iterable as a single-element iterable', () => {
    const obj = {}
    const result = group(obj, 3)

    expect([...result])
      .to.have.property(0)
      .with.lengthOf(3)
      .and.deep.equal([obj, null, null])
  })

  it('should treat non-number or less then 1 length as a 1', () => {
    const data = [3, 4, 5]

    expect([...group(data, 'foo')]).to.deep.equal([[3], [4], [5]])
    expect([...group(data, 0)]).to.deep.equal([[3], [4], [5]])
  })
})
