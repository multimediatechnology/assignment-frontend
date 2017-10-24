export function es2015_v5_classes() {
  var Father = function () {
  }
  Father.prototype.whoami = function () {
    return 'I am your father'
  }
  return Father
}

export function es2015_v6_classes() {
}

export function es2015_v5_inheritance() {
  var Father = es2015_v5_classes()
  var GrandFather = function() {}
  GrandFather.prototype = Object.create(Father.prototype)
  GrandFather.prototype.whoami = function () {
    return 'I am not Darth Vader anymore.'
  }
  return GrandFather
}

export function es2015_v6_inheritance() {
}
