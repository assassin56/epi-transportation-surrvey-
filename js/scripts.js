$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    const string = $("#palindrome").val()
    const stringArray = string.split("");
    const stringReverseArray = stringArray.reverse();
    const stringReversed = stringReverseArray.join("")
    if (stringReversed === string){
      $("#output").append(`<h2>${string} is a palindrome</h2>`);
    }

  }); 
});
