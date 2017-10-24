import {
  es5,
  es6
} from '../../src/features/template-strings'

export default function() {
  it('should demo template functions in ES5', () => {
    es5(10).should.eql('My value is more than 10.')
  })

  it.skip('should show template strings in ES6', () => {
    es6(10).should.eql('My value is more than 10.')
  })
}
