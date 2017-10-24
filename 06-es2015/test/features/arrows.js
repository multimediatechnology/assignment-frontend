import {
  es5,
  es6
} from '../../src/features/arrows'

export default function() {
  it('should show arrows behavior in ES5', () => {
    es5().result.should.eql(15)
  })

  it.skip('should show arrows behavior in ES6', () => {
    es6().result.should.eql(15)
  })
}
