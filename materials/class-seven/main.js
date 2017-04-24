function clearInput(){
  $("ul").html("");
  $(".found-some").hide();
}

$(document).ready(function(){
  $(".found-some").hide();

  $(".rhyming-word-request").on("submit", function(e){
    e.preventDefault();
    var requestedWord = $("#word").val();

    // Datamuse API: http://www.datamuse.com/api/
    var url = "https://api.datamuse.com/words";
    var data = {
      "rel_rhy": requestedWord
    }

    // our API call goes here
    $.ajax({
      url: url,
      data: data,
      method: "GET"
    }).done(function(response){

      var ul = $("ul");

      for (var i=0; i < response.length; i++){
        var newWord = "<li>" + response[i].word + "</li>";
        $(ul).append(newWord)
      }

      $(".found-some").show();
    })
  });


  $(".rhyming-word-request input")
    .on("focus", clearInput)
    .on("keydown", clearInput)

});
