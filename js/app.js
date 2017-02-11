    var menu = $('.menu');
    var Links = menu.find('a');

    Links.on('click', function(e){
        e.preventDefault();
        var speed = 1;
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

function myFunction() {
    var x = document.getElementById("top");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

