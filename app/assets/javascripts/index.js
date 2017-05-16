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

  // Cache selectors
  var topMenu = $("#header")
  var topMenuHeight = topMenu.outerHeight()+15
  // All list items
  var menuItems = $("#header #menu").find("a")
  // Anchors corresponding to menu items
  var scrollItems = menuItems.map(function(){
    var item = $($(this).attr("href"));
    return item;
  });

  // $(window).on("scroll", function() {
  //   console.log($(window).scrollTop());
  //   // Get container scroll position
  //   // var fromTop = $(this).scrollTop()+topMenuHeight;
  //   // // Get id of current scroll item
  //   // var cur = scrollItems.map(function(){
  //   //   if ($(this).offset().top < fromTop)
  //   //     return this;
  //   // });

  // });

  // Bind to scroll
  // $("#anchor").scroll(function(){
  //   console.log("At anchor!")


  //    // // Get the id of the current element
  //    // cur = cur[cur.length-1];
  //    // var id = cur && cur.length ? cur[0].id : "";
  //    // // Set/remove active class
  //    // menuItems
  //    //   .parent().removeClass("current_page_item")
  //    //   .end().filter("[href='#"+id+"']").parent().addClass("current_page_item");
  // });​
});
