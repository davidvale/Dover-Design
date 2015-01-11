$(document).ready(function(){
    
    // Work details & Team grid
    var container = document.querySelector('#masonry');
    var msnry = new Masonry( container, {
      // columnWidth: 1,
      itemSelector: '.grid_item, .c1, .c2, .c3, .c4',
      singleMode: true,
      // gutter: 5
    });
});