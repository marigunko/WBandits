/*
Nav-icon
document.querySelector('.card__icon-favorite').onclick = function(){
  this.classList.toggle('card__icon-favorite--active');
}
*/

//Return previous page
$(document).ready(function(){
    $('.backLink').click(function(){
        parent.history.back();
        return false;
    });
});

//Menu active link
$(function() {
    $('.navbar__nav [href]').each(function() {
        if (this.href == window.location.href) {
            $(this).addClass('active');
        }
    });
});

//Slider
$('.sale__sl').slick({
    infinite: false,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1
});
  
$('.new__sl').slick({
    infinite: false,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1
});

$('.product__sl').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.products__sl').slick({
    centerMode: true,
    centerPadding: '25px',
    arrows: false,
    slidesToShow: 1
});



