// All functions have "window." due to hint:
// https://stackoverflow.com/questions/57602686/
//   javascript-function-wont-trigger-when-called-in-html-file-during-parcel-build

const { createGroups } = require('./util.js')

/**
 * Fill in greetings.
 */
window.sayHello = function() {
  var startingText = 'Copy and paste here\nThe text you will be learning\nClick Start when ready.'
  document.getElementById('textToLearn').value = startingText
}


/**
 * Generate the bidirectional reader.
 */
window.startShow = function() {

  function getLines(elid) {
    var t = document.getElementById(elid).value
    var pars = t.split(/\r?\n/g)
    return pars.filter(e => e && e.trim() !== '')
  }

  var lines = getLines("textToLearn")

  var groups = []
  for (var i = 2; i <= 6; ++i) {
    console.log(`here is ${i}`)
    groups.push(createGroups(lines, i))
  }
  groups = groups.flat()

  document.getElementById('output').innerHTML = groups.join('');
}
