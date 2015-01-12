jQuery(window).on('load', function(){ var $ = jQuery;
	
    // Work details & Team grid
    var container = document.querySelector('#masonry');
    var msnry = new Masonry( container, {
      // columnWidth: 1,
      itemSelector: '.grid_item',
      // singleMode: true,
      // gutter: 5
    });
});