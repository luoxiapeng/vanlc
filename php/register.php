<?php
   header("content-type:text/html;charset=utf-8");
  // 准备一个数组 用来保存 多个用户名
  $userArr = array("13480333085","1512345234","12345678901","11111111111","11111111222");

  // 获取 提交过来的 用户名
  $postName = $_POST['name'];

  // 判断 是否存在于数组中
  /*
    参数1: 查询的内容
    参数2 数组
  */
  $isIn = in_array($postName,$userArr);
  if($isIn){
    echo "手机号已经被使用了,不好意思哦";
  }else{
    echo "恭喜你,可以使用这个手机号";
  }
 ?>