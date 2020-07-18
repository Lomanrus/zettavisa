$(document).ready(function () {
    $('.rates-list').slick({
        slidesToShow:1,
        arrows:false,
        responsive: [
            {
                breakpoint:4000,
                settings:"unslick"
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow:1,
                    arrows:false
                }
            }
        ]

    })
})

$(window).resize(function () {
    if (window.innerWidth<=+720){
        $('.rates-list').slick({
            slidesToShow:1,
            arrows:false,
            responsive: [
                {
                    breakpoint:1920,
                    settings:"unslick"
                },
                {
                    breakpoint: 720,
                    settings: {
                        slidesToShow:1,
                        arrows:false
                    }
                }
            ]

        })
    }
})