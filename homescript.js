$(document).ready(function() {
    console.log("oh my god oh my god");
    $(".cell").hover(backgroundToggle);

    function backgroundToggle() {
        var thisCell = $(this);
        var thisID = thisCell.attr('id');
        console.log(thisID);
        $("#backgroundHover").css({
            "background" : `url(home-assets/${thisID}.jpg)`,
            "background-repeat" : "no-repeat",
            "background-position" : "center",
            "background-size" : "auto 50vh"
        });
        $("#backgroundHover").toggleClass("show");
    }
});