// backend
var vowels = ["a", "A","e","E", "i", "I", "o", "O", "u", "U"];
// var split = word.toString().split("");

var inLatin = function(word) {
  if (isNaN(word)) {
    return true;
  } else {
    return false;
  }
};





$(document).ready(function(){
  $("#english").submit(function(event){
    event.preventDefault();
    var theWordInEnglish = $("#string").val();
    var result = inLatin(theWordInEnglish);
    $("#pig").text(result);

  });
});
