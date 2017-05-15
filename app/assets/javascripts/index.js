$(document).ready(function() {
  $("#menu").on("click", "li", function(e) {
    e.preventDefault();
    $("#menu ul li").removeClass("current_page_item");
    $(this).addClass("current_page_item");
  });
});
