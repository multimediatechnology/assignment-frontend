import apis from './features/apis'
import arrows from './features/arrows'
import classes from './features/classes'
import defaultRestSpread from './features/default-rest-spread'
import destructuring from './features/destructuring'
import generators from './features/generators'
import iteratorsForof from './features/iterators-forof'
import letConst from './features/let-const'
import mapSet from './features/map-set'
import modules from './features/modules'
import objectLiterals from './features/object-literals'
import promises from './features/promises'
import templateStrings from './features/template-strings'

describe('lib', () => {
  describe('apis', apis)
  describe('arrows', arrows)
  describe('classes', classes)
  describe('default-rest-spread', defaultRestSpread)
  describe('destructuring', destructuring)
  describe('generators', generators)
  describe('iterators-forof', iteratorsForof)
  describe('let-const', letConst)
  describe('map-set', mapSet)
  describe('modules', modules)
  describe('object-literals', objectLiterals)
  describe('promises', promises)
  describe('template-strings', templateStrings)
})
