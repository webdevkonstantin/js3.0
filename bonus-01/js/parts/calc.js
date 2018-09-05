"use strict";

require("core-js/modules/es6.regexp.replace");

function calc() {
  var persons = document.getElementsByClassName('counter-block-input')[0],
      restDays = document.getElementsByClassName('counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0;
  totalValue.innerHTML = 0;
  persons.addEventListener('change', function (e) {
    personsSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (restDays.value == '' || restDays.value == 0 || persons.value == '' || persons.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });
  restDays.addEventListener('change', function (e) {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (restDays.value == '' || restDays.value == 0 || persons.value == '' || persons.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });
  place.addEventListener('change', function (e) {
    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      var a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  }); // Вводим только цифры

  function enterOnlyNumbers(input) {
    input.addEventListener('input', function (e) {
      input.value = input.value.replace(/[^\d]/g, '');
      if (input.value.length > 2) input.value = input.value.slice(0, 2);
    });
  }

  enterOnlyNumbers(persons);
  enterOnlyNumbers(restDays);
}

module.exports = calc;