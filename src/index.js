// All functions have "window." due to hint:
// https://stackoverflow.com/questions/57602686/
//   javascript-function-wont-trigger-when-called-in-html-file-during-parcel-build

const { createGroups } = require('./util.js')

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

  slides = []
  var maxLen = 6
  if (lines.length < maxLen) {
    maxLen = lines.length
  }
  for (var i = 1; i <= maxLen; ++i) {
    const g = createGroups(lines, i)
    for (var j = 0; j < g.length; ++j) {
      const h = {
        lineCount: i,
        text: g[j],
        groupIndex: j,
        groupLength: g.length,
      }
      slides.push(h)
    }
  }

  document.getElementById('textToLearn').rows = '3'
  document.getElementById('textToLearn').style.height = '50px'
  document.getElementById('userInput').style.visibility = 'hidden'
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

window.showInput = function() {
  document.getElementById('userInput').style.visibility = 'visible'
}

// Thumbnail image controls
window.currentSlide = function(n) {
  showSlide(slideIndex = n)
}

window.showSlide = function(n) {
  if (slides.length == 0)
    return;

  h = slides[n]
  document.getElementById('output').innerHTML = h.text.replaceAll('\n', '<br />')

  var counter = 'lines'
  if (h.lineCount == 1) {
    counter = 'line'
  }
  var pagenum = `${n + 1}/${slides.length} (${h.lineCount} ${counter}: ${h.groupIndex + 1}/${h.groupLength})`
  document.getElementById('pageNumber').innerHTML = pagenum
}
