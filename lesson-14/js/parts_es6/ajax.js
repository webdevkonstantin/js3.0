function ajax () {
  let message = new Object();

  message.loading = "Загрузка...";
  message.success = "Спасибо! Скоро мы с вами свяжемся";
  message.failure = "Что-то пошло не так...";

  let mainForm = document.getElementsByClassName('main-form')[0],
      contactForm = document.getElementById('form'),
      statusMessage = document.createElement('div');
      statusMessage.classList.add('status');

  function sendForm(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      form.appendChild(statusMessage);
      let formData = new FormData(form);
      let input = form.getElementsByTagName('input');

      function postData(data) {

        return new Promise(function (resolve,reject) {
          let request = new XMLHttpRequest();

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
        for (let i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      } // End clearInput

      postData(formData)
        .then(()=> statusMessage.innerHTML = message.loading)
        .then(()=> {
          statusMessage.innerHTML = message.success;
        })
        .catch(()=> statusMessage.innerHTML = message.failure)
        .then(clearInput);
    });
  }

  sendForm(mainForm); // Modal form
  sendForm(contactForm); // Contact form
}

module.exports = ajax;
