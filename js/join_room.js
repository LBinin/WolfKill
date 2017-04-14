$('.join-btn').on('touchstart', function(){
    // 返回首页
    if ( $(this).hasClass('return') ) {
        $('.join-page').fadeOut()
        $('.home-btn-group').fadeIn()
        setTimeout(function() {
            $('.join-input').val('')
        }, 500);
    }
    // 加入房间
    else if ( $(this).hasClass('sure') ) {
        var room_num = $('.join-input').val()
        $('.join-page').addClass('page-waiting')
        console.log( room_num )

        $('.waiting-info').show()

        // 成功后
        setTimeout(function() {
            $('.waiting-info').text('找到房间!')
            $('.join-page').fadeOut().removeClass('page-waiting')
            setTimeout(function() {
                $('.waiting-info').fadeOut()
                setTimeout(function() {
                    setSeat(6)
                    $('.sitting').fadeIn(1000)
                    setTimeout(function() {
                        $('.seat').css('opacity', 1)
                    }, 1000);                    
                }, 500);
            }, 500);
        }, 1000);
    }
});