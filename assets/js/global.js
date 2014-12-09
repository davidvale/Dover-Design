
 // Global Nav 
$(document).ready(function(){
  $(".wrap_menu_button").click(function(){
  	$(".header").toggleClass("header_on");
    $(".header_nav").toggleClass("nav_active");
    $(".menu_button").toggleClass("on");
  });

  // archive section - work page
  $(".load_more_btn").click(function(){
  	$(".work__row__archive").removeClass("archived");
  	$(".work__cell").removeClass("archived");
  	$(".load_more").addClass("no_btn");
  });
});