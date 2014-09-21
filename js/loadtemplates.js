$(document).ready(function(){

	loadTemplate('templates/header.hbs', '#header');

	loadTemplate('templates/footer.hbs', '#footer');

});

function loadTemplate(template, target){

	$.get(template, function(source){

		var template = Handlebars.compile(source);

		var html = template({});

		$(target).html(html);

	});


}