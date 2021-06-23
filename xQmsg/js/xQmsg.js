//二级菜单淡入效果
const comeDan = document.querySelector('.comeDan');
const clearMenu = document.querySelector('.clearMenu');
const comeDanFater = document.querySelector('.top li:nth-of-type(2)');
const clearMenuFather = document.querySelector('.cleared');
comeDanFater.addEventListener('mouseover', function () {
    let fanIn = setTimeout(function () {
        comeDan.style.opacity = 1;
        comeDan.style.transform = 'translateY(-10px)';
    }, 200);
    comeDan.style.display = 'block';
    comeDanFater.addEventListener('mouseleave', function () {
        clearTimeout(fanIn);
        comeDan.style.display = 'none';
        comeDan.style.opacity = 0;
        comeDan.style.transform = '';
    });
});
clearMenuFather.addEventListener('mouseover', function () {
    let fanInD = setTimeout(function () {
        clearMenu.style.opacity = 1;
        clearMenu.style.transform = 'translateY(-10px)';
    }, 200);
    clearMenu.style.display = 'block';
    clearMenuFather.addEventListener('mouseleave', function () {
        clearTimeout(fanInD);
        clearMenu.style.display = 'none';
        clearMenu.style.opacity = 0;
        clearMenu.style.transform = '';
    });
});
//获取回到顶部和导航栏元素
const retop = document.querySelector('.retop');
const nav = document.querySelector('nav');
function reTOP() {
    var scroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (scroll > 100 && scroll < 678) {
        retop.style.top = '-10vh';
        retop.animate([
            { transform: 'translateY(0px)' },
            { transform: 'translateY(-20px)' },
            { transform: 'translateY(0px)' }
        ], {
            duration: 3000,
            iterations: Infinity
        });
        nav.style.backgroundColor = '#fff';
        nav.style.boxShadow = '';
    } else if (scroll > 678) {
        retop.style.top = '-10vh';
        retop.animate([
            { transform: 'translateY(0px)' },
            { transform: 'translateY(-20px)' },
            { transform: 'translateY(0px)' }
        ], {
            duration: 3000,
            iterations: Infinity
        });
        nav.style.boxShadow = '5px 0 10px #ccc';
    } else {
        retop.style.top = '-100vh';
        nav.style.backgroundColor = '';
        nav.style.boxShadow = '';
    }
}
//dom加载事件
document.addEventListener('DOMContentLoaded', reTOP);
//浏览器滚动事件
window.addEventListener('scroll', reTOP);
//回到顶部点击事件
retop.addEventListener('click', function () {
    var retops = setInterval(function () {
        if (document.documentElement.scrollTop != 0 || document.body.scrollTop != 0) {
            document.documentElement.scrollTop -= 20;
            document.body.scrollTop -= 20;
        } else {
            clearInterval(retops);
        }
    });
});
//获取随机数函数
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}

// 鼠标经过logo生成声音
window.AudioContext = window.AudioContext || window.webkitAudioContext;
function voice() {
    if (!window.AudioContext) {
        alert('当前浏览器不支持Web Audio API');
        return;
    }

    // 按钮元素
    var eleButton = document.querySelector('.voice');

    // 创建新的音频上下文接口
    var audioCtx = new AudioContext();

    // 发出的声音频率数据，表现为音调的高低
    var arrFrequency = [452, 493.88, 523.25, 587.33, 659.25, 698.46, 783.99, 880.00, 987.77, 1046.50, 654.25, 712.25, 885.32, 601.2, 688, 478, 555, 666, 999, 1024.88, 257.5];

    // 音调依次递增或者递减处理需要的参数
    var start = 0, direction = 1;

    // 鼠标hover我们的按钮的时候
    eleButton.addEventListener('mouseenter', function () {
        // 当前频率
        var frequency = arrFrequency[start];
        // 如果到头，改变音调的变化规则（增减切换）
        if (!frequency) {
            direction = -1 * direction;
            start = start + 2 * direction;
            frequency = arrFrequency[start];
        }
        // 改变索引，下一次hover时候使用
        start = start + direction;

        // 创建一个OscillatorNode, 它表示一个周期性波形（振荡），基本上来说创造了一个音调
        var oscillator = audioCtx.createOscillator();
        // 创建一个GainNode,它可以控制音频的总音量
        var gainNode = audioCtx.createGain();
        // 把音量，音调和终节点进行关联
        oscillator.connect(gainNode);
        // audioCtx.destination返回AudioDestinationNode对象，表示当前audio context中所有节点的最终节点，一般表示音频渲染设备
        gainNode.connect(audioCtx.destination);
        // 指定音调的类型，其他还有square|triangle|sawtooth
        oscillator.type = 'sine';
        // 设置当前播放声音的频率，也就是最终播放声音的调调
        oscillator.frequency.value = frequency;
        // 当前时间设置音量为0
        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
        // 0.01秒后音量为1
        gainNode.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 0.01);
        // 音调从当前时间开始播放
        oscillator.start(audioCtx.currentTime);
        // 1秒内声音慢慢降低，是个不错的停止声音的方法
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1);
        // 1秒后完全停止声音
        oscillator.stop(audioCtx.currentTime + 1);
    });
};
window.addEventListener('DOMContentLoaded', voice);

// 鼠标经过logo生成音符
const logo = document.querySelector('.logo');
// 随机音符
let yinArr = ['&#xe631;', '&#xe602;', '&#xe636;', '&#xe7fe;'];
logo.addEventListener('mouseenter', function () {
    let i = document.createElement('i');
    setTimeout(function () {
        i.className = 'iconfont yinfu';
        i.innerHTML = yinArr[randomNum(0, yinArr.length - 1)];
        logo.appendChild(i);
        i.style.left = randomNum(0, logo.offsetWidth) + 'px';
        // i.style.top = randomNum(-10, 5) + 'px';
    }, 400);
    setTimeout(function () {
        logo.removeChild(i);
    }, 1000);
});
// 音乐播放器

let xhr = new XMLHttpRequest();
xhr.open('get', 'https://api.i-meto.com/meting/api?server=netease&type=playlist&id=540205411&r=0.15962468709315414');
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let nameXhr = xhr.responseText.replace(/title/g, "name");
        let artistXhr = nameXhr.replace(/author/g, "artist");
        let coverXhr = artistXhr.replace('pic', "cover");
        let audioArr = JSON.parse(coverXhr);
        const ap = new APlayer({
            container: document.getElementById('aplayer'),
            mini: true,
            fixed: true,
            audio: audioArr,
            lrcType: 3
        });
        ap.lrc.hide();
    }
}
xhr.send(null);
