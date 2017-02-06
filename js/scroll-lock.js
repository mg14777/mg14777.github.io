// Scroll lock function
$(document).ready(function() {
  
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      //console.log($(window).scrollTop())
    if ($(window).scrollTop() > 280) {
      $('#nav_bar').addClass('navbar-fixed');
      $("#main-navbar").css("background","rgba(255, 255,255,1)");
      $("#sections").css("color","black");
      $("#logo-id").css("width","3%");
      $("#logo-id").css("margin","0.5%");
    }
    if ($(window).scrollTop() < 281) {
      $('#nav_bar').removeClass('navbar-fixed');
      $("#main-navbar").css("background","rgba(255, 255,255,0)");
      $(".navbar-collapse").css("color","white");
      $("#logo-id").css("width","7%");
      $("#logo-id").css("margin","1%");
    }
    
  });
});