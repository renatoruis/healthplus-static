/* Toggle
-------------------------------------------------- */

$(document).ready(function() {
	$('[data-toggle]').click(function(){
		select = $(this).data("toggle");
    $(select).toggle();
    $('.masonry').masonry({itemSelector: '.masonry-item'});
	});

	$('[data-hide]').click(function(){
		select = $(this).data("hide");
		$(select).hide();
	});

	$('[data-show]').click(function(){
		select = $(this).data("show");
		$(select).show();
	});
});

/* Masonry (Plugin)
-------------------------------------------------- */

$(document).ready(function() {
	$('.masonry').masonry({
		itemSelector: '.masonry-item',
		gutter: 0
	});
});
