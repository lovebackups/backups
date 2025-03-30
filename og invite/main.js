$(document).ready(function() {
    // Click event to open the envelope
    $('.frame').click(function() {
        $('.top').addClass('open');
        $('.message').addClass('pull');
    });

    // Update Valentine's invitation details
    let valentineDate = "February 15-16, 2025";
    $('#valentineDate').text(valentineDate); // Fixed selector

    // Modal functionality for the cat GIF
    var modal = $("#catModal");
    var catGif = $("#catGif");
    var close = $(".close");

    // Ensure modal is initially hidden
    modal.hide();

    // Yes Button - Show Happy Cat (No Redirect)
    $("#yesButton").click(function() {
        catGif.attr("src", "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"); // Happy Cat GIF
        modal.fadeIn();
    });

    // No Button - Show Sad Cat (No Redirect)
    $("#noButton").click(function() {
        catGif.attr("src", "https://media.giphy.com/media/8vQSQ3cNXuDGo/giphy.gif"); // Sad Cat GIF
        modal.fadeIn();
    });

    // Close Modal
    close.click(function() {
        modal.fadeOut();
    });

    // Close modal when clicking outside the content
    $(window).click(function(event) {
        if (event.target.id === "catModal") {
            modal.fadeOut();
        }
    });
});
