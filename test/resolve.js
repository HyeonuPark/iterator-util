import {expect} from 'chai'
import {resolve} from '../src/resolve'

describe('resolve()', () => {
  it('should return argument without modifying when it\'s iterable', () => {
    const iterable = []
    expect(resolve(iterable)).to.equal(iterable)
  })

  it('should return array-wraped argument when it\'s not iterable', () => {
    const nonIterable = {}
    expect(resolve(nonIterable))
      .to.have.lengthOf(1)
      .and.have.property(0, nonIterable)
  })

  it('should return empty array when argument not received', () => {
    expect(resolve()).to.be.empty
  })
})
