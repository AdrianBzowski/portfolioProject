jQuery(document).ready(function($){
    $('.dropdown-toggle').click(function(){
        $('.dropdown-menu').slideToggle(500);
    });
 });

$(window).scroll(function () {

    if ($(this).scrollTop() > 200) {
        $( "#navi" ).addClass( "navbar-opacity" );
    } else {
        $( "#navi" ).removeClass( "navbar-opacity" );
    }

});