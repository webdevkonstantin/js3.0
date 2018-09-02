$(document).ready(function () {
  $('.main_btna, .main_btn, .main_nav ul li:eq(1)').click(function () {
    modalShow();
  });

  $('.close').click(function () {
    modalHide();
  });

  function modalShow () {
    $('.overlay').animate({opacity: 'show'},300);
    $('.modal').slideDown(500);
  }

  function modalHide () {
    $('.overlay').animate({opacity: 'hide'},300);
    $('.modal').slideUp(500);
  }
});
