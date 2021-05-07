'use strict';
$(document).ready(() => {
  var thermostat = new Thermostat();
  updateTemperature();
  $('#temperature-up').on('click', () => {
    thermostat.increase();
    updateTemperature();
  });
  $('#temperature-down').on('click', () => {
    thermostat.decrease();
    updateTemperature();
  });
  $('#temperature-reset').on('click', () => {
    thermostat.reset();
    updateTemperature();
  });
  $('#power-saving-on').on('click', () => {
    thermostat.switchOn();
    $('#power-saving-status').text('ON');
    updateTemperature();
  });
  $('#power-saving-off').on('click', () => {
    thermostat.switchOff();
    $('#power-saving-status').text('OFF');
    updateTemperature();
  })
  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemp());
    $('#temperature').attr('class', thermostat.currentUsage());
    $("#status-bar").attr({ "value": thermostat.getCurrentTemp() });
    $("#status-bar").attr({ "min": thermostat.getMinTemp() });
    $("#status-bar").attr({ "max": thermostat.getMaxTemp() });

  }
})