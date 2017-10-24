export function es5() {
  var MySet = function() {
    this.set = []
  }
  MySet.prototype.add = function(val) {
    this.set.push(val)
    return this
  }
  MySet.prototype.has = function(val) {
    if (this.set.indexOf(val) === -1) {
      return false
    }
    return true
  }
  MySet.prototype.size = function get() {
    return this.set.length
  }

  var MyMap = function() {
    this.map = {}
  }
  MyMap.prototype.set = function(key, val) {
    if (typeof key !== 'string') {
      throw new Error('"key" must be of type "String"')
    }
    this.map[key] = val
  }
  MyMap.prototype.get = function(key) {
    return this.map[key]
  }
  MyMap.prototype.has = function(key) {
    return this.map.hasOwnProperty(key)
  }

  return Object.freeze({
    MySet: MySet,
    MyMap: MyMap
  })
}

export function es6() {
  // Just implement the test!
}
