"use strict";

require("core-js/modules/es6.promise");

function promise() {
  var message = new Object();
  message.loading = "Загрузка...";
  message.success = "Спасибо! Скоро мы с вами свяжемся";
  message.failure = "Что-то пошло не так...";
  var mainForm = document.getElementsByClassName('main-form')[0],
      contactForm = document.getElementById('form'),
      statusMessage = document.createElement('div');
  statusMessage.classList.add('status');

  function sendForm(form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.appendChild(statusMessage);
      var formData = new FormData(form);
      var input = form.getElementsByTagName('input');

      function postData(data) {
        return new Promise(function (resolve, reject) {
          var request = new XMLHttpRequest();
          request.open("POST", 'server.php');
          request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

          request.onreadystatechange = function () {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4) {
              if (request.status === 200 && request.status < 300) {
                resolve();
              } else {
                reject();
              }
            }
          };

          request.send(data);
        });
      } // End postData


      function clearInput() {
        for (var i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      } // End clearInput


      postData(formData).then(function () {
        return statusMessage.innerHTML = message.loading;
      }).then(function () {
        statusMessage.innerHTML = message.success;
      }).catch(function () {
        return statusMessage.innerHTML = message.failure;
      }).then(clearInput);
    });
  }

  sendForm(mainForm); // Modal form

  sendForm(contactForm); // Contact form
}

module.exports = promise;