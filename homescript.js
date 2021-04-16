$(document).ready(function() {
    console.log("oh my god oh my god");
    $("#ocean").hover(backgroundToggle);

    function backgroundToggle() {
        $("#backgroundHover").toggleClass("show");
    }
});