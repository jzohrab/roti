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

/** Current slide being shown. */
let slideIndex = 0;

/** All slide content. */
let slides = [];

/**
 * Generate slide content and show first slide.
 */
window.startShow = function() {
  console.log('start clicked')

  function getLines(elid) {
    var t = document.getElementById(elid).value
    var pars = t.split(/\r?\n/g)
    return pars.filter(e => e && e.trim() !== '')
  }

  var lines = getLines("textToLearn")

  var groups = []
  var maxLen = 6
  if (lines.length < maxLen) {
    maxLen = lines.length
  }
  for (var i = 2; i <= maxLen; ++i) {
    groups.push(`${i} lines`)
    groups.push(createGroups(lines, i))
  }
  groups.push('-')
  slides = groups.flat()

  showSlide(0)
}


// Next/previous controls
window.plusSlides = function(n) {
  var i = slideIndex + n
  if (i >= slides.length) {
    i = 0
  }
  if (i < 0) {
    i = slides.length - 1
  }
  slideIndex = i

  showSlide(slideIndex)
}

// Thumbnail image controls
window.currentSlide = function(n) {
  showSlide(slideIndex = n)
}

window.showSlide = function(n) {
  console.log(`showing slide ${n}, text = ${slides[n]}`)
  document.getElementById('output').innerHTML = slides[n].replaceAll('\n', '<br />')
}
