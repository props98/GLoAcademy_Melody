$(document).ready(function () {
    $('.home-svg path').on('click', function() {
        console.log($(this).attr('data-floor'));
    });
});