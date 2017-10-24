import {
  es2015_v5_classes,
  es2015_v6_classes,
  es2015_v5_inheritance,
  es2015_v6_inheritance,
} from '../../src/features/classes'

export default function () {
  it('should show classes in ES5', () => {
    const Father = es2015_v5_classes()
    const darthVader = new Father()
    darthVader.whoami().should.eql('I am your father')
  })

  it.skip('should show classes in ES6', () => {
    const Father = es2015_v6_classes()
    const darthVader = new Father()
    darthVader.whoami().should.eql('I am your father')
  })

  it('should show inheritance in ES5', () => {
    const GrandFather = es2015_v5_inheritance()
    const unknown = new GrandFather()
    unknown.whoami().should.eql('I am not Darth Vader anymore.')
  })

  it.skip('should show inheritance in ES6', () => {
    const GrandFather = es2015_v6_inheritance()
    const unknown = new GrandFather()
    unknown.whoami().should.eql('I am not Darth Vader anymore.')
  })
}
