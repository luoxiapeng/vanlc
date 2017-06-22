// window.onload=function(){
//     //注册登陆界面
//     $(function(){
//         $(".name").blur(function(){
//             var value=$(this).val();
//             $.ajax({
//                 url:'../php/register.php',
//                 type:'post',
//                 data:{name:value},
//                 success:function(data){
//                     if(data=="该手机号已经被使用了哦"){
//                         $(".tips p").text(data).fadeIn(1000).delay(2000).fadeOut(2000);
//                     }else{
//                         $(".tips p").text(data).fadeIn(1000).delay(2000).fadeOut(2000);
//                     }
//                 }
//             })
//         })
//         $(".check").on("click",function(){
//             $("#btnajax").css({"backgroundColor":"#a10000","color":"#fff"});
//         })
//     })

// }
