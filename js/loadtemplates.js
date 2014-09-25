$(document).ready(function(){

	loadTemplate('templates/header.hbs', '#header');

	loadTemplate('templates/footer.hbs', '#footer');

});

function loadTemplate(template, target){

	$.get(template, function(html){

		$(target).html(html);

	});


}