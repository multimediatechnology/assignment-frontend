import {
  es5,
  es6
} from '../../src/features/destructuring'

export default function() {
  it('should destructure object and sum up values in ES5', () => {
    var d = es5()
    d({
      x: 1,
      y: 2,
      z: 3
    }).should.eql(6)
    d({
      x: 1,
      y: 2
    }).should.eql(3)
  })

  it.skip('should destructure object and sum up values in ES6', () => {
    const d = es6()
    d({
      x: 1,
      y: 2,
      z: 3
    }).should.eql(6)
    d({
      x: 1,
      y: 2
    }).should.eql(3)
  })
}
