$(document).ready(function(){

 // Global Nav 
  $(".wrap_menu_button").click(function(){
  	$(".header").toggleClass("header_on");
    $(".header_nav").toggleClass("nav_active");
    $(".menu_button").toggleClass("on");
  });

  // archive section - work page
  $(".archive_btn").click(function(){
  	$(".work__cell.more_proj").toggleClass("archived");
    $(".archive_btn.more").toggleClass("no_btn");
    $(".archive_btn.less").toggleClass("no_btn");
  });

  // work pop-up
  $(".close_btn").click(function(){
    $(".work_pop-up_wraper").addClass("no_pop-up");
    $(".wrapper").removeClass("no_scroll");
  });
  $(".case-study_btn").click(function(){
    $(".work_pop-up_wraper").removeClass("no_pop-up");
    $(".wrapper").addClass("no_scroll");
  });

  // Team pop-up
  $(".close_btn").click(function(){
    $(".pop-up_wraper").addClass("no_pop-up");
    $(".wrapper").removeClass("no_scroll");
  });

  $(".pop-1").click(function(){
    $(".pop-up_1").removeClass("no_pop-up");
    $(".wrapper").addClass("no_scroll");
  });

  $(".pop-2").click(function(){
    $(".pop-up_2").removeClass("no_pop-up");
    $(".wrapper").addClass("no_scroll");
  });

  $(".pop-3").click(function(){
    $(".pop-up_3").removeClass("no_pop-up");
    $(".wrapper").addClass("no_scroll");
  });

  // Remove rollover

  if ('ontouchstart' in document.documentElement) {
    // Add class
    document.querySelector('body').className='touch';
    try {
      var ignore = /:hover/;

      function removeRules(sheet) {
        for (var j = sheet.cssRules.length - 1; j >= 0; j--) {
          var rule = sheet.cssRules[j];
          if (rule.type === CSSRule.MEDIA_RULE) {
            removeRules(rule);
          }
          else if (rule.type === CSSRule.STYLE_RULE) {
            if(ignore.test(rule.selectorText)) {
              sheet.deleteRule(j);
            }
          }
        }
      }

      for (var i = 0; i < document.styleSheets.length; i++) {
        var sheet = document.styleSheets[i];
        if (!sheet.cssRules) {
          continue;
        }
        
        removeRules(sheet);
      }
    } catch (e) {}
  }


});



