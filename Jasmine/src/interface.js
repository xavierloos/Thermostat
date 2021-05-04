'use strict';

$(document).ready(function () {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').on('click', function() {
    thermostat.increase();
    console.log(thermostat.increase())
    updateTemperature();
  });
  
  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemp());
    $('#temperature').attr('class', thermostat.currentUsage());
  }
})