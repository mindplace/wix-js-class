function randomNumber(max){
  return Math.floor(Math.random() * max)
}

function randomColor() {
  var colors = ["red", "orange", "yellow", "green", "blue", "purple", "black", "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "blanchedalmond", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "indianred", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuschia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "greenyellow", "honeydew", "hotpink", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "navy", "oldlace", "olive", "olivedrab", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "rosybrown", "royalblue", "saddlebrown", "seagreen", "seashell", "sienna", "silver", "snow", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat"]

  var number = randomNumber(colors.length)
  return colors[number];
}

function getComputerChoice(){
  var choices = ["rock", "paper", "scissors"];
  return choices[randomNumber(choices.length)];
}

function colorHumanAndComputerChoices(humanChoice, computerChoice) {
  var chosenColor = randomColor();
  $("#human #human-" + humanChoice).css("background", chosenColor);
  $("#computer #computer-" + computerChoice).css("background", chosenColor);
}

function clearBackgrounds(element){
  var initialBackground = "rgb(211, 211, 211) none repeat scroll 0% 0% / auto padding-box border-box";
  var white = "rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box";

  // Before hover, element had no color
  if ($(element).css("background") == initialBackground) {
    $(element).css("background", white);

  // Just left hover, was just white on hover, now should be blank again
  } else if ($(element).css("background") == white){
    $(element).css("background", initialBackground);
  } else {
    $(element).css("background", initialBackground);
  }

  $("#computer .box").css("background", initialBackground);
}

$(document).ready(function(){
  $("#human .box")
    .on("mouseover", function(e) { clearBackgrounds(this) })
    .on("mouseleave", function(e) { clearBackgrounds(this) });
})
