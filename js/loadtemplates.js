$(document).ready(function(){

	loadTemplate('templates/header.hbs', '#header', dynamicHeader);

	loadTemplate('templates/footer.hbs', '#footer', function(){});

});

$(window).resize(function(){

	dynamicHeader();

});

function loadTemplate(template, target, callback){

	$.get(template, function(html){

		$(target).html(html);

		callback();

	});


}

var BASE_NAV_PADDING = 20;
var LOGO_IMAGE_HEIGHT = 114;

function dynamicHeader(){
	// find the height of navbar from tallest a
	var max = 0;
	$('#nav a').each(function(){
		max = Math.max(max, $(this).height());
	})
	max += BASE_NAV_PADDING;

	// position a's centered within nav divs
	$('#nav > div').height(max);
	$('#nav a').each(function(){
		var padding = ($('#nav > div').height() - $(this).height()) / 2;
		$(this).parent().css('padding-top', padding);
	})

	// do the same with the logo

	var imgPadding = 
		(($('.logo-area .row').height() - LOGO_IMAGE_HEIGHT) /2).toString();
		console.log($('.logo-area .row').height());
		// console.log(imgPadding);
		// console.log(imgPadding + 'px');
	$('.logo-area a').parent().css('padding-top', imgPadding + 'px');


}