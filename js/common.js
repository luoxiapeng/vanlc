/**
 * Created by Administrator on 2017/3/18.
 */
/**
 * 定义了一个兼容性的获取标签对象间文本内容的函数
 * @param ele
 * @returns {*}
 */
function getText(ele){
    // 能力检测： 就是要看当前的浏览器是否支持此对象的属性或是方法
    if(typeof ele.innerText=="string"){
        return ele.innerText;//将获取的文本内容返回
    }else {
        return ele.textContent;
    }
}

/**
 * 封装了一个兼容版本的设置标签间内容的函数
 * @param ele
 * @param value
 */
function setText(ele,value){
    // 能力检测：就是要看当前的浏览器是否支持此对象的属性或是方法
    if(typeof ele.innerText=="string"){
        ele.innerText = value;
    }else { // textContent
        ele.textContent = value;
    }
}

//与获取文本或是设置文本相关的对象
var Txt = {
    getText:function (ele){
        if(typeof ele.innerText=="string"){
            return ele.innerText;//将获取的文本内容返回
        }else {
            return ele.textContent;
        }
    },
    setText:function (ele,value){
        // 能力检测：就是要看当前的浏览器是否支持此对象的属性或是方法
        if(typeof ele.innerText=="string"){
            ele.innerText = value;
        }else { // textContent
            ele.textContent = value;
        }
    }
}

//与获取标签相关的对象
var Tag = {
    getNextElement:function (ele){
        // 能力判断： 就是要看当前的浏览器是否支持此对象的属性或是方法
        if(ele&&ele.nextElementSibling){
            return  ele.nextElementSibling;
        }else { //IE8浏览器的方式
            ele = ele.nextSibling;
            while(ele&&ele.nodeType!=1){
                ele=ele.nextSibling;
            }
            return  ele;
        }
    },
    getPrevElement:function (ele){
        // 能力检测
        if(ele&&ele.previousElementSibling){
            return ele.previousElementSibling;
        }else {
            ele = ele.previousSibling;
            while(ele&&ele.nodeType!=1){
                ele = ele.previousSibling;
            }
            return ele;
        }
    },
    getFirstElement:function (ele){
        // 能力检测
        if(!ele){
            return; //跳出函数，return后面的代码都不会执行
        }
        if(ele.firstElementChild){
            return ele.firstElementChild;
        }else {
            ele = ele.firstChild;
            while(ele&&ele.nodeType!=1){
                ele=  ele.nextSibling;
            }
            return ele;
        }
    },
    getLastElement:function (ele){
        // 能力检测
        if(!ele){
            return; // 直接跳出函数
        }
        if(ele.lastElementChild){
            return ele.lastElementChild;
        }else {
            ele = ele.lastChild;
            while(ele&&ele.nodeType!=1){
                ele=  ele.previousSibling;
            }
            return ele;
        }
    }
}


/**
 * 封装了一个兼容版本的获取下一个标签对象的函数
 * @param ele
 * @returns {*}
 */
function getNextElement(ele){
    // 能力判断： 就是要看当前的浏览器是否支持此对象的属性或是方法
    if(ele&&ele.nextElementSibling){
        return  ele.nextElementSibling;
    }else { //IE8浏览器的方式
        ele = ele.nextSibling;
        while(ele&&ele.nodeType!=1){
            ele=ele.nextSibling;
        }
        return  ele;
    }
}
/**
 * 封装了一个兼容版本的获取上一个标签节点的函数
 * @param ele
 * @returns {*}
 */
function getPrevElement(ele){
    // 能力检测
    if(ele&&ele.previousElementSibling){
        return ele.previousElementSibling;
    }else {
        ele = ele.previousSibling;
        while(ele&&ele.nodeType!=1){
            ele = ele.previousSibling;
        }
        return ele;
    }
}

/**
 * 封装了一个兼容的获取第一个子标签节点的函数
 * @param ele
 * @returns {*}
 */
function getFirstElement(ele){
    // 能力检测
    if(!ele){
        return; //跳出函数，return后面的代码都不会执行
    }
    if(ele.firstElementChild){
        return ele.firstElementChild;
    }else {
        ele = ele.firstChild;
        while(ele&&ele.nodeType!=1){
            ele=  ele.nextSibling;
        }
        return ele;
    }
}
/**
 * 封装了一个兼容版本的获取最后一个子标签节点的函数
 * @param ele
 * @returns {*}
 */
function getLastElement(ele){
    // 能力检测
    if(!ele){
        return; // 直接跳出函数
    }
    if(ele.lastElementChild){
        return ele.lastElementChild;
    }else {
        ele = ele.lastChild;
        while(ele&&ele.nodeType!=1){
            ele=  ele.previousSibling;
        }
        return ele;
    }
}

function $$(id){
  return  document.getElementById(id);
}



function moveAll(source,target){
    var source = $$(source);
    var target = $$(target);
    var options = source.children;
    for(var i=0;i<options.length;i++){
        target.appendChild(options[i]);
        i--;
    }
}

function moveSel(source,target){
    var source = $$(source);
    var target = $$(target);
    var options = source.children;
    for(var i = 0; i < options.length; i++) {
        if(options[i].selected){
            target.appendChild(options[i]);
            i--;
        }
    }
}
/**
 * 盒子运动封装轮播图
 * [fn description]
 * @param  {[type]}   ele    [description]
 * @param  {[type]}   target [description]
 * @return {Function}        [description]
 */
 //  基本封装
    function animate(obj,target) {
        clearInterval(obj.timer);  // 要开启定时器，先清除以前定时器
        // 有2个参数 第一个 对象谁做动画  第二 距离 到哪里
        // 如果 offsetLeft 大于了  target 目标位置就应该反方向
        var speed = obj.offsetLeft < target ? 15 : -15;
        obj.timer = setInterval(function() {
            var result = target - obj.offsetLeft;  //  他们的值 等于 0 说明完全相等
            // 动画的原理
            obj.style.left = obj.offsetLeft + speed  + "px";
            if(Math.abs(result) <= 15) {
                obj.style.left = target + "px";   //抖动问题
                clearInterval(obj.timer);
            }
        },10);
  }

/**
 *
 * 上下动画导航栏，
 * [animateTop description]
 * @param  {[type]} ele    [description]
 * @param  {[type]} target [description]
 * @return {[type]}        [description]
 */
  function animateTop(ele,target) {
        //要用定时器，先清定时器
        //一个萝卜一个坑儿，一个元素对应一个定时器
        clearInterval(ele.timer);
        //定义定时器
        ele.timer = setInterval(function () {
            //获取步长
            //步长应该是越来越小的，缓动的算法。
            var step = (target-ele.offsetTop)/10;
            //对步长进行二次加工(大于0向上取整,小于0项下取整)
            step = step>0?Math.ceil(step):Math.floor(step);
            //动画原理： 目标位置 = 当前位置 + 步长
            ele.style.top = ele.offsetTop + step + "px";
            //检测缓动动画有没有停止
            console.log(1);
            if(Math.abs(target-ele.offsetTop)<=Math.abs(step)){
                //处理小数赋值
                ele.style.top= target + "px";
                clearInterval(ele.timer);
            }
        },5);
    }




  /**
   * 封装缓慢动画函数
   */
   function animateMan(ele,target) {
        //要用定时器，先清定时器
        //一个萝卜一个坑儿，一个元素对应一个定时器
        clearInterval(ele.timer);
        //定义定时器
        ele.timer = setInterval(function () {
            //获取步长
            //步长应该是越来越小的，缓动的算法。
            var step = (target-ele.offsetLeft)/10;
            //对步长进行二次加工(大于0向上取整,小于0项下取整)
            step = step>0?Math.ceil(step):Math.floor(step);
            //动画原理： 目标位置 = 当前位置 + 步长
            ele.style.left = ele.offsetLeft + step + "px";
            //检测缓动动画有没有停止
            console.log(1);
            if(Math.abs(target-ele.offsetLeft)<=Math.abs(step)){
                //处理小数赋值
                ele.style.left = target + "px";
                clearInterval(ele.timer);
            }
        },30);
    }

     /**
   *
   * 多个属性缓慢动画值封装，修改盒子的宽度，高度等等
   * [animate description]
   * @param  {[type]} ele    [description]
   * @param  {[type]} attr   [description]
   * @param  {[type]} target [description]
   * @return {[type]}        [description]
   */
 function animateS(ele,attr,target){
    clearInterval(ele.timer);
    ele.timer=setInterval(function(){
    var leader=parseInt(getStyle(ele,attr))||0;
    var step=(target-leader)/10;
    step>0?Math.ceil(step):Math.floor(step);
    leader=leader+step;
    ele.style[attr]=leader+"px";
     if(Math.abs(target-leader)<=Math.abs(step)){
      ele.style[attr]=target+"px";
      clearInterval(ele.timer);
    }
    },30);
}
/**
 * 利用json进行多值修改，上面只能修改一个，这个可以修改多个，
 * var json={"left":10,"top":200,"height":3000,"width":3000};
    animate(div,json);


 * [animate description]
 * @param  {[type]} ele  [description]
 * @param  {[type]} json [description]
 * @return {[type]}      [description]
 */
 function animatejson(ele,json){
    clearInterval(timer);
    timer=setInterval(function(){
      var bool=true;
      for(var k in json){
        var leader=parseInt(getStyle(ele.k))||0;
        var step=(json[k]-leader)/10;
        step=step>0?Math.ceil(step):Math.floor(step);
        leader=leader+step;
       ele.style[k]=leader+"px";
      if(json[k]!==leader){
        bool=false;
       }
      }
      console.log(1);
      if(bool){
        clearInterval(timer);
      }
    },30);
  }

/**
 * 手风琴案例，三个属性值，有json，回调函数
 */
  //参数变为3个
function animateSjson(ele,json,fn){
    //先清定时器
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        //开闭原则
        var bool = true;


        //遍历属性和值，分别单独处理json
        //attr == k(键)    target == json[k](值)
        for(var k in json){
            //四部
            var leader = parseInt(getStyle(ele,k)) || 0;
            //1.获取步长
            var step = (json[k] - leader)/10;
            //2.二次加工步长
            step = step>0?Math.ceil(step):Math.floor(step);
            leader = leader + step;
            //3.赋值
            ele.style[k] = leader + "px";
            //4.清除定时器
            //判断: 目标值和当前值的差大于步长，就不能跳出循环
            //不考虑小数的情况：目标位置和当前位置不相等，就不能清除清除定时器。
            if(json[k] !== leader){
                bool = false;
            }
        }

        console.log(1);
        //只有所有的属性都到了指定位置，bool值才不会变成false；
        if(bool){
            clearInterval(ele.timer);
            //所有程序执行完毕了，现在可以执行回调函数了
            //只有传递了回调函数，才能执行
            if(fn){
                fn();
            }
        }
    },1);
}



// /**
//  * 透明度，层级的封装
//  */

//  function animateTMC(ele,json,fn){
//             clearInterval(ele.timer);
//             ele.timer = setInterval(function () {
//                 var bool = true;
//                 for(var k in json){
//                     var leader;
//                     if(k==="opacity") {
//                       leader=getStyle(ele,k)*100||1;
//                     }else{
//                       leader=parseInt(getStyle(ele,k))||0;
//                     }
//                     var step = (json[k] - leader)/10 ;
//                     step = step>0?Math.ceil(step):Math.floor(step);
//                     leader = leader + step;
//                     if(k==="opacity"){
//                       ele.style[k]=leader/100;
//                       ele.style.filter="alpha(opacity="+leader+")";
//                     }else if(k==="zIndex"){
//                       ele.style.zIndex=json[k];
//                     }
//                     else{
//                       ele.style[k] = leader + "px";
//                     }
//                     if(json[k] !== leader){
//                         bool = false;
//                     }
//                 }
//                 console.log(1);
//                 if(bool){
//                     if(fn){
//                         fn();
//                     }
//                 }
//             },25);
//      }

/**
 * [getStyle description]
 * @param  {[type]} ele  [description]
 * @param  {[type]} attr [description]
 * @return {[type]}      [description]
 */
function getStyle(ele,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr];
    }
    return ele.currentStyle[attr];
}
    /**滚动检测高度和左边宽度封装，滚动条
     * [scroll description]
     * @return {[type]} [description]
     */
    function scroll(){
            //如果这个属性存在，那么返回值应该是0-无穷大
            //如果没有返回值是undefined；
            //只要判断不是undefined就可以调用此方法
            //练习使用此种封装
            if(window.pageYOffset !== undefined){
                return {
                    "top": window.pageYOffset,
                    "left": window.pageXOffset
                };
            }else if(document.compatMode === "CSS1Compat"){
                return {
                    "top": document.documentElement.scrollTop,
                    "left": document.documentElement.scrollLeft
                };
            }else{
                return {
                    "top": document.body.scrollTop,
                    "left": document.body.scrollLeft
                };
            }
    }


function show(ele){
    ele.style.display="block";
}
function hide(ele){
    ele.style.display="none";
}
/**
 * 取消选中内容
 * [content description]
 * @return {[type]} [description]
 */
function content(){
    window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
}

/**
 * 封装可视区域，第三家族
 * [client description]
 * @return {[type]} [description]
 */
   function client(){
        if(window.innerHeight !== undefined){
            return {
                "width": window.innerWidth,
                "height": window.innerHeight
            }
        }else if(document.compatMode === "CSS1Compat"){
            return {
                "width": document.documentElement.clientWidth,
                "height": document.documentElement.clientHeight
            }
        }else{
            return {
                "width": document.body.clientWidth,
                "height": document.body.clientHeight
            }
        }
    }
/**
 * 取消冒泡
 * [maopao description]
 * @param  {[type]} event [description]
 * @return {[type]}       [description]
 */
    function maopao(event){
        event=event||window.event;
       if(event&&event.stopPropagation){
        event.stopPropagation();
       }else{
        event.cancelBubble=true;
       }
    }

