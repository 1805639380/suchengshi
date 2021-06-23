const move = document.querySelector('.move');
const li = document.querySelectorAll('.topUl li');
move.style.width = li[0].offsetWidth + 'px';
for (let i = 0; i < li.length; i++) {
    li[i].index = i;
    li[i].addEventListener('mouseover', function () {
        move.style.width = this.children[0].offsetWidth + 'px';
        if (this.index === 0) {

        } else if (this.index === 1) {
            move.style.transform = `translate3d(${li[this.index - 1].offsetWidth * this.index + 30 * this.index}px,0,0)`;
        } else if (this.index === 2) {
            move.style.transform = `translate3d(${li[this.index - 1].offsetWidth + li[this.index - 2].offsetWidth + 18 * this.index}px,0,0)`;
        } else {
            move.style.transform = `translate3d(${li[this.index - 1].offsetWidth + li[this.index - 2].offsetWidth + li[this.index - 3].offsetWidth + 13 * this.index}px,0,0)`;
        }
        for (var i = 0; i < li.length; i++) {
            li[i].children[0].style.color = '#fff';
        }
        this.children[0].style.color = 'coral';
    });
    li[i].addEventListener('mouseout', function () {
        this.children[0].style.color = '#fff';
        move.style.width = li[0].offsetWidth + 'px';
        li[0].children[0].style.color = 'coral';
        move.style.transform = 'none';
    });
}
const header = document.querySelector('header')
setInterval(function () {
    const moveImg = document.querySelector('.swiper-slide-active');
    header.style.backgroundImage = `url(${moveImg.children[0].src}`;
}, 100);
const updateLi = document.querySelectorAll('.updateUl li');
let weekDay = ['一','二','三','四','五','六','日'];
var date = new Date();
for (let i = 0; i < updateLi.length - 1; i++) {
    updateLi[0].innerHTML = '今天：'+0+(date.getMonth()+1)+'-'+date.getDate()+'&nbsp;'+'<span>/<span>';
    if(i > 0) {
        updateLi[i].innerHTML = '周'+ weekDay[date.getDay()]+'：'+0+(date.getMonth()+1)+'-'+(date.getDate()+i)+'&nbsp;'+'<span>/<span>';
        if(date.getDay() === 6) {
            if(i>1) {
                updateLi[i].innerHTML = '周'+ (weekDay[date.getDay()+i-date.getDay()-2])+'：'+0+(date.getMonth()+1)+'-'+(date.getDate()+i)+'&nbsp;'+'<span>/<span>';
            }
        }
    }
}
const ins = document.querySelector('.ins');
const me = document.querySelector('.me');
function over() {
    setTimeout(function() {
        ins.style.display = 'block';
        ins.style.transform = 'translateY(10px)';
    },500);
    me.style.transform = 'translate3d(0,10px,0) scale(1.2)';
}
function out() {
    var ot = setTimeout(function() {
        ins.style.display = 'none';
    },500);
    me.style.transform = 'none'
    ins.addEventListener('mouseover',function() {
        clearTimeout(ot);
        me.style.transform = 'translate3d(0,10px,0) scale(1.2)';
    });
    ins.addEventListener('mouseleave',function() {
        setTimeout(function() {
            ins.style.display = 'none';
        },500);
        me.style.transform = 'none'
    });
}
me.addEventListener('mouseover',over);
me.addEventListener('mouseleave',out);
window.onload = function() {
    //创建异步对象
    var xhr = new XMLHttpRequest();
    //请求行
    xhr.open('get','fanJu.php?');
    //请求头
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.addEventListener('load',function() {
        console.log(xhr.responseText);
    })
    //请求主体
    xhr.send(null);
}


