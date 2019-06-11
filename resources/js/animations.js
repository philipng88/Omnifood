$(document).ready(() => {
    // Animations on scroll
    $('.js--wp-1').waypoint(() => {
        $('.js--wp-1').addClass('animated fadeIn')
    }, {
        offset: '50%'
    })

    $('.js--wp-2').waypoint(() => {
        $('.js--wp-2').addClass('animated fadeInUp')
    }, {
        offset: '50%'
    })

    $('.js--wp-3').waypoint(() => {
        $('.js--wp-3').addClass('animated fadeIn')
    }, {
        offset: '50%'
    })

    $('.js--wp-4').waypoint(() => {
        $('.js--wp-4').addClass('animated pulse')
    }, {
        offset: '50%'
    })
})