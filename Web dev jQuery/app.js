$("h1").css("addStyle");
$("button").text("click it")


// It hide and Unhide the h1 tag
// $("button").on("click", function(){ 
//     $("h1").toggle();    
// });


// It fade and unfade the h1 tag
// $("button").on("click", function(){ 
//     $("h1").fadeToggle();
// });

// It collaspe the h1 tag in the upward direction
// $("button").on("click", function(){ 
//     $("h1").slideUp();
// });

// It collaspe and uncollaspe the h1 tag in the upward and downward direction
// $("button").on("click", function(){ 
//     $("h1").slideToggle();
// });

//It animate the query and value should be a number
$("button").on("click", function(){ 
    $("h1").animate({margin: "20"});
});