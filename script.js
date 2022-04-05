$('h1').click(function () {
    $('body').toggleClass('purple')
})

let rainbow = '0'

let colorVal = 'hsl(0,100,100)'

$('.button').click(
    function(){
        rainbow+30
        $('body').css('background',colorVal)
    }
)

$('.one').click(
    function(){
        $('.kitties').attr('src', 'http://placekitten.com/401/401')
    }
    )

$('.two').click(
    function(){
        $('.kitties').attr('src', 'http://placekitten.com/402/401')
    }
    )

$('.three').click(
    function(){
        $('.kitties').attr('src', 'http://placekitten.com/401/403')
    }
    )