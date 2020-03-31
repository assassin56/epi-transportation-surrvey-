$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    const string = $("#palindrome").val()
    const stringArray = string.split("");
    console.log(stringArray);
    const stringReverseArray = stringArray.reverse();
    const stringReversed = stringReverseArray.join("")
    // stringArray.reverse()
    console.log(`string ${string}`);
    console.log(`stringReversed ${stringReversed}`);

  });
    
});
