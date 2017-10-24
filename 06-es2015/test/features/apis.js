import {
  // ES2015
  es2015_v5_stringInterpolation,
  es2015_v6_stringInterpolation,
  es2015_v5_stringIteration,
  es2015_v6_stringIteration,
  es2015_v5_stringRepeat,
  es2015_v6_stringRepeat,

  // ES2016
  es2016_v5_includes,
  es2016_v6_includes,
  es2016_v5_exponentiation,
  es2016_v6_exponentiation,

  // ES2017
  es2017_v5_async,
  es2017_v6_async,
  es2017_v5_entries,
  es2017_v6_entries,
  es2017_v5_padStart,
  es2017_v6_padStart
} from '../../src/features/apis'

export default function () {
  // ES2015
  it('should test repeat() in ES5', () => {
    const str = es2015_v5_stringRepeat('abc', 3)
    str.should.eql('abcabcabc')
  })
  it.skip('should test repeat() in ES6', () => {
    const str = es2015_v6_stringRepeat('abc', 3)
    str.should.eql('abcabcabc')
  })

  it('should test String iteration in ES5', () => {
    const a = es2015_v5_stringIteration('abc')
    a.should.deepEqual(['a', 'b', 'c'])
  })
  it.skip('should test String iteration in ES6', () => {
    const a = es2015_v6_stringIteration('abc')
    a.should.deepEqual(['a', 'b', 'c'])
  })

  it('should test String interpolation in ES5', () => {
    const str = es2015_v5_stringInterpolation({a: 1, b: 2})
    str.should.eql('1:2')
  })
  it.skip('should test String interpolation in ES6', () => {
    const str = es2015_v6_stringInterpolation({a: 1, b: 2})
    str.should.eql('1:2')
  })

  // ES2016
  it('should test includes() in ES5', () => {
    es2016_v5_includes([1, 2, 3, 4, 5], 3).should.eql(true)
    es2016_v5_includes([1, 2, 3, 4, 5], 6).should.not.eql(true)
  })
  it.skip('should test includes() in ES6', () => {
    es2016_v6_includes([1, 2, 3, 4, 5], 3).should.eql(true)
    es2016_v6_includes([1, 2, 3, 4, 5], 6).should.not.eql(true)
  })

  it('should test exponentation in ES5', () => {
    es2016_v5_exponentiation(2, 2).should.eql(4)
  })
  it.skip('should test exponentation in ES6', () => {
    es2016_v6_exponentiation(2, 2).should.eql(4)
  })

  // ES2017
  it('should test async in ES2015', (done) => {
    es2017_v5_async()
      .then((body) => {
        body.should.be.String
        done()
      })
      .catch(err => done(err))
  })
  it.skip('should test async in ES2017', async () => {
    try {
      const body = await es2017_v6_async()
      body.should.be.String
    } catch (err) {
      console.error(err)
    }
  })

  it('should test entries() in ES2015', () => {
    const entries = es2017_v5_entries({a: 1, b: 2})
    entries.should.deepEqual([['a', 1], ['b', 2]])
  })
  it.skip('should test entries() in ES2017', () => {
    const entries = es2017_v6_entries({a: 1, b: 2})
    entries.should.deepEqual([['a', 1], ['b', 2]])
  })

  it('should test padStart() in ES2015', () => {
    const str = es2017_v5_padStart(8, 'mmt', 'rocks')
    str.should.eql('rocksmmt')
  })

  it.skip('should test padStart() in ES2017', () => {
    const str = es2017_v6_padStart(8, 'mmt', 'rocks')
    str.should.eql('rocksmmt')
  })
}
