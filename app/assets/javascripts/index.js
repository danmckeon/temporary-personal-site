$(document).ready(function() {
  $("#menu").on("click", "li", function(e) {
    e.preventDefault();
    $("#menu ul li").removeClass("current_page_item");
    $(this).addClass("current_page_item");
    var targetAnchor = $(this).children().eq(0).attr("href");
    var aTag = $("a[name='"+ targetAnchor +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  });

  $("#logo").on("click", "h1", function(e) {
    e.preventDefault();
    $("#menu ul li").removeClass("current_page_item");
    $("#menu ul li").eq(0).addClass("current_page_item");
    var targetAnchor = $(this).children("a").eq(0).attr("href");
    var aTag = $("a[name='"+ targetAnchor +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  });
});
