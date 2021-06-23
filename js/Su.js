console.log("%c%c站长%c:苏落落大大", "line-height:25px", "padding:0px 4px;background:#222;color:#fff;font-size:25px;margin-right:65px", "color:red;font-size:25px");
console.log("%c%c网站地址%c:https://www.suchengshi.top/", "line-height:25px", "padding:0 4px;background:#222;color:#fff;margin-right:15px;font-size:25px", "color:blue;font-size:25px");


//搜索框消失隐藏
const sou = document.getElementById('smt');
sou.onclick = function () {
    sou.parentNode.children[1].style.opacity = 1;
    sou.parentNode.children[1].style.width = '150px';
    sou.parentNode.children[1].autofocus = true;
}
sou.parentNode.children[1].onblur = function () {
    this.style.opacity = 0;
    this.style.width = 0;
    this.style.transition = 'opacity 1.5s,width .5s';
}

//logo刷
const ref = document.querySelector('.ref');
setInterval(function qu() {
    ref.style.transform = 'rotate(-45deg) translateY(80px) translateX(30px)'
}, 1000);
setInterval(function hui() {
    ref.style.transform = 'rotate(-45deg) translateX(-25px) translateY(-50px)'
}, 3000);


//右侧箭头动画
const ran = document.querySelector('.ran');
ran.onmouseover = function () {
    ran.style.transform = 'rotate(-90deg)';
}
ran.onmouseout = function () {
    ran.style.transform = 'rotate(0)';
}
ran.nextElementSibling.onmouseover = function () {
    ran.style.transform = 'rotate(-90deg)';
}
ran.nextElementSibling.onmouseout = function () {
    ran.style.transform = 'rotate(0)';
}

//封装滚动条高度函数
function getScrollTop() {
    var scroll_top = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        scroll_top = document.documentElement.scrollTop;
    }
    else if (document.body) {
        scroll_top = document.body.scrollTop;
    }
    return scroll_top;
}

//导航栏固定
var scrollHeight = document.documentElement.scrollTop;
const me = document.querySelector('.synopsis');
setInterval(function () {
    if (getScrollTop() >= 50) {
        sou.parentNode.parentNode.parentNode.parentNode.style.position = 'fixed';
        sou.parentNode.parentNode.previousSibling.previousSibling.style.display = 'none';
        me.style.paddingTop = '50px';
    } else if (getScrollTop() === 0) {
        sou.parentNode.parentNode.parentNode.parentNode.style.position = '';
        sou.parentNode.parentNode.previousSibling.previousSibling.style.display = 'block';
        me.style.paddingTop = '';
    }
}, 100);

//banner轮播图
const banner = document.querySelector('.banner');
const bannerDiv = banner.querySelectorAll('.lop');
const li = banner.parentNode.querySelector('.bannerLi').querySelectorAll('li');
var dWidth = bannerDiv[0].offsetWidth;
var temp = 52.66;
var j = 0; k = 3; b = j;

function lun() {
    for (let i = 0; i < bannerDiv.length; i++) {

        //滚轮触发图片加载
        var load = setInterval(function(){
            again();
        },100);
        function again(){
            if(getScrollTop() >= 100){
                bannerDiv[i].style.backgroundImage = `url(../background/${i + 16}.jpg)`;
                bannerDiv[i].style.backgroundSize = '100% 100%';
                clearInterval(load);
            }
        };
        again();
        bannerDiv[i].onmouseover = function () {
            clearInterval(bnr);
        }
        bannerDiv[i].onmouseout = function () {
            lun();
        }

        //li颜色随鼠标点击而变换
        for (let i = 0; i < bannerDiv.length; i++) {
            li[i].onclick = function () {
                clearInterval(bnr);
                for (let i = 0; i < li.length; i++) {
                    li[i].className = '';
                    bannerDiv[i].style.zIndex = 8;
                }
                if (i == 0) {
                    for (let i = 0; i < bannerDiv.length; i++) {
                        bannerDiv[i].style.transform = `translateX(0)`;
                        bannerDiv[i].style.zIndex = 8;
                    }
                } else if (i == 3) {
                    bannerDiv[0].style.transform = `translateX(${dWidth}px)`;
                    bannerDiv[3].style.transform = `translateX(-${dWidth * i}px)`;
                    for (let j = 0; j < bannerDiv.length; j++) {
                        bannerDiv[j].style.transform = `translateX(-${dWidth * i}px)`;
                        bannerDiv[j].style.zIndex = 8;
                        b = i;
                    }
                } else {
                    for (let j = 0; j < bannerDiv.length; j++) {
                        bannerDiv[j].style.transform = `translateX(-${dWidth * i}px)`;
                        bannerDiv[j].style.zIndex = 8;
                        b = i;
                    }
                }
                this.className = 'blue';
            }
        }

    }
    //轮播图定时器
    var bnr = setInterval(function () {
        if (b == k) {
            b = j;
        } else {
            b++;
        }
        for (var i = 0; i < bannerDiv.length; i++) {
            if (i != 0) {
                bannerDiv[i].style.transform = `translateX(-${dWidth * b}px)`;
                bannerDiv[i].style.zIndex = 6;
            }
            li[i].className = '';
            li[b].className = 'blue';

            if (li[2].className === 'blue') {
                bannerDiv[0].style.transform = `translate3D(${dWidth}px,0,0)`;
                bannerDiv[0].style.zIndex = -1;
                bannerDiv[2].style.zIndex = 8;
            } else if (li[3].className === 'blue') {
                bannerDiv[0].style.transform = `translate3D(${dWidth}px,0,0)`;
                bannerDiv[1].style.transform = `translate3D(${dWidth}px,0,0)`;
                bannerDiv[1].style.zIndex = -1;
                bannerDiv[3].style.zIndex = 8;
            } else if (li[1].className === 'blue') {
                bannerDiv[0].style.transform = `translate3D(-${dWidth}px,0,0)`;
                bannerDiv[1].style.transform = `translate3D(-${dWidth,0,0}px)`;
                bannerDiv[1].style.zIndex = 8;
                bannerDiv[3].style.zIndex = -1;
            } else if (li[0].className === 'blue') {
                bannerDiv[1].style.transform = `translate3D(0,0,0)`;
                bannerDiv[2].style.transform = `translate3D(${dWidth}px,0,0)`;
                bannerDiv[3].style.transform = `translate3D(-${dWidth * 4}px,0,0)`;
                bannerDiv[0].style.transform = `translate3D(-${dWidth * 0}px,0,0)`;
                bannerDiv[0].style.zIndex = 8;
                bannerDiv[2].style.zIndex = -1;
            }
            bannerDiv[0].style.zIndex = 6;
        }
    }, 5000)

}
// lun();


//回到顶部
const retop = document.querySelector('.retop');
var time = setInterval(function top() {
    if (getScrollTop() <= 50) {
        retop.style.display = 'none';
    } else {
        retop.style.display = 'block';
    }
}, 100);
retop.onclick = function () {
    var top = setInterval(function () {
        if (document.documentElement.scrollTop !== 0)
            document.documentElement.scrollTop -= 20;
        else
            clearInterval(top);
    });

}

window.addEventListener('load', function () {
    console.log("网页加载耗时：" + (new Date().getTime() - timeS) + "毫秒");
})
const section = document.querySelector('section');
const imgs = document.querySelectorAll('section ul li a img');
var loads =  setInterval(function(){
    loading();
},100);

function loading(){
    if(getScrollTop()>=100){
        imgs[0].src = "./img/u=3568656328,1237658615&fm=26&gp=0.jpg";
        imgs[1].src = "./img/kawayi.jpg";
        imgs[2].src = "./img/u=378598312,4070025069&fm=26&gp=0.jpg";
        imgs[3].src = "./img/u=2518536546,3252433702&fm=26&gp=0.jpg";
        section.children[1].style.transform = 'scale(1)';
        section.children[1].style.opacity = 1;
        section.children[2].style.transform = 'scale(1)';
        section.children[2].style.opacity = 1;
        clearInterval(loads);
        //图片加载后加载轮播图
        lun();
    }
}
loading();