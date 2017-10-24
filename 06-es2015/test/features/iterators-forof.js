import {
  es5,
  es6
} from '../../src/features/iterators-forof'

export default function() {
  it('should return result sum of array values in ES5', () => {
    es5().should.eql(15)
  })

  it.skip('should return sum of array values in ES6', () => {
    es6().should.eql(15)
  })
}
