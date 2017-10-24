import fetch from 'node-fetch'

// ES2015
export function es2015_v5_stringInterpolation(values) {
  return values.a + ':' + values.b
}

export function es2015_v6_stringInterpolation(values) {
}

export function es2015_v5_stringIteration(str) {
  var a = []
  for (var i = 0; i < str.length; i += 1) {
    a.push(str[i])
  }
  return a
}

export function es2015_v6_stringIteration(str) {
}

export function es2015_v5_stringRepeat(str, times) {
  var result = ''
  for (var i = 0; i < times; i += 1) {
    result += str
  }
  return result
}

export function es2015_v6_stringRepeat(str, times) {
}

// ES2016
export function es2016_v5_includes(list, val) {
  function includes(arr, val) {
    if (arr.indexOf(val) !== -1) {
      return true
    }
    return false
  }

  return includes(list, val)
}

export function es2016_v6_includes(list, val) {
}

export function es2016_v5_exponentiation(base, pow) {
  return Math.pow(base, pow)
}

export function es2016_v6_exponentiation(base, pow) {
}

// ES2017
export function es2017_v5_async() {
  return fetch('https://github.com/')
    .then(res => res.text())
}

export async function es2017_v6_async() {
}

// padStart polyfill
function padStart(targetLength, str, padString) {
  targetLength = targetLength >> 0
  padString = String(padString || ' ')
  if (str.length > targetLength) {
    return String(str)
  }
  else {
    targetLength = targetLength - str.length
    if (targetLength > padString.length) {
      padString += padString.repeat(targetLength / padString.length)
    }
    return padString.slice(0, targetLength) + String(str)
  }
}

export function es2017_v5_padStart(len, str, char) {
  return padStart(len, str, char)
}

export function es2017_v6_padStart(len, str, char) {
}


export function es2017_v5_entries(obj) {
  // Object.entries polyfill
  function entries(obj) {
    var ownProps = Object.keys(obj)
    var i = ownProps.length
    var resArray = new Array(i)
    while (i--) {
      resArray[i] = [ownProps[i], obj[ownProps[i]]]
    }
    return resArray
  }

  return entries(obj)
}

export function es2017_v6_entries(obj) {
}
