import should from 'should'
import {
  es5,
  es6
} from '../../src/features/generators'

export default function() {
  it('should return an iterator in ES5', () => {
    var next = es5(3)
    next().should.eql(1)
    next().should.eql(2)
    next().should.eql(3)
    should(next()).eql(undefined)
  })

  it.skip('should return an iterator in ES6', () => {
    var itr = es6(3)
    itr.next().value.should.eql(1)
    itr.next().value.should.eql(2)
    itr.next().value.should.eql(3)
    should(itr.next().done).eql(true)
  })
}
