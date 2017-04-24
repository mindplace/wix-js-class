function randomNumber(max){
  return Math.floor(Math.random() * max)
}

function randomColor() {
  var colors = ["red", "orange", "yellow", "green", "blue", "purple", "black", "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "blanchedalmond", "blueviolet", "brown", "burlywood", "cadetblue",
  "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen",
  "indianred", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuschia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "greenyellow", "honeydew",
  "hotpink", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow",
  "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "navy", "oldlace", "olive",
  "olivedrab", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "rosybrown", "royalblue", "saddlebrown", "seagreen", "seashell", "sienna", "silver",
  "snow", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat"]

  var number = randomNumber(colors.length)
  return colors[number];
}

function getComputerChoice(){
  var choices = ["rock", "paper", "scissors"];
  return choices[randomNumber(choices.length)];
}

function calculateWinner(humanChoice, computerChoice){
  var winOptions = {
    paper: {
      rock: false,     // rock loses
      scissors: true,  // scissors wins
      paper: null,     // tie
    },

    scissors: {
      rock: true,      // rock wins
      scissors: null,  // tie
      paper: false,    // paper loses
    },

    rock: {
      rock: null,      // tie
      scissors: false, // scissors loses
      paper: true,     // paper wins
    }
  }

  var result = winOptions[humanChoice][computerChoice];

  if (result === true) {
    return "Computer"
  } else if (result === false) {
    return "Human"
  } else { return "Tie! Nobody" }
}

function clearBackgrounds(){
  $("#human .box").css("background", "none");
  $("#computer .box").css("background", "none");
}

$(document).ready(function(){

  $("#human .box").on("click", function(e){
    clearBackgrounds();
    var humanChoice = $(this).attr("id").split("-")[1];

    var computerChoice = getComputerChoice();
    var result = calculateWinner(humanChoice, computerChoice);

    var chosenColor = randomColor();
    $(this).css("background", chosenColor);
    $("#computer #computer-" + computerChoice).css("background", chosenColor);

    $("#who-won").text(result);
    $("#results-area").show();
  });

});
