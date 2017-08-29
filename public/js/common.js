
define(["jquery","cookie"],function ($) {
  // NProgress.start();
  // NProgress.done();

  $('.navs ul').prev('a').on('click', function () {
    $(this).next().slideToggle();
  });

// 退出功能
  $('#logoutBtn').click(function(){
    console.log(123);
    $.ajax({
      type : 'post',
      url : '/api/logout',
      dataType : 'json',
      success : function(data){
        if(data.code == 200){
          location.href = '/main/login';
        }
      }
    });
  });
  // console.log($.cookie("PHPSESSID"));
  var sessid=$.cookie("PHPSESSID");
  if(!sessid&&location.pathname!="/main/login"){
    location.href="/main/login"
  }
  var showInfo=JSON.parse($.cookie("login"));
  $(".avatar img").attr("src",showInfo.tc_avatar);
  $(".profile h4").html(showInfo.tc_name)
})