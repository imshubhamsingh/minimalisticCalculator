/* global $ */
var calculation = ''
var result = ''
var check = function () {
  if (calculation.endsWith('+') === true || calculation.endsWith('-') === true || calculation.endsWith('×') === true || calculation.endsWith('÷') === true || calculation.endsWith('.') === true)calculation = calculation.slice(0, calculation.length - 1)
}

var final = function () {
  $('#calculation').text(calculation)
  result = calculation.replace(/×/g, '*').replace(/÷/g, '/')
  result = eval(result)
  if (result > 9999999999) {
    result = result.toPrecision(6)
  }
  if (result < 0) {
    result = result.toPrecision(6)
  }
  result = (result === undefined) ? '&nbsp' : result.toString()
  $('#result').html(result)
}

$(document).on('click', '.plus', function () {
  check()
  calculation = calculation + '+'
  final()
})
$(document).on('click', '.minus', function () {
  check()
  calculation = calculation + '-'
  final()
})
$(document).on('click', '.equals', function () {
  result = calculation.replace(/×/g, '*').replace(/÷/g, '/')
  result = eval(result)
  $('#result').text(result)
  calculation = result.toString()
  $('#calculation').text('')
})
$(document).on('click', '.multiply', function () {
  check()
  calculation = calculation + '×'
  final()
})
$(document).on('click', '.divide', function () {
  check()
  calculation = calculation + '÷'
  final()
})
$(document).on('click', '#0', function () {
  calculation = calculation + '0'
  final()
})
$(document).on('click', '#1', function () {
  calculation = calculation + '1'
  final()
})
$(document).on('click', '#2', function () {
  calculation = calculation + '2'
  final()
})
$(document).on('click', '#3', function () {
  calculation = calculation + '3'
  final()
})
$(document).on('click', '#4', function () {
  calculation = calculation + '4'
  final()
})
$(document).on('click', '#5', function () {
  calculation = calculation + '5'
  final()
})
$(document).on('click', '#6', function () {
  calculation = calculation + '6'
  final()
})
$(document).on('click', '#7', function () {
  calculation = calculation + '7'
  final()
})
$(document).on('click', '#8', function () {
  calculation = calculation + '8'
  final()
})
$(document).on('click', '#9', function () {
  calculation = calculation + '9'
  final()
})
$(document).on('click', '#decimal', function () {
  check()
  calculation = calculation + '.'
  final()
})
$(document).on('click', '#del', function () {
  calculation = calculation.slice(0, calculation.length - 1)
  result = result.slice(0, result.length - 1)
  final()
})

$(document).on('click', '#C', function () {
  calculation = ''
  result = ''
  $('#calculation').text('')
  $('#result').html('&nbsp')
})
