/**
 * Created by Administrator on 2018/9/18.
 */
$(function () {
    $('.login').click(function () {
        if($('.username').val()=='111'){
            if($('.password').val()=='222'){
                if($('.code').val()=='333'){
                    window.location.href='index.html';
                }else{
                    $('.tips').html('验证码错误！')
                }
            }else{
                $('.tips').html('密码错误！')
            }
        }else{
            $('.tips').html('用户名不存在！')
        }
    });






});























