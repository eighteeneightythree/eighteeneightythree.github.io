var colorArray = [
	"#7E9772",
	"#BDDFBC",
	"#FAB89A",
	"#FCC96C",
	"#FF934F",
	"#CEE5F2",
	"#F1E4E8"
];

//pick random colour from array
var randomItem = colorArray[Math.floor(Math.random()*colorArray.length)];





$( document ).ready(function() {
        	console.log( "document loaded" );
    	});



		$( window ).on( "load", function() {
        	console.log( "window loaded" );
		console.log(randomItem);
       	$(".page_body").css("background-color", randomItem);
        	$(".page_body").fadeIn();
        	window.setTimeout(function() {$(".page_body").fadeOut("slow");}, 1500);
    	});

$(document).ready(function(){
		//when any navbar item is clicked, display overlay with random colour from array
		//fade out after 1.5 seconds
		$(".navbar li").click(function(){
			$(".page_body").css("background-color", colorArray[Math.floor(Math.random()*colorArray.length)]);
        	$(".page_body").fadeIn(500);
        	window.setTimeout(function() {$(".page_body").fadeOut("slow");}, 1500);
		});
});


$( document ).ready(function() {
		//info page link function
		//display info div on click
		$(".menu_info").click(function() {
			$(".content_page:not(.info_page)").css("display", "none");
			setTimeout(function() {$(".info_page").fadeIn(500)}, 2000);
		});

		//home page link function
		//displays home on click
		$(".menu_1883").click(function() {
			$(".content_page:not(.home_page)").css("display", "none");			
			setTimeout(function() {$(".home_page").fadeIn(500)}, 2000);
			
		});

		//folio page link fuction
		//display folio page on click
		$(".menu_folio").click(function() {
			$(".content_page:not(.menu_folio)").css("display", "none");
			setTimeout(function() {$(".folio_page").fadeIn(500)}, 2000);
		});
});

