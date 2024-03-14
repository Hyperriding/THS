$(document).on("scroll", function() {
    var scrollHeight = $(document).scrollTop();

    if (scrollHeight > 64 * (window.innerHeight/100)) {
        $("#heading").addClass("stickToTop");
        $("#heading > .container > header").removeClass("mb-4 border-bottom");
    }
    else if (scrollHeight < 64 * (window.innerHeight/100)) {
        $("#heading").removeClass("stickToTop");
        $("#heading > .container > header").addClass("mb-4 border-bottom");
    }
});