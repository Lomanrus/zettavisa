$(function () {
    $('#calculator__phone').mask("8(999) 999-99-99")
})

$('.visa-calculator__questions').on('click', '.question-active .answer',function () {
    let n=$(this)
    let m=n.closest(".question")
    let l= m.next()
    let k=$('.visa-calculator__steps')
    var j = [];
    $(this).siblings().removeClass('answer-chosen')
    $(this).addClass('answer-chosen')
    m.removeClass('question-active')
    l.addClass('question-active')
    k.find('.active').removeClass('active').next('li').addClass('active')
    k.find('span').removeClass().addClass("step"+l.index());

    return false
})

$('.accordeon__heading').on('click',function () {
    $(this).parent('.accordeon__item').siblings().removeClass('accordeon__item_active')
    $(this).parent('.accordeon__item').toggleClass('accordeon__item_active')
})


$('.calculator__button').on('click',function () {
    alert('click')
    $('.modals').show()
    $('#modal-form').show()
})
