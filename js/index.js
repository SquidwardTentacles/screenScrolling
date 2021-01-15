let scr = true
let scrolSiz = 0

window.addEventListener('wheel', function (event) {
    //或mousewheel。但是他们都不兼容 firefox
    console.log(event.wheelDelta); //上 120，下 -120
    let position = event.wheelDelta < 0 ? 0 : 1
    windowScroll(position)
})
window.addEventListener('DOMMouseScroll', function (event) {
    let position = event.detail < 0 ? 0 : 1
    windowScroll(position)
    console.log(event.detail); //firefox只支持DOMMouseScroll   上 -3，下 3

})
// 声明变量保存页面滚动距离
let scrollSize = 0
// 获取页面高度
let screenHeight = document.body.scrollHeight
let timerF = true

function windowScroll(position) {
    let timer = ''
    if (timerF) {
        timerF = false
        clearTimeout(timer)
        // 页面向下传入 0 向上传入 1
        let boxScreen = document.getElementById('boxScreen')
        // 获取浏览器可视区域高度
        let screenH = document.body.offsetHeight
        if (position == 0) {
            // 如果是最后一项 就不调用下滑动事件
            console.log(scrollSize ,(screenHeight - screenH));
            if (scrollSize >= (screenHeight - screenH)) return
            scrollSize = screenH + parseInt(scrollSize)
            console.log(parseInt(scrollSize));
        } else {
            // 如果scrollSize值大于0 就
            if (scrollSize) {
                scrollSize -= screenH
            }
        }
        screenH = position == 0 ? -screenH : +screenH
        let size = -scrollSize + 'px'
        console.log(size);
        boxScreen.style.top = size
        timer = setTimeout(() => {
            timerF = true
            clearTimeout(timer)
        }, 2000);
    }
}
// window.onscroll = function () {
//     //为了保证兼容性，这里取两个值，哪个有值取哪一个
//     //scrollTop就是触发滚轮事件时滚轮的高度
//     // console.log("滚动距离" + scrollTop);
//     let timer = ''
//     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//     if (scr) {
//         console.log(scrollTop, scrolSiz);
//         // 鼠标滚轮上滑动或者下滑动
//         if (scrolSiz > scrollTop) {
//             let boxScreen = document.getElementById('boxScreen')
//             console.log('上');
//             // let screenH = document.body.offsetHeight
//             // console.log(screenH);
//             // boxScreen.style.top = (-screenH) + 'px'
//         } else {
//             console.log('下');
//         }
//         console.log(scr);
//         scr = false
//         clearTimeout(timer)
//         timer = setTimeout(() => {
//             scr = true
//             clearTimeout(timer)
//         }, 2000);
//         return
//     }
//     scrolSiz = scrollTop
// }