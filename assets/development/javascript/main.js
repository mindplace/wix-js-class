$(document).ready(function(e){

  $("#request-menu").on("click", function(e){
		if ($(".menu-items").hasClass("visible")){
			$(".menu-items").fadeOut();
			$(".menu-items").removeClass("visible");
		} else {
			$(".menu-items").fadeIn();
			$(".menu-items").addClass("visible");
		}
	});

  $(window).on("resize", function(e){
    if ($(window).width() > 800) {
      $(".menu-items").show();
    }
  })

  if ($("#search-results").length) {
    var results = $("#search-results").children();
    if (!results.length) {
      var searchPrompter = "<li>Search for something in the search box at the top of the page!</li>"
      $("#search-results").append(searchPrompter);
    };
  };

  if ($("#class-page").length) {
    var pages = $(".page-piece");
    $(pages).hide();

    var current = 0;
    $(pages[current]).toggle("slide", {direction: "right" }, 800);

    $(document).on('keyup', function(e){
      var next = e.which == 39 || e.which == 40 || e.which == 32
      var last = e.which == 37 || e.which == 38

      if (next && (current != pages.length - 1)) {
        $(pages[current]).hide("slide", { direction: "left" }, 800);
        current += 1
        $(pages[current]).show("slide", { direction: "right" }, 800);

      } else if (last && (current > 0)) {
        $(pages[current]).hide("slide", { direction: "right" }, 800);
        current -= 1
        $(pages[current]).show("slide", { direction: "left" }, 800);
      }
    });






  }

});
