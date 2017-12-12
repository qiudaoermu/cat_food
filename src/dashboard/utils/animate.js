/**
 * 功能：大屏自动轮播
 * 作者：Abbott.liu
 * 时间：2017年11月
 */


function animate(offset) {
    //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
    //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
    var newLeft = parseInt(list.style.left) + offset;
    list.style.left = newLeft + 'px';
    //无限滚动判断
    if (newLeft > -600) {
        list.style.left = -3000 + 'px';
    }
    if (newLeft < -3000) {
        list.style.left = -600 + 'px';
    }
}

//重复执行的定时器
function play(time) {

    timer = setInterval(function() {
        next.onclick();
    }, time)
}

function stop() {
    clearInterval(timer);
}
