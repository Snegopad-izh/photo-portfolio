$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
      $(".header__list").toggleClass("is-active");
      $(".header__nav").toggleClass("is-active");
    });
});