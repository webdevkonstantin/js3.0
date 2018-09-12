function forms () {

	function formsEnable(index, styleText) {
		let message = {
		  		loading: 'Идет отправка сообщения...',
		  		success: 'Спасибо! Мы с Вами свяжемся!',
		  		failure: 'Ошибка! Что-то пошло не так...'
				},
				form = document.getElementsByTagName('form')[index],
				input = form.getElementsByTagName('input'),
				textarea = form.getElementsByTagName('textarea'),
				statusMsg = document.createElement('div');

		statusMsg.classList.add('status');
		statusMsg.style.cssText = styleText;

		for (let i = 0; i < input.length; i++) {
			input[i].addEventListener('input', function () {
				if (this.name == 'name' || this.name == 'message') {
					return this.value = this.value.replace(/[A-Za-z]/g, '');
				} else if (this.name == 'phone') {
					this.value = this.value.replace(/[A-Za-z]/g, '');
					this.value = this.value.replace(/[а-яА-ЯёЁ]/g, '');
				}
			});

		  input[i].addEventListener('focus', function () {
		    if (this.name === 'phone' && this.value.includes('+') === false) {
		        this.value = '+7 ';
		    }
		  });

		  input[i].addEventListener('keypress', function () {
		    if (this.name === 'phone') {
					this;
					let old = 0;
					let curLen = this.value.length;

					if (curLen < old) {
					    old--;
					    return;
					}

					if (curLen == 3) this.value += "(";
					if (curLen == 7) this.value += ")-";
					if (curLen == 12) this.value += "-";
					if (curLen == 15) this.value += "-";
					if (curLen > 17) this.value = this.value.substring(0, this.value.length - 1);

					old++;
		    }
		  });
		}

		form.addEventListener('submit', function (event) {
		  event.preventDefault();

		  // AJAX
		  let request = new XMLHttpRequest(),
		  		formData = new FormData(form);

		  request.open('POST', 'server.php');
		  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		  request.send(formData);

		  request.onreadystatechange = function () {
		    if (request.readyState < 4) {
		      form.appendChild(statusMsg);
		      statusMsg.innerHTML = message.loading;
		      statusMsg.style.display = 'block';
		    } else if (request.readyState === 4) {
		      if (request.status == 200 && request.status < 300) {
		        for (let j = 0; j < form.children.length; j++) {
		            form.children[j].style.display = 'none';
		        }
		        statusMsg.innerHTML = message.success;
		        form.appendChild(statusMsg);
		        statusMsg.style.display = 'block';
		        // Добавляем контент на страницу
		      } else {
		        for (let k = 0; k < form.children.length; k++) {
		            form.children[k].style.display = 'none';
		        }
		        statusMsg.innerHTML = message.failure;
		        form.appendChild(statusMsg);
		        statusMsg.style.display = 'block';                             
		      }
		    }
		  };

			for (let l = 0; l < input.length; l++) {
				input[l].value = '';
				//Очищаем поля ввода
			}

			for (let t = 0; t < textarea.length; t++) {
				textarea[t].value = '';
				//Очищаем поля ввода
			}

		});
	}

  formsEnable(1, "text-align: center; \ font-weight: bold; \ font-size: 60px;");
 	formsEnable(2, "text-align: center; \ font-weight: bold; \ font-size: 30px;");
  formsEnable(3, "text-align: center; \ font-weight: bold; \ font-size: 30px;");
}

module.exports = forms;