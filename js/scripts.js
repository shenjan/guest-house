document.onreadystatechange = function () {
  if (document.readyState == "complete") {

    $('.carousel').carousel({interval: 1000000});

    $("#nav").on("click","a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();

      //забираем идентификатор бока с атрибута href
      var id  = $(this).attr('href');

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      var top = $(id).offset().top;

      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({scrollTop: top}, 1500);
    });

  }
}
