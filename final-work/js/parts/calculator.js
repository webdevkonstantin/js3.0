function calculator() {
  let selectSize = document.getElementById('size'),
      selectMaterial = document.getElementById('material'),
      selectOptions = document.getElementById('options'),
      inputPromocode = document.querySelector('.promocode'),
      totalValue = document.querySelector('.calc-price'),
      promocode = 'IWANTPOPART',
      discount = false,
      sizeSum = 0,
      materialSum = 0,
      optionsSum = 0,
      total = 0;

  selectSize.addEventListener('change', function () {
    sizeSum = +this.value;
    getTotalPrice();
  });

  selectMaterial.addEventListener('change', function () {
    materialSum = +this.value;
    getTotalPrice();
  });

  selectOptions.addEventListener('change', function () {
    optionsSum = +this.value;
    getTotalPrice();
  });

  inputPromocode.addEventListener('input', function () {
    discount = this.value.trim().toUpperCase() === promocode;
    getTotalPrice();
  });

  function getTotalPrice() {
    if (sizeSum !== 0 && materialSum !== 0) {
      total = sizeSum * materialSum + optionsSum;

      if (discount) total = total * 0.7;

      total = Math.round(total);
      totalValue.innerHTML = "<h3>" + total + "р.</h3>";
    } else if (sizeSum === 0 && materialSum !== 0) {
      total = 0;
      totalValue.innerHTML = 'Для расчета нужно выбрать размер картины';
    } else if (sizeSum !== 0 && materialSum === 0) {
      total = 0;
      totalValue.innerHTML = 'Для расчета нужно выбрать материал картины';
    } else {
      total = 0;
      totalValue.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
    }
  }
}

module.exports = calculator;