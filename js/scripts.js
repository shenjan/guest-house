document.onreadystatechange = function () {
   if (document.readyState == "complete") {
    // document is ready. Do your stuff here
    $('.carousel').carousel();
  }
}
