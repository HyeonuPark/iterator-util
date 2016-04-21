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

  it('should return empty array when argument is not received or null', () => {
    expect(resolve()).to.be.empty
    expect(resolve(undefined)).to.be.empty
    expect(resolve(null)).to.be.empty
  })

  it('should not treat string as iterable', () => {
    expect([...resolve('foo')])
      .to.have.lengthOf(1)
      .and.have.property(0, 'foo')
  })
})
