// 设定高度
document.body.style.height = $(window).height() + 'px'

// 获取各位置数量
function getNum() {
    var num = {
        god: '',
        wolf: '',
        villager: '',
        total: 0
    }
    num.god = parseInt($('.choose-god .title span').text())
    num.wolf = parseInt($('.wolf-num .curr-num span').text())
    num.villager = parseInt($('.villager-num .curr-num').text())
    num.total = num.god + num.wolf + num.villager
    return num
}
// 设置各位置数量
function setNum(god_num, wolf_num, villager_num) {
    $('.choose-god .title span').text(god_num) // 神民数量
    $('.wolf-num .curr-num span').text(wolf_num) // 狼人数量
    $('.villager-num .curr-num').text(villager_num) // 村民数量
}
// 设置总数
function getTotalNum() {
    return parseInt($('.creat-page .curr-person').text())
}
// 获取总数
function setTotalNum(num) {
    $('.creat-page .curr-person').text(num)
}

function showMaskAndSetWords(words, hideOption) {
    $('.mask .mask-words').text(words).parent().fadeIn()
    setTimeout(function() {
        $('.mask').addClass('active')
    }, 100);
    setTimeout(function() {
        $('.mask').addClass('inactive').removeClass('active')
        setTimeout(function() {
            if (hideOption) {
                $('.mask').fadeOut()
            }
            setTimeout(function() {
                $('.mask').removeClass('inactive')
            }, 500);
        }, 300)
    }, 2000)
}