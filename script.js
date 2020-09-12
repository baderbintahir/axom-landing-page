$(document).ready(function () {
    $('.slides').slick({
        autoplay: false,
        infinite: false,
        slidesToShow: 5,
        arrows: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: true,
                    slidesToShow: 2
                }
            }
        ]
    });

    $('.menu').slick({
        autoplay: false,
        infinite: false,
        slidesToShow: 8,
        arrows: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: true,
                    slidesToShow: 4
                }
            }
        ]
    });

    $('.staging-menu').hide()
    $('.staging-btn').click(function() {
        $('.staging-menu').toggle()
    })
})