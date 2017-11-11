$(window).bind('scroll',function(e){
    parallaxScroll();
});
 
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('.header-paralax').css('top',(0-(scrolled*.50))+'px');

}