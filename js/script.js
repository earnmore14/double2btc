var btn = $('.bar');
var menu = $('.header__list');

$(btn).on('click', function(){
    $(menu).slideToggle();
})