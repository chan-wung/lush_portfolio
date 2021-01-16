$(function() {
  $(".container").on("click", function() {
    var that = $(this);
    if (that.hasClass("is-open")) {
      that.removeClass("is-open").addClass("is-closed");
    $("nav").animate({left:"-350px"},800);
    } else {
      that.removeClass("is-closed").addClass("is-open");
      $("nav").animate({left:"0px"},800);
    }
  });
  $("nav > ul > li").mouseenter(function(){
    $(this).find(".submenu").stop().show();
  });
  $("nav > ul > li").mouseleave(function(){
    $(this).find(".submenu").stop().hide();
  });
  // $("nav > ul,.submenu").mouseenter(function(){
  //   // $(this).find(".submenu").stop().animate({left:"700px"},800);
  //   $(".submenu").stop().animate({left:"350px"},400);
  // });
  // $("nav > ul").mouseleave(function(){
  //   // $(this).find(".submenu").stop().animate({left:"0px"},800);
  //   $(".submenu").stop().animate({left:"-350px"},400);
  // });

  $(".shout_cut , p").mouseenter(function(){
    $(".shout_cut").css("border","solid #000 1px");
  });
  $(".shout_cut , p").mouseleave(function(){
    $(".shout_cut").css("border","solid #fff 1px");
  });
});
