
//
const banner = document.querySelector('.banner');
for (let i = 0; i < banner.children.length; i++) {
    banner.children[i].style.backgroundImage = `url(../background/${i + 43}.jpg)`;
    banner.children[i].style.backgroundSize = '100% 100%';
}

var min = 0; max = banner.children.length - 1; temp = min;

function banneR() {
    var bannerS = setInterval(function () {
        var bannerWidth = banner.offsetWidth;
        if (temp == max) {
            temp = min;
        } else {
            temp++;
        }
        for (let i = 0; i < banner.children.length; i++) {
            banner.children[i].style.transform = `translateX(-${bannerWidth * temp}px)`
        }
    }, 6500)
    banner.addEventListener('mouseover', function (e) {
        clearInterval(bannerS);
     })
     banner.addEventListener('mouseout',function() {
         banneR();
     })
}

window.addEventListener('load',function() {
     banneR();
    console.log("网页加载耗时：" + (new Date().getTime() - timeS) + "ms");
})
