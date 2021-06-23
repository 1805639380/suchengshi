<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script>var timeS = new Date().getTime();</script>
    <link rel="shortcut icon" href="../img/me.jpg" type="image/x-icon">
    <link rel="stylesheet" href="../fontImg/iconfont.css">
    <link rel="stylesheet" href="./css/tool.css">
    <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
    <title>苏程室：工具</title>
</head>

<body>
    <!-- 头部 -->
    <header>
        <a href="https://www.suchengshi.top/" class="iconfont">&#xe70c;苏程室</a>
        <nav>
            <a href="https://www.suchengshi.top/" class="iconfont">&#xe6e4;首页</a>
            <a href="" class="iconfont">&#xe6b8;教程</a>
            <a href="工具.html" class="iconfont">&#xe650;工具</a>
            <a href="番剧.html" class="iconfont">&#xe741;追番</a>
            <a href="留言板.html" class="iconfont">&#xe694;留言板</a>
            <a href="搜索.html" class="iconfont">&#xe67d;</a>
        </nav>
    </header>
    
    <!-- 页面主体 -->
    <div class="main">
        <div class="topContain">
            <div class="banner">
                <div class="banenrOne"></div>
                <div class="bannerTwo"></div>
                <div class="bannerThree"></div>
                <div class="bannerFour"></div>
            </div>
            <div class="abside">
                <h3>--最新</h3>
                <ul>
                    <li><a href="">1</a></li>
                    <li><a href="">2</a></li>
                    <li><a href="">3</a></li>
                    <li><a href="">4</a></li>
                    <li><a href="">5</a></li>
                    <li><a href="">6</a></li>
                    <li><a href="">7</a></li>
                    <li><a href="">8</a></li>
                    <li><a href="">9</a></li>
                    <li><a href="">10</a></li>
                </ul>
            </div>
        </div>
        <div class="tools">
            <div class="toolCons">
                <div class="toolTip">
                    标题
                </div>
                <div class="toolCon">
                    内容
                </div>
            </div>
            <div class="asides">
                <div class="asideTip">
                    标题
                </div>
                <div class="aside">
                    内容
                </div>
            </div>
        </div>
        <div class="others">
            <div class="moreTool">
                <?php
                    include 'img.php';
                    for ($i=0; $i <count($img) ; $i++) { 
                        echo '<div><img src="'.$img[$i]['img'].'" alt=""></div>';
                    }
                ?>
            </div>
            <section>
                这块区域可以用来注入用户信息
            </section>
        </div>

    </div>

    <!-- 底部 -->
    <footer>
        <span>赣ICP备2020014038号-1 </span>
    </footer>


   <!-- 看板娘 -->
    <div class="waifu">
        <div class="waifu-tips"></div>
        <canvas id="live2d" width="240" height="220" class="live2d"></canvas>
        <div class="waifu-tool">
            <span class="fui-home"></span>
            <span class="fui-chat"></span>
            <span class="fui-eye"></span>
            <span class="fui-user"></span>
            <span class="fui-photo"></span>
            <span class="fui-info-circle"></span>
            <span class="fui-cross"></span>
        </div>
    </div>
    <script src="assets/waifu-tips.js"></script>
    <script src="assets/live2d.js"></script>
    <script type="text/javascript">initModel("assets/")</script>
    <!-- 看板娘 -->

    <script src="./js/tool.js"></script>

</body>

</html>