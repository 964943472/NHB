/**
 * Created by 单秋实 on 2017/8/28.
 */
define(["jquery"],function ($) {
    $('#login').click(function(){
        var formdata = $('#loginForm').serialize();
        $.ajax({
            type : 'post',
            url : '/api/login',
            data : formdata,
            dataType : 'json',
            success : function(data){
                if(data.code == 200){
                    // 登录成功，跳转到主页面
                    $.cookie("login",JSON.stringify(data.result),{path:"/"})
                    location.href = '/main/index'
                }else{
                    alert('用户名或者密码错误');
                }
            }
        });
        return false;
    });
})