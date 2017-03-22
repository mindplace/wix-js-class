function checkForArrayEquality(first, second) {
  if ((first === undefined) || (second === undefined)) { return false; }
  if (first.length != second.length) { return false; }
  for (var i=0; i < first.length; i++){
    if (first[i].outerHTML != second[i].outerHTML) {
      return false;
    }
  }
  return true;
}

$(document).ready(function(e){

  // Mobile menu
  $("#request-menu").on("click", function(e){
		if ($(".menu-items").hasClass("visible")){
			$(".menu-items").fadeOut();
			$(".menu-items").removeClass("visible");
		} else {
			$(".menu-items").fadeIn();
			$(".menu-items").addClass("visible");
		}
	});

  // Mobile menu
  $(window).on("resize", function(e){
    if ($(window).width() > 800) {
      $(".menu-items").show();
    }
  })

  // Search page
  if ($("#search-results").length) {
    var results = $("#search-results").children();
    if (!results.length) {
      var searchPrompter = "<li>Search for something in the search box at the top of the page!</li>"
      $("#search-results").append(searchPrompter);
    };
  };

  // Slides page
  if ($("#slides-page").length && ($(window).width() >= 600)) {
    var pages = $(".page-piece");
    $(pages).hide();

    var currentPage = 0;
    $(pages[currentPage]).toggle("slide", { direction: "right" }, 800);

    var currentElement = -1;
    var elements;
    var innerScroll = false;

    $(document).on('keyup', function(e){
      var nextPage = e.which == 39 || e.which == 40 || e.which == 32;
      var lastPage = e.which == 37 || e.which == 38;

      // Sliding to next page
      if (!innerScroll) {
        if (nextPage && (currentPage != pages.length - 1)) {
          $(pages[currentPage]).hide("slide", { direction: "left" }, 800);
          currentPage += 1
          $(pages[currentPage]).show("slide", { direction: "right" }, 800);

        } else if (lastPage && (currentPage > 0)) {
          $(pages[currentPage]).hide("slide", { direction: "right" }, 800);
          currentPage -= 1
          $(pages[currentPage]).show("slide", { direction: "left" }, 800);
        }

      }

      // Slide inside of a page
      if (nextPage) {
        currentElements = $(pages[currentPage]).find(".slide-element");
        if (!checkForArrayEquality(elements, currentElements)) { // new slide
          if (currentElements.length) {
            currentElement = -1;
            innerScroll = true;
            elements = currentElements;
            $(elements).hide();

          } else { innerScroll = false; }

        } else { // current slide
          if (currentElement < elements.length) {
            currentElement += 1;
            $(elements[currentElement]).toggle("slide", { direction: "right" }, 800);
            if (currentElement == elements.length - 1) { innerScroll = false; }

          } else { innerScroll = false; }
        }
      }

    });
  }

});
