// Don't pay attention for these words, these are just for me #HildulSliderLefttoRight-2BcozofPositionRelative&DoubleSpace
var liCount = $('.wrapper ul li').length; //Output: 6, legth property counts to all li elements
var liWidth = $('.wrapper ul li').width(); //Suppose, Ouptput: 1000, for a single li
var liHeight = $('.wrapper ul li').height(); //Output: 450, for a single li
var ulWidth = liCount * liWidth; //Output: 6000 for ul

//Now set visible area of slider to user
$('.wrapper').css({width: liWidth, height: liHeight});

//To make li width flexible on all break-points
$('.wrapper ul li').css("width", liWidth);

//Actual area for ul element
$('.wrapper ul').css({width: ulWidth, marginLeft: -liWidth, height: liHeight});

//linking(Additional precaution)
$('.wrapper ul li:last-child').prependTo('.wrapper ul');

//Functions to move sliders forward & back
function nxt_slide(){
	$('.wrapper ul').animate({
		left: -liWidth //Now ul is back one more time (equal to one slide), Remeber it is bcoz of position: relative
	}, 600, function(){
		$('.wrapper ul').css('left', ''); //For animation, basically it creates empty space
		$('.wrapper ul li:first-child').appendTo('.wrapper ul'); //linking
	});
};

function prev_slide(){
	$('.wrapper ul').animate({
		left: +liWidth
	}, 600, function(){
		$('.wrapper ul').css('left', ''); //Not full sure about width space, it is equal to one slide or according to need
		$('.wrapper ul li:last-child').prependTo('.wrapper ul');
	});
};

//Execution
$("a.nxt_slide").click(function(){
	nxt_slide();
});

$("a.prev_slide").click(function(){
	prev_slide();
});


/*This code means, moving to all slides only once like flipkart carousel & others
var runOneTime = setInterval(() => nxt_slide(), 3000);
setTimeout(() => clearTimeout(runOneTime), 18000);*/