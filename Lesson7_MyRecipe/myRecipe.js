//displays the next element after the current target 
/*global $ */
function display(event) {
    
    $(event.currentTarget).next().fadeIn("slow");
    
}//end of display 

//attach event listener to h3 elements to invoke display function when clicked 
//$ ("h3").click(display); 

//attach event listener to h3 elements to invoke display function when clicked 
$("h3").click(display);

//change the background color h3 element when mouse hovers over it 
$("h3").hover(function() {
    $(this).css("background-color", "green");
    }, function () {
    $(this).css("background-color", "red");
});

//hover () will trigger display2 method each time mouse hovers over header 
$("h3").hover(display);
