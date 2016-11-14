
$(function(){
    $('.slider img:gt(0)').hide();
    setInterval(function(){
      $('.slider :first-child').fadeOut(1000)
         .next('img').fadeIn(1000)
         .end().appendTo('.slider');}, 
      3000);
});

$(function () {


    var spanToLoad = $('.loading');

    spanToLoad.each(function () {
        $(this).animate({width: $(this).data('procent') + "%"}, $(this).data('procent') / 100 * 5000);
    });

});





