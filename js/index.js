$(document).ready(function () {
    $(".hoverdiv").hover(mouseEnter, mouseLeave);
    function mouseEnter() {

        $(this).find('.imgCase').animate({ left: '22px' });
    };
    function mouseLeave() {
        $(this).find('.imgCase').animate({ left: '0px' });
    };
    
   
    $('.shazaImg').animate({ top: '0px' },1000)
    
    $("#btnViewProjects").click(function() {
        // $( 'html, body' ).animate({
        //         scrollTop: $("projects").offset().top
        //     }, 2000);

        // $("#projects").scrollTo(500);
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#projects").offset().top
        }, 2000);
      });
});

