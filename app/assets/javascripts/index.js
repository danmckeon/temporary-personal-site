$(document).ready(function() {
  $("#menu").on("click", "li", function(e) {
    e.preventDefault();
    $("#menu ul li").removeClass("current_page_item");
    $(this).addClass("current_page_item");
    var targetAnchor = $(this).children().eq(0).attr("href");
    var aTag = $("a[name='"+ targetAnchor +"']");
    $(document).scrollTop( aTag.offset().top );
  });

  $("#logo").on("click", "h1", function(e) {
    e.preventDefault();
    $("#menu ul li").removeClass("current_page_item");
    $("#menu ul li").eq(0).addClass("current_page_item");
    var targetAnchor = $(this).children("a").eq(0).attr("href");
    var aTag = $("a[name='"+ targetAnchor +"']");
    $(document).scrollTop( aTag.offset().top );
  });

  var anchors = document.getElementsByClassName("anchor");

  $( window ).scroll(function() {
    var fromTop = $(this).scrollTop() + 15;
    for (i = 0; i < anchors.length; i++) {
      if (anchors[i + 1] && anchors[i].offsetTop < fromTop && anchors[i + 1].offsetTop >= fromTop) {
        $("#menu ul li").removeClass("current_page_item");
        $("#menu ul li").eq(i).addClass("current_page_item");
      } else if (anchors[i].offsetTop < fromTop){
        $("#menu ul li").removeClass("current_page_item");
        $("#menu ul li").eq(i).addClass("current_page_item");
      }
    }
  });
});
