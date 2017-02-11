function init(){
            var lal = {lat:50.3025,lng:18.778056};
            var map = new google.maps.Map(document.getElementById('map'),{
                   zoom:5,
                   center:lal
               });
            var marker = new google.maps.Marker({
                   position: lal,
                   map:map
               })
           }
           google.maps.event.addDomListener(window,'load',init);

if ( ($(window).height() + 100) < $(document).height() ) {
    $('#top-link-block').removeClass('hidden').affix({
        // how far to scroll down before link "slides" into view
        offset: {top:100}
    });
}