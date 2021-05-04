'use strict';

$(document).ready(function () {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').on('click', function () {
    thermostat.increase();
    console.log(thermostat.increase())
    updateTemperature();
  });

  $('#temperature-down').on('click', function () {
    thermostat.decrease();
    updateTemperature();
    console.log(thermostat.increase())
  });

  $('#temperature-reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemp());
    $('#temperature').attr('class', thermostat.currentUsage());
  }
})