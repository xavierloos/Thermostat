'use strict';

$(document).ready(() => {
  var thermostat = new Thermostat();
  updateTemperature();
  $('#temperature-up').on('click', () => {
    thermostat.increase();
    updateTemperature();
    console.log(thermostat.increase())
  });
  $('#temperature-down').on('click', () => {
    thermostat.decrease();
    updateTemperature();
    console.log(thermostat.decrease())
  });
  $('#temperature-reset').on('click', () => {
    thermostat.reset();
    updateTemperature();
  });
  $('#power-saving-on').on('click', () => {
    thermostat.switchOn();
    $('#power-saving-status').text('on');
    updateTemperature();
  });
  $('#power-saving-off').on('click', () => {
    thermostat.switchOff();
    $('#power-saving-status').text('off');
    updateTemperature();
  })
  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemp());
    $('#temperature').attr('class', thermostat.currentUsage());
  }
})