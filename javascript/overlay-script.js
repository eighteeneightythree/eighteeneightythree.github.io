var colorArray = [
	"#A7C997",
	"#BDDFBC",
	"#FAB89A",
	"#FCC96C",
	"#FFAD7A",
	"#CEE5F2",
	"#F1E4E8"
];

//pick random colour from array
var randomItem = colorArray[Math.floor(Math.random()*colorArray.length)];

function loading_overlay () {
	$(".page_body").css("background-color", colorArray[Math.floor(Math.random()*colorArray.length)]);
    setTimeout(function() {$(".page_body").fadeIn(500);}, 200);
   	setTimeout(function() {$(".page_body").fadeOut("slow");}, 1500); //slow is 600ms
   	console.log("starting fade");
   	$(".menu_1883").fadeOut(200)
	setTimeout(function() {$(".menu_1883").fadeIn("slow")}, 1500);
};


$( document ).ready(function() {
        console.log( "document loaded" );
    	
    	$(".page_body").css("background-color", randomItem);
        $(".page_body").fadeIn();
       	setTimeout(function() {$(".page_body").fadeOut("slow");}, 1500); //slow is 600ms
       	setTimeout(function() {$("main").css("display", "block");}, 1500);
});


$(document).ready(function(){
		//when any navbar item is clicked, display overlay with random colour from array
		//fade out after 1.5 seconds
		$(".navbar li").click(function(){
			$(".page_body").css("background-color", colorArray[Math.floor(Math.random()*colorArray.length)]);
        	setTimeout(function() {$(".page_body").fadeIn(500);}, 200);
   	    	setTimeout(function() {$(".page_body").fadeOut("slow");}, 1500);
		});

});


$( document ).ready(function() {
		//info page link function
		//display info div on click
		$(".menu_info").click(function() {
			$(".navbar li:not(.menu_info)").fadeTo(1000, 1);
			$(".menu_info").fadeTo(1000, 0.5);
			$(".content_page").fadeOut(200);
			setTimeout(function() {$(".info_page").fadeIn(500)}, 2000);
		});

		//home page link function
		//displays home on click
		$(".menu_1883").click(function() {
			$(".navbar li").fadeTo(1000, 1);
			$(".content_page").fadeOut(200);			
			setTimeout(function() {$(".home_page").fadeIn(500)}, 2000);

			
		});

		//folio page link fuction
		//display folio page on click
		$(".menu_folio").click(function() {
			$(".navbar li:not(.menu_folio)").fadeTo(1000, 1);
			$(".menu_folio").fadeTo(1000, 0.5);
			$(".content_page").fadeOut(200);
			setTimeout(function() {$(".folio_page").fadeIn(500)}, 2000);
		});
});

$(document).ready(function() {
		var items = $("div.item").length;
		
		var i = 1;

		$(".gall_right").click(function() {
			if (i < items) {
				i++;
				console.log(i + " <= " + items + ": true");
				$(".transition_slider").animate({left:"100%"}, 2000, function() {
					$(".transition_slider").removeAttr("style");
				});
				console.log("animation finished");
				console.log("i + 1 = " + i);
				setTimeout(function() {
					$(".placeholder_" + i).addClass("placeholder_show");
					$("div.item:not(.placeholder_" + i + ")").removeClass("placeholder_show");
				}, 1000);
				console.log("remove show on all but placeholder_" + i);
			} else {
				console.log(i + " <= " + items + ": false");
				console.log("restart slides");
				$(".transition_slider").animate({left:"100%"}, 2000, function() {
					$(".transition_slider").removeAttr("style");
				});
				i = 1;
				setTimeout(function() {
					$(".placeholder_" + i).addClass("placeholder_show");
					$("div.item:not(.placeholder_" + i + ")").removeClass("placeholder_show");
				}, 1000);
			}
		});

		$(".gall_left").click(function() {
			if (i <= items && i > 1) {
				i--;
				console.log(i + " <= " + items + ": true");
				$(".transition_slider").animate({left:"100%"}, 2000, function() {
					$(".transition_slider").removeAttr("style");
				});
				console.log("animation finished");
				console.log("i + 1 = " + i);
				setTimeout(function() {
					$(".placeholder_" + i).addClass("placeholder_show");
					$("div.item:not(.placeholder_" + i + ")").removeClass("placeholder_show");
				}, 1000);
				console.log("remove show on all but placeholder_" + i);
			} else {
				console.log(i + " <= " + items + ": false");
				console.log("restart slides");
				$(".transition_slider").animate({left:"100%"}, 2000, function() {
					$(".transition_slider").removeAttr("style");
				});
				i = items;
				setTimeout(function() {
					$(".placeholder_" + i).addClass("placeholder_show");
					$("div.item:not(.placeholder_" + i + ")").removeClass("placeholder_show");
				}, 1000);
			}
		});



});

