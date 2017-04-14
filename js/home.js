// home btn
$('.home-btn').on('touchstart', function(){
    // 加入房间
    if ( $(this).hasClass('join-room') ) {
        $('.home-btn-group').fadeOut()
        $('.join-page').fadeIn()
        setTimeout(function() {
            $('.join-input').focus()
        }, 1000);
    }
    // 创建房间
    else if ( $(this).hasClass('creat-room') ) {
        $('.home-btn-group').fadeOut()
        $('.creat-page').fadeIn()
    }
});