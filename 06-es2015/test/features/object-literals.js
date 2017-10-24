import {
  es5,
  es6
} from '../../src/features/object-literals'

export default function() {
  it('should show object literals syntax in ES5', () => {
    var o = es5()

    o.i.should.eql(0)
    o.next().should.eql(1)
    o.next().should.eql(2)
    o.i.should.eql(2)
  })

  it.skip('should show enhanced object literals syntax in ES6', () => {
    let o = es6()

    o.i.should.eql(0)
    o.next().should.eql(1)
    o.next().should.eql(2)
    o.i.should.eql(2)
  })
}
