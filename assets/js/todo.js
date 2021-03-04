// change color of a spacific li when clicked 
// $("li").click(function(){
// 	// if color is grey change to black
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		$(this).css({
// 			color: "black",
// 			textDecoration: "none"
// 		})
// 	}
// 	// else change to gery 
// 	else{
// 		$(this).css({
// 		color: "grey",
// 		textDecoration: "line-through"
// 	})}

// });


// now the pro way 
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	// stopPropagation is very important it prevents the continuation of the code, so the whole li will not be affected only the span will be affected
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
	// 13 is the code number of the enter key in the keyboard
	if(event.which === 13){
		// .val get the value in the input method
		var todoText = $(this).val()
		$(this).val("");
		$("ul").append("<li><span>X</span> " + todoText + "</li>");
	}
});

