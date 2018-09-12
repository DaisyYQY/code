/**
 * Created by Administrator on 2018/9/9.
 */
$(function () {
    $('.introduce').mouseenter(function () {
        $('.newIntroduce').show();
    });
    $('.introduce').mouseleave(function () {
        $('.newIntroduce').hide();
    });














})



window.onscroll= function () {
    var topBarWrap=document.querySelector('.topBarWrap');
    //var activeTwo=document.querySelector('#activeTwo');
    var scrollHeight=document.documentElement.scrollTop||document.body.scrollTop;

    if(scrollHeight>=topBarWrap.offsetHeight){
        topBarWrap.style.position='fixed';
        $('.topBarWrap').css({'top':0,'z-index':100});
    }else{
        topBarWrap.style.position='relative';
    }
}


