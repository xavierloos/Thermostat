'use strict';

$(document).ready(function () {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').on('click', function () {
    thermostat.increase();
    updateTemperature();
    console.log(thermostat.increase())
  });

  $('#temperature-down').on('click', function () {
    thermostat.decrease();
    updateTemperature();
    console.log(thermostat.increase())
  });

  $('#temperature-reset').on('click', function () {
    thermostat.reset();
    updateTemperature();
  });

  $('#power-saving-on').on('click', function () {
    thermostat.switchOn();
    $('#power-saving-status').text('on');
    updateTemperature();
  });

  $('#power-saving-off').on('click', function() {
    thermostat.switchOff();
    $('#power-saving-status').text('off');
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemp());
    $('#temperature').attr('class', thermostat.currentUsage());
  }
})