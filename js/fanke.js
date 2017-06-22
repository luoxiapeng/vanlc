/**
 * Created by Administrator on 2017/4/22.
 */
$(window).ready(function(){
    //二维码显示隐藏
    $(".loginR ul li").eq(6).on("click mouseenter",function(){
        $(".weixin_hide").show();
    });
    $(".loginR ul li").eq(6).on("click mouseleave",function(){
        $(".weixin_hide").hide();
    });


    $(function(){
        var jqli=$(".navmain>ul>li");
        jqli.mouseenter(function(){
            $(this).children("ul").stop().slideDown(200).show();
        });
        jqli.mouseleave(function(){
            $(this).children("ul").stop().slideUp(200).hide();
        });

    });

    //侧边栏
    $(document).on("scroll",function(){
        if($(".top").scrollTop(5000)){
            $(".top").show().addClass("top_fixed");
        }else{
            $(".top").hide().removeClass("top_fixed");
        }


    });

    //头部栏的显示和隐藏
    $(document).on("scroll",function(){
        if($(".login_boder_b").scrollTop(1000)){
            if(scroll().top>$(".login").height()){
                $(".login_boder_b").css({"position":"fixed","zIndex":1});
                //$(".seach").paddingTop+= $(".login_boder_b").height()+"px";
                $(".seach").css("padding",33);
            }

        }else{
            //$(".login_boder_b").css({"position":"none","zIndex":0,"width":0});
            $(".login_boder_b").css({"position":"","zIndex":0,"width":0});
            $(".seach").css("padding",0).css("position","");

        }
    });

    //$(".mainImg").on("mouseenter",function(){
    //    $(".arrowleft").show();
    //    $(".arrowright").show();
    //});
    //$(".mainImg").on("mouseleave",function(){
    //    $(".arrowleft").hide();
    //    $(".arrowright").hide();
    //});
    //回到顶部
    var timer=null;
    var target=0;
    var leader=0;
    $(".back").on("click",function(){
        //window.scrollTo(0,0);
        clearInterval(timer)
        timer=setInterval(function(){
            step=(target-leader)/10;
            step=step>0?Math.ceil(step):Math.floor(step);
            leader=target+step;
            window.scrollTo(0,leader);
            if(leader==0){
                clearInterval(timer);
            }
        },200);
    });

    //左边楼层跳跃
    $(document).on("scroll",function(){
        if($(".active").scrollTop(10000)){
            if(scroll().top>1000){
                $(".active").show().addClass("left_fixed");
            }
        }else{
            $(".active").hide().removeClass("left_fixed");
        }
    });

    $(".active ul li").on("mouseenter",function(){
        $(".active ul li").eq($(this).index()).css({"backgroundColor":"#a10000",color:"#fff"});
    });
    $(".active ul li").on("mouseleave",function(){
        $(".active ul li").eq($(this).index()).css({"backgroundColor":"",color:""});

    });


    //用户名和密码登陆注册界面



})












