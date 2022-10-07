let currentFloor = 2;
let counterUp = $('.counter-up');
let counterDown = $('.counter-down');
let floorPath = $('.home-svg path');

$(document).ready(function () {
        // Функция при наведении мышью на этаж
    floorPath.on('mouseover', function() {
        floorPath.removeClass('current-floor');
        currentFloor = $(this).attr('data-floor');
        $('.counter').text(currentFloor);
    });

        // Перемещение подсветки этажа при клике на кнопку на верх
    counterUp.on('click', function() {
        if (currentFloor < 18) {
            currentFloor++;
            let usCurrentFloor = currentFloor.toLocaleString('en-US', {
                minimumIntegerDigits: 2, 
                useGrouping: false});
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });

        // Перемещение подсветки этажа при клике на кнопку вниз
    counterDown.on('click', function() {
        if (currentFloor > 2) {
            currentFloor--;
            let usCurrentFloor = currentFloor.toLocaleString('en-US', {
                minimumIntegerDigits: 2, 
                useGrouping: false});
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });
});