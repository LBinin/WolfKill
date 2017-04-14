$(function(){
    // 创建房间界面
    $('.creat-btn').on('touchstart', function(){

        // 增加数量
        if ( $(this).hasClass('decrease') ) {
            var num = getNum()
            if (num.villager <= 1) {
                alert("村民至少要有一个哦")
            }else {
                setTotalNum( --num.total )
                setNum(num.god, num.wolf, --num.villager)
            }
        }
        // 减少数量
        else if ( $(this).hasClass('increase') ) {
            var num = getNum()
            if (num.total >= 15) {
                alert("最多不能超过15人哦")
            }else {
                setTotalNum( ++num.total )
                setNum(num.god, num.wolf, ++num.villager)
            }
        }
        // 返回首页
        else if ( $(this).hasClass('return') ) {
            $('.creat-page').fadeOut()
            $('.home-btn-group').fadeIn()
        }
        // 创建房间
        else if ( $(this).hasClass('sure') ) {
            var num = getNum()
            var config = {
                god: chosed_god,
                wolf: num.wolf,
                villager: num.villager,
                total: getTotalNum()
            }
            console.log(config)
            $('.waiting-info').text('创建房间中...').show()

            // 成功后
            setTimeout(function() {
                $('.waiting-info').text('找到房间!')
                $('.creat-page').fadeOut().removeClass('page-waiting')
                setTimeout(function() {
                    $('.waiting-info').fadeOut()
                    setTimeout(function() {
                        setSeat(config.total)
                        $('.sitting').fadeIn(1000)
                        setTimeout(function() {
                            $('.seat').css('opacity', 1)
                        }, 1000);                    
                    }, 500);
                }, 500);
            }, 1000);
        }
    })

    // 选择神民
    var chosed_god = [1,1,1,0]
    $('.choose-god .god-item').on('touchstart', function(){
        var num = getNum()
        if (num.villager <= 1 && !$(this).hasClass('chosed')) {
            alert("村民至少要有一个哦")
        }else {
            $(this).toggleClass('chosed')
            var selected_god_num = $('.god-item.chosed').length
            setNum(selected_god_num, num.wolf, num.total - selected_god_num - num.wolf)
            chosed_god[$(this).index()] = chosed_god[$(this).index()] == 1 ? 0 : 1
        }
    })

    // 增减狼人
    $('.wolf-btn').on('touchstart', function(){
        if ( $(this).hasClass('decrease') ) {
            var num = getNum()
            if (num.wolf <= 1) {
                alert("至少有一个狼人哦")
            }else {
                setNum(num.god, --num.wolf, ++num.villager)
            }
        }else if ( $(this).hasClass('increase') ) {
            var num = getNum()
            if (num.villager <= 1) {
                alert("村民至少要有一个哦")
            }else {
                setNum(num.god, ++num.wolf, --num.villager)
            }
        }
    })

})