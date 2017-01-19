var isLatin = function(word) {
	for (var i = 0; i < word.length; i += 1) {
  	var letter = word[i];  // get the letter out of the string at index `i`
  	if (!isNaN(letter)) {  // if it's NOT not-a-number, then it's a number... :\
    	return false;  // return false right away because who cares about the rest?
    }
  }
  // if we found no numbers at all, it's a STRING, BABY
  return true;
}

$(document).ready(function() {
	$("#english").submit(function(e) {
  	e.preventDefault();  // none of your BS, form
    var word = $("#string").val();  // get the word from the input
    var result = isLatin(word);  // call `isLatin` with the word
    $("#pig").text(result);
  });
});
