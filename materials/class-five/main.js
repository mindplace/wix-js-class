// Takes number, returns true or false based on whether number is valid
function checkIfNumberIsValid(number) {
  var numberChecker = /^(?=.)(([1-9][0-9]{0,20}(,[0-9]{3})*)|[0-9]+)?(\.[0-9]{1,20})?$/
  return numberChecker.test(number)
}

// Takes number, returns a string of that number as money (without dollar sign)
function turnNumberIntoMoney(number){
  var piecesArray = number.split(/(\.){1}/g);
  if (piecesArray.length == 1) { piecesArray.push(".", "00"); }
  if (!piecesArray[0].length) { piecesArray[0] = "00"; }

  if (!piecesArray[2].length) { piecesArray[2] = "00";
  } else if (piecesArray[2].length == 1) { piecesArray[2] = piecesArray[2] + "0";
  } else if (piecesArray[2].length > 2) { piecesArray[2] = piecesArray[2].slice(0,2); }

  return piecesArray.join("");
}




// Part 1:
function appendNewMoneyResult(number){

  // This function should make 'number' the current value of #result.

}

// Call the function to test its functionality
appendNewMoneyResult("200")



// ---------------------------------------------------------------------------------
// Code that runs as soon as the page is loaded


console.log("Hello from main.js!")













// Part 2:
//
// Define a listener that fires when 'enter' is pressed.
//
// When 'enter' is pressed, grab the value of the money input
// and check whether it's valid (using checkIfNumberIsValid function).
//
// If it is, turn it into money using the turnNumberIntoMoney function.
// Then give the new money number to your appendNewMoneyResult function to show to the user.

// Things that might help you:
// https://www.w3schools.com/jsref/event_onkeypress.asp
// the number of the 'enter' press is 13
