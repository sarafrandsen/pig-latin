var isLatin = function(word) {
	return isNaN(word);
}

$(document).ready(function() {
	$("#english").submit(function(event) {
  	event.preventDefault();
    var word = $("#string").val();
    var result = isLatin(word);
    $("#pig").text(result);
  });
});
