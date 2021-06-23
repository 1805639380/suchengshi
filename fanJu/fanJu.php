<?php

    $img = array(array('img'=>'http://p.xiaomingming.org/FileUpload/20201031151393964.jpg','name'=>'半妖的夜叉姬'),
    array('img'=>'http://p.xiaomingming.org/FileUpload/20181211123151670.jpg','name'=>'斗罗大陆 第一季'),
    array('img'=>'http://p.xiaomingming.org/FileUpload/202010310335960100.jpg','name'=>'勇者斗恶龙 达伊的大冒'),
    array('img'=>'http://p.xiaomingming.org/FileUpload/2020592173370340.jpg','name'=>'只属于我的隐藏地下城'),
    array('img'=>'http://p.xiaomingming.org/FileUpload/202101091610131566.jpg','name'=>'重创的伤口'),
    array('img'=>'http://p.xiaomingming.org/FileUpload/2020103183575108.jpg','name'=>'咒术回战'),
    array('img'=>'http://p.xiaomingming.org/FileUpload/202010221324335367.jpg','name'=>'王之逆袭 意志的继承者'),
    array('img'=>'http://p.xiaomingming.org/FileUpload/202101091610123260.jpg','name'=>'BACK ARROW'),
    array('img'=>'http://p.xiaomingming.org/FileUpload/201911126265428275.jpg','name'=>'我的青春恋爱物语果然'),
    array('img'=>'http://p.xiaomingming.org/FileUpload/202011722395556695.jpg','name'=>'某科学的超电磁炮T'),
    array('img'=>'http://p.xiaomingming.org/FileUpload/202068172561760.jpg','name'=>'租借女友'),
    array('img'=>'http://p.xiaomingming.org/FileUpload/20199520305750160.jpg','name'=>'这个勇者明明超强却过'));

    $src = $_GET();

    for($i = 0;$i<count($img);$i++) {
        echo $img[$i]['img'];
    }
?>

