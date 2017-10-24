import should from 'should'
import {
  es5,
  es6
} from '../../src/features/let-const'

export default function() {
  it('should show let and const feature in ES5', () => {
    var o = es5()
    o.constants(3).should.eql(8)
    o.scope(3).should.eql(3)
  })

  it.skip('should show let and const feature in ES6', () => {
    const o = es6()
    should(o.constants(3)).eql(8)
    should(function() {
      o.scope(3).should.eql(3)
    }).throw('i is not defined')

  })
}
