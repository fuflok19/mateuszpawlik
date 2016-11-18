
$(function(){
    $('.slider img:gt(0)').hide();
    setInterval(function(){
      $('.slider :first-child').fadeOut(1000)
         .next('img').fadeIn(1000)
         .end().appendTo('.slider');}, 
      3000);



    var spanToLoad = $('.loading');

    spanToLoad.each(function () {
        var bar = $(this);
        var id = setInterval(function(){
            var text = parseInt(bar.width()/3);
                bar.text(text+'%');
                console.log('wywoływanie interval dla'+ id);
        }
        ,100
        );
        $(this).animate({width: $(this).data('procent') + "%"}, $(this).data('procent') / 100 * 5000, function(){
            console.log(id);
            clearInterval(id);
        });
    });

    var menu = $('.menu');
    var Links = menu.find('a');

    Links.on('click', function(e){
        e.preventDefault();
        var speed = 2;
        var href = $(this).attr('href');
        console.log(href);

        var position = $(href).offset();            
        console.log(position.top);
        var time = position.top/speed;
        console.log(time);
        $('html, body').animate({scrollTop: position.top}, time);
    });

        $('a').click(function(){

        $('html, body').animate({

            scrollTop: $( $(this).attr('href') ).offset().top

            }, 1000);

    });



});



