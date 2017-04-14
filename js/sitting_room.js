var screenHight = $(window).height()
var screenWidth = $(window).width()

// 圆盘中的logo
$('.sit-background').css({
    height: screenWidth * 0.45,
    width: screenWidth * 0.45,
})
// 圆盘
$('.sitting .table').css({
    height: screenWidth,
    width: screenWidth,
})

// 座位
var seat = $('<div></div>').addClass('seat')
var seatSize = screenWidth * 0.15
var seatRadius = seatSize / 2
var tableRadius = screenWidth / 2 - seatRadius

function setSeat(seatNum) {
    for (var i = 0; i < seatNum; i++) {
        var curr_seat = seat.clone()
        curr_seat.appendTo('.table')
        curr_seat.css({
            left: Math.sin( 360 / seatNum * (i) * Math.PI / 180 ) * tableRadius + (tableRadius + seatRadius) - seatRadius + 'px',
            top: (tableRadius + seatRadius) - Math.cos( 360 / seatNum * (i) * Math.PI / 180 ) * tableRadius - seatRadius + 'px',
            'line-height': seatSize + 'px',
            transition: 'opacity 0.5s '+ 0.2 * i + 's, color 0.3s, background 0.3s',
        })
    }
    $('.seat').css({
        height: seatSize,
        width: seatSize
    })

    $('.seat').each(function(e) {
        $(this).html(e + 1)
    })
    $('.seat').on('touchstart', function(){
        if (!chosed || currNum == $(this).text()) {
            $(this).addClass('sit-down')
            $('.identity').fadeIn()
            chosed = true
            currNum = $(this).text()
        }else {
            alert("你已经选过位置了哦，点击自己的号码查看身份")
            return
        }
    })
}


var chosed = false
var currNum = ''


$('.ikonw-btn').on('touchstart', function(){
    $('.identity .show-card').addClass('ikonwed')
    setTimeout(function() {
        $('.identity .show-card').removeClass('ikonwed')
        $('.identity').fadeOut()
    }, 1000);
})