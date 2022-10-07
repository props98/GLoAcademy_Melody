$(document).ready(function () {
    let modal = $('.modal');
    let closeBtn = $('.modal-close-button');
    let viewFlatsBtn =$('.view-flats');

    
    floorPath.on('click', toogleModal);
    closeBtn.on('click', toogleModal);
    viewFlatsBtn.on('click', toogleModal);
    
    function toogleModal() {
        modal.toggleClass('is-open');
    }

    // todo Сделать интерактив выбора квартиры
});