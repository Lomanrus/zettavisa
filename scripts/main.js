$(function () {
    $('#phone').mask("8(999) 999-99-99")
    $('#phone_head').mask("8(999) 999-99-99")
    $('#modal-form__phone').mask("8(999) 999-99-99")
})

$(document).ready(function () {

    $('.countries-list').slick({
        slidesToShow:4,
        arrows:true,
        responsive:[
            {
                breakpoint:1400,
                settings:{
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    arrows:false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    slidesToShow: 1,
                    centerMode: true,
                    variableWidth: true
                }
            }
        ]
    });


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
                        speed: 300,
                        slidesToShow: 1,
                        centerMode: true,
                        variableWidth: true
                    }
                }
            ]

        })

    $('.advantages-list').slick({
        slidesToShow:1,
        arrows:false,
        responsive:[
            {
                breakpoint:4000,
                settings:"unslick"
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow:1,
                    dots:true,
                    infinite:false
                }
            }
        ]
    })

    $('.services-list').slick({
        slidesToShow:1,
        arrows:false,
        responsive:[
            {
                breakpoint:4000,
                settings:"unslick"
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow:1,
                    dots:true,
                    infinite:false,
                    centerMode:true,
                    variableWidth:true
                }
            }
        ]
    })



    $('#modal-rates .modal__wrapper').slick({
        slidesToShow:3,
        arrows:true,
        infinite: false,
        responsive:[
            {
                breakpoint:1400,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 1,
                    arrows:false
                }
            }
        ]
    })

    $('#modal-rates').show()
    $('#modal-rates').hide()

})

$(window).resize(function () {
    if(window.innerWidth<=+576){
        $('.advantages-list').slick({
            slidesToShow:1,
            arrows:false,
            responsive:[
                {
                    breakpoint:4000,
                    settings:"unslick"
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow:1,
                        dots:true,
                        infinite:false
                    }
                }
            ]
        })
        $('.services-list').slick({
            slidesToShow:1,
            arrows:false,
            responsive:[
                {
                    breakpoint:4000,
                    settings:"unslick"
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow:1,
                        dots:true,
                        infinite:false,
                        centerMode:true,
                        variableWidth:true
                    }
                }
            ]
        })
    }
    else if (window.innerWidth<=+720){
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
                        speed: 300,
                        slidesToShow: 1,
                        centerMode: true,
                    }
                }
            ]

        })
    }


})


$('.modal__close-button').on('click', function () {
    $(this).parents('.modal').toggle()
    $(this).parents('.modals').toggle()
})

$('.rate__more-info').on('click', function () {
    $('.modals').css('display','flex')
    $('#modal-rates').show()

    $('#modal-rates .modal__wrapper').css('width','1201')
    $('#modal-rates').css('width','1200 ')
})

$('#modal-rates').on('click','.callback',function () {
    $(this).parents('.modal').toggle()
    $('#modal-form').show()
})

$('#modal-about').on('click','.callback',function () {
    $(this).parents('.modal').toggle()
    $('#modal-form').show()
})

$('.callback').on('click',function () {
    $('.modals').show()
    $('#modal-form').show()
})

$('.service__button').on('click', function () {
    $('.modals').show()
    $('#modal-about').show()
})