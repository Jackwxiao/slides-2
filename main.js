let $buttons = $('#buttonWrapper> button')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0


bindEvents()


function bindEvents() {
    $('#buttonWrapper').on('click', 'button', function (e) {
        let $button = $(e.currentTarget)
        let index = $button.index()
        goToSlide(index)
    })
}

function goToSlide(index) {
    if (index > $buttons.length - 1) {
        index = 0
    } else {
        $slides.css({ transform: `translateX(${-(index) * 400}px)` })
    }
    current = index
}
