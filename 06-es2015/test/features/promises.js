import {
  es5,
  es6
} from '../../src/features/promises'

export default function() {
  it('should wait for result in ES5', (done) => {
    es5(function(err, val) {
      if (err) {
        done(err)
      }
      val.should.eql(10)
      done()
    })
  })

  it.skip('should show Promise behavior in ES6', (done) => {
    es6()
      .then(val => val.should.eql(10) && done())
      .catch(err => done(err))
  })
}
