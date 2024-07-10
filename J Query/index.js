// // $ == > document.querySelector

// // selecting and manipualting elements with j-query

document.querySelector("h1").style.color = "green";
// or
$("h1").css("color", "green");
// or
jQuery("h1").css("color", "blue");

// manipulating attributes and text
$("h1").addClass("big-title mp-title");
$("h1").removeClass("big-title");

$("button").html("<em>dont-click-me</em>")
$("h1").text("bye")

// console.log($("a").attr('href'));
$("a").attr("href", "https://www.yahoo.com");


// adding event listeners with j- query
$("h1").click(function(){
    $("h1").css("color", "violet");
})

for(var i = 0; i <4; i++){
    $("button").click(function(){
        $("button").css("color", "red");
    })
}

$(document).keydown(function(event){
    $("h1").text(event.key);
})


$("h1").on("click", function(){
    $("h1").css("color", "purple");
})


// adding elements with j-query

$("h1").after("<button>button</button>");
$("h1").before("<button>button</button>");
$("h1").prepend("<button>button</button>");
$("h1").append("<button>button</button>");