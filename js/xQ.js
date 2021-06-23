console.log("%c浏览器保佑~别出BUG,别报错!", "font-size:20px;background-color:#444;color:yellow;border-radius:5px;");
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



    //获取头部切换背景元素
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const header = document.querySelector('header');
    //创建背景路径数组
    let bgArr = ['https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F2cac619181d555f3d9293bf3dc80ec41e91cec94.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616419845&t=6b33263fa13094ff52895fb70c7b1ebc', 'https://img9.51tietu.net/pic/2019-091403/zlxve2fwitmzlxve2fwitm.jpg', '../background/53.jpg', 'https://img9.51tietu.net/pic/2019-091403/r1lxhygbqtyr1lxhygbqty.jpg'];

    //定义一个变量等于随机数组下标,使得每次刷新页面头部背景随机
    let temp = randomNum(0, bgArr.length - 1);

    header.style.backgroundImage = `url(${bgArr[temp]})`;
    prev.addEventListener('click', function () {
        temp--;
        if (temp < 0) {
            temp = 2;
        }
        header.style.backgroundImage = ``;
        header.style.backgroundImage = `url(${bgArr[temp]})`;
    });
    next.addEventListener('click', function () {
        temp++;
        if (temp > bgArr.length - 1) {
            temp = 0;
        }
        header.style.backgroundImage = ``;
        header.style.backgroundImage = `url(${bgArr[temp]})`;
    });

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

    //滚动文档时文章上浮动画
    const writes = document.querySelectorAll('.write');
    function domOline() {
        let domScroll = document.documentElement.scrollTop || document.body.scrollTop;
        let mTop = 45;
        // 文章内容盒子距离顶部距离分别是 989,1384,1779,2174,2569,2964
        for (let i = 0; i < writes.length; i++) {
            if (domScroll >= (989 + 350 * i + 45 * i - 450)) {
                writes[i].style.transform = 'translateY(0px)';
                writes[i].classList.add('opacity');
            }
        }
        // 当最后一个盒子上浮完成后移除该监听事件
        if (writes[writes.length - 1].classList.contains('opacity')) {
            document.removeEventListener('scroll', domOline);
        }
    }
    document.addEventListener('scroll', domOline);
    document.addEventListener('load', domOline);

    // 鼠标经过logo生成声音
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    voice()
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

    // main盒子的高度等于，row里面内容的高度
    document.querySelector('.main').style.height = document.querySelector('.row').offsetHeight + 'px';

    // 文章图片的高度等于文章内容盒子的高度 不定死宽时使用js动态赋高
    // function imageChange() {
    //     const images = document.querySelectorAll('.images img');
    //     const write = document.querySelector('.write');
    //     for(let i = 0;i<images.length;i++) {
    //         images[i].style.height = write.offsetHeight + 'px';
    //     }
    // }
    // window.addEventListener('resize',imageChange);
    // window.addEventListener('DOMContentLoaded',imageChange);

    // QQ头像时时获取
    let userLogo = document.querySelector('#userLogo');
    let xhr1 = new XMLHttpRequest()
    xhr1.open("get", "https://api.uomg.com/api/qq.info?qq=1805639380")
    xhr1.onreadystatechange = function () {
        if (xhr1.readyState == 4 && xhr1.status == 200) {
            let data = JSON.parse(xhr1.responseText);
            userLogo.src = data.qlogo;
        }
    }
    xhr1.send(null)
