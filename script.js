//This takes elemnts with id title and changes it
$("#title").text("JQuery")

//events https://www.w3schools.com/jquery/jquery_events.asp

$('#moving').text("Hello" + name )

//starts at 0 
var leftPos= 0
var speed = 10;

//ONLY WORKS WHEN SELECTING ELEMENTS NOT IDs
var moveName = function (){
    $('h1').offset({ left: leftPos})
    
    leftPos = leftPos + speed;
    
    if(leftPos > 800){
        speed = speed*-1;
    }
    
    if(leftPos < 0){
        speed = speed *-1
    }
    
}
  setInterval(moveName, 30);

//This creates a new element in the div element with id row2
$("#row2").append("<h3> I created this paragraph using JS exclusivly</h3>")

//This creates a new element in the div element with id row2
$("#row2").append("<h4> Top Movie Choices</h4>")

//This adds text to the html page from user input and adds to list
for (var i =0; i <3; i++){
    var movie = prompt("What is one of your favorite movies?")
    $('#list1').append("<li>" + movie + "</li>");
}

//fades out and eliminates elemnt in 3 sec
$("#title").fadeOut(3000);

//gets added by js and fades out --two methods at once called chaining append & fadeOut & fadeIN happens in porder
$('#row4').append('<h2> This shows up and fades out</h2>').fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000)

//slides curtain up and down
$('#row4').append("<h1>Up & Down</h1> ").slideUp(1000).slideDown(1000).slideUp(1000)

//hides li elemnts when they are clicked
$("li").click(function(){
    $(this).hide();
  });


//mORE COMMANDS https://www.w3schools.com/jquery/jquery_examples.asp

//move around with mouse
//this line of coe selects a function to occur during the html page (event) is a place holderfor the function
$('html').mousemove(function(event){
    //all ps are selected and the css modified
    $('p').offset({
        left: event.pageX,//left justification controlled by X
        top: event.pageY //vertical orientation controlled by Y
    });
    })
