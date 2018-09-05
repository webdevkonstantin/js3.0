// on enter
$(".calculator").addClass("pre-enter");
setTimeout(function(){
  $(".calculator").addClass("on-enter");
}, 500);
setTimeout(function(){
  $(".calculator").removeClass("pre-enter on-enter");
}, 2000);

// calculator
// heavily modified from @supah's calculator
// https://codepen.io/supah/pen/pgGYBe
var $keys = $('button');
var $total = $('.total');
var $summary = $('.summary');
var decimal = false;
var operators = ['+', '-', '×', '÷'];

$keys.click(function() {
  var keyVal = $(this).data('val');
  output = $summary.html();
  var lastChar = output[output.length - 1];

  // clear
  if (keyVal == 'clear') {
    $total.html('0');
    $summary.html('');
    decimal = false;
  }

  // equal
  else if (keyVal == '=') {
    output = output.replace(/×/g, '*').replace(/÷/g, '/');
    if (operators.indexOf(lastChar) > -1 || lastChar == '.')
      output = output.replace(/.$/, '');
    if (output) {
      $total.html(Math.round(eval(output)*10000000)/10000000);
    }
    $summary.addClass("complete");
    decimal = false;
  }

  // operators
  else if ($(this).parent().parent().parent().is('.operators')) {
    if ($summary.is(".complete")) {
      $summary.removeClass("complete");
    }
    if (output != '' && operators.indexOf(lastChar) == -1) {
      $summary.html($summary.html() + keyVal);
    } else if (output == '' && keyVal == '-') {
      $summary.html($summary.html() + keyVal);
    }
    if (operators.indexOf(lastChar) > -1 && output.length > 1) {
      $summary.html($summary.html().replace(/.$/, keyVal));
    }
    decimal = false;
  }

  // decimal
  else if (keyVal == '.') {
    if ($summary.is(".complete")) {
      $summary.html('0' + keyVal);
      $summary.removeClass("complete");
    } else if (output == '') {
      $summary.html('0' + keyVal);
    } else if (operators.indexOf(lastChar) > -1) {
      $summary.html($summary.html() + '0' + keyVal);
    } else {
      if (!decimal) {
        $summary.html($summary.html() + keyVal);
        decimal = true;
      }
    }
  }

  // numerals
  else {
    if ($summary.is(".complete")) {
      $summary.html(keyVal);
      $summary.removeClass("complete");
    } else {
      $summary.html($summary.html() + keyVal);
    }
  }
})

$(window).keydown(function(e) {
  console.log(e.which);
  switch (e.which) {
    case 48:
      key = 0;
      break;
    case 49:
      key = 1;
      break;
    case 50:
      key = 2;
      break;
    case 51:
      key = 3;
      break;
    case 52:
      key = 4;
      break;
    case 53:
      key = 5;
      break;
    case 54:
      key = 6;
      break;
    case 55:
      key = 7;
      break;
    case 56:
      key = 8;
      break;
    case 57:
      key = 9;
      break;

    case 191:
      key = '÷';
      break;
    case 190:
      key = '.';
      break;
    case 88:
      key = '×';
      break;
    case 189:
      key = '-';
      break;
    case 187:
      key = '+';
      break;
    case 67:
      key = 'clear';
      break;

    case 96:
      key = 0;
      break;
    case 97:
      key = 1;
      break;
    case 98:
      key = 2;
      break;
    case 99:
      key = 3;
      break;
    case 100:
      key = 4;
      break;
    case 101:
      key = 5;
      break;
    case 102:
      key = 6;
      break;
    case 103:
      key = 7;
      break;
    case 104:
      key = 8;
      break;
    case 105:
      key = 9;
      break;

    case 111:
      key = '÷';
      break;
    case 109:
      key = '-';
      break;
    case 106:
      key = '×';
      break;
    case 107:
      key = '+';
      break;
    case 13:
      key = '=';
      break;
    case 110:
      key = '.';
      break;
    case 27:
      key = 'clear';
      break;
    default:
      return false;
  }
  $('[data-val="' + key + '"]').addClass('active').click();
}).keyup(function(){
  $('.active').removeClass('active');
});