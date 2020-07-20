$(document).ready(function () {
    //инициализация значений в калькуляторе
    let period = $('select option:selected').attr('data-period')
    let time = $('select option:selected').attr('data-time')
    let price = $('select option:selected').attr('data-price')

    $('.period-value').text(period)
    $('.time-value').text(time)
    $('.price-value').text(price)


    $('.rates-list').slick({
        slidesToShow:1,
        arrows:false,
        variableWidth:true,
        centerMode:true,
        responsive: [
            {
                breakpoint:4000,
                settings:"unslick"
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow:1,
                    arrows:false,
                    variableWidth:true,
                    centerMode:true
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
            variableWidth:true,
            centerMode:true,
            responsive: [
                {
                    breakpoint:1920,
                    settings:"unslick"
                },
                {
                    breakpoint: 720,
                    settings: {
                        slidesToShow:1,
                        arrows:false,
                        variableWidth:true,
                        centerMode:true
                    }
                }
            ]

        })
    }
})

$('#calculator__country-select').on('change', function () {
    let period = $('select option:selected').attr('data-period')
    let time = $('select option:selected').attr('data-time')
    let price = $('select option:selected').attr('data-price')

    $('.period-value').text(period)
    $('.time-value').text(time)
    $('.price-value').text(price)

})