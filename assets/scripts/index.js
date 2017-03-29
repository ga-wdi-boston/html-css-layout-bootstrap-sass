'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
  $('form').on('submit', function (event) {
    event.preventDefault()
    const input = $('#name').val()
    console.log(input)
  })
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');
