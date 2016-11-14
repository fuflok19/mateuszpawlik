
$(function(){
    $('.slider img:gt(0)').hide();
    setInterval(function(){
      $('.slider :first-child').fadeOut(1000)
         .next('img').fadeIn(1000)
         .end().appendTo('.slider');}, 
      3000);
});


