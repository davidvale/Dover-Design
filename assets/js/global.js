$(document).ready(function(){
  $(".wrap_menu_button").click(function(){
  	$(".header").toggleClass("header_on");
    $(".header_nav").toggleClass("nav_active");
    $(".menu_button").toggleClass("on");
  });
});
