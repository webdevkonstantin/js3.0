// Поиск простых чисел с помощью Решета Эратосфена
function getSimpleNumber(max) {
    var arr = [];

    // Создаем блок с заголовком
    var title = document.createElement('h3');
    title.innerHTML = "Простые числа: ";
    document.body.appendChild(title);

    // Создаем нумерованный список
    var itemsList = document.createElement('ul');
    itemsList.style.marginLeft = '0'; // убираем отступы для ul
    itemsList.style.paddingLeft = '0'; // убираем отступы для ul
    document.body.appendChild(itemsList);

    // Всем элементам массива с ключом от 2 до max
    // присваиваем значение true
    for (var i = 2; i < max; i++) {
        arr[i] = true
    }
    // это первое простое число.
    var p = 2;

    do {
        // Исключаем все последующие числа в списке с разницей в p
        for (i = 2 * p; i < max; i += p) {
            arr[i] = false;
        }

        for (i = p + 1; i < max; i++) {
            if (arr[i]) break;
        }
        // Меняем значение p на первое не зачеркнутое число после p
        p = i;
    } while (p * p < max);

    for (i = 0; i < arr.length; i++) {
        if (arr[i]) {
            let child = document.createElement('li');
            child.style.listStyleType = 'none'; // убираем маркеры для li
            child.innerHTML = i + ': делители этого числа: 1 и ' + i;
            itemsList.appendChild(child);
        }
    }
}
getSimpleNumber(100);