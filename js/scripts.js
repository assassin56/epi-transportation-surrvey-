$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
// --------------- Palindrome functionality-----------------------------
    const string = $("#palindrome").val()
    const stringArray = string.split("");
    const stringReverseArray = stringArray.reverse();
    const stringReversed = stringReverseArray.join("")
    // if (stringReversed === string){
    //   $("#output").append(`<h2>${string} is a palindrome</h2>`);
    // } else {
    //   $("#output").append(`<h2>${string} is NOT a palindrome</h2>`);
    // }
//----------------------------Factorial functionality----------------------
    const number = $("#factorial").val();
    numbersArray = [];
    let counter = 0;
    let factorial = 1;
    while (counter < number) {
      let workingNumber = number;
      numbersArray.push(parseInt(workingNumber) - counter)
      counter ++;
    }
    for (let i = 0; i < numbersArray.length; i++) {
      factorial *= numbersArray[i];
    }
    $("#output-factorial").replaceWith(`<div id="output-factorial"></div>`)
    $("#output-factorial").append(`the factorial of ${number} is ${factorial}`);
    
  }); 
});
