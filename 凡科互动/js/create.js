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

$(".awardTypeSetBox1").click(function () {
    $(".awardTypeBox1").toggle();
});
    $(".awardTypeSetBox2").click(function () {
        $(".awardTypeBox2").toggle();
    });

$('.awardTypeBox1 .option').mouseenter(function () {
    $('.awardTypeBox1 .option').removeClass('checked');
    $(this).addClass('checked');
});
    $('.awardTypeBox2 .option').mouseenter(function () {
        $('.awardTypeBox2 .option').removeClass('checked');
        $(this).addClass('checked');
    });

    $('.awardTypeBox1 .option').click(function () {
        var tip = $(this).children().html();
        $('.awardTypeValue1 .ng-binding').html(tip);
    });
    $('.awardTypeBox2 .option').click(function () {
        var tip = $(this).children().html();
        $('.awardTypeValue2 .ng-binding').html(tip);
    });

$('.awardLevelItem').click(function () {
    $('.awardLevelItem').removeClass('selected');
    $(this).addClass('selected');
    var num1=$(this).index();
    $('#totalBox')[0].style.left=-601*num1+'px';
});

$('.tabSetting').click(function () {
        $('.tabSetting').removeClass('checked');
        $(this).addClass('checked');
        var num2=$(this).index();
        $('.settingbox').hide();
       $('.settingbox:eq('+num2+')').show();
    });

    var t1=0;
    $('.baseSeniorSet').click(function () {
        if(t1==0){
            $(this).children('.ng-binding').html('收起');
            $('.roteteArrow')[0].style.backgroundPosition='-665px -784px';
            $(this).parent().next().show();
            t1=1;
        }else{
            $(this).children('.ng-binding').html('展开');
            $('.roteteArrow')[0].style.backgroundPosition='-716px -784px';
            $(this).parent().next().hide();
            t1=0;
        }
    });

    $('.topBar .column').click(function () {
        $('.topBar .column').removeClass('checked');
        $(this).addClass('checked');
        var num3=$(this).index();
        $('#topBardSlide')[0].style.left='0px';
        $('#topBardSlide')[0].style.left=91*num3+'px';
    });
    
    $('label').click(function () {
        $(this).addClass('checked');
        $(this).siblings().removeClass('checked');
    });

    $('.hideBtn').click(function () {
        $('#menuBox').hide();
    });
    
    $('.pressBtn').click(function () {
        $('#menuBox').show();
    });
    $('.jumpBtn').click(function () {
        $('.base22').show();
        $('.base21').hide();
    });
    $('.lookBtn').click(function () {
        $('.base22').hide();
        $('.base21').show();
    });

    $('.default').click(function () {
        $('#uploadWxShare').hide();
    });
    $('.custom').click(function () {
        $('#uploadWxShare').show();
    });

    $('.titleDef').click(function () {
        $('#loadingCustomBox').hide();
    });
    $('.titleCus').click(function () {
        $('#loadingCustomBox').show();
    });

    $('.hideLogo').click(function () {
        $('#uploadLogo').hide();
    });
    $('.showLogo').click(function () {
        $('#uploadLogo').show();
    });
    var t=0;
    $('.baseSeniorSet').click(function () {
        if(t==0){
            $(this).children('.bind1').html('点击收起');
            $(this).children('.roteteArrow')[0].style.backgroundPosition='-665px -784px';
            $(this).parent().siblings('.box1').show();
            t=1;
        }else{
            $(this).children('.bind1').html('更多设置');
            $(this).children('.roteteArrow')[0].style.backgroundPosition='-716px -784px';
            $(this).parent().siblings('.box1').hide();
            t=0;
        }
    });

    $('.iconBox').click(function () {
        $(this).addClass('checked');
        $(this).siblings().removeClass('checked');
        var num5=$(this).index();
        $('.activeBox:eq('+num5+')').show();
        $('.activeBox:eq('+num5+')').siblings('.activeBox').hide();
    });

    $('.column:eq(4)').click(function () {
        $('.tabSetting:eq(2)').addClass('checked');
        $('.tabSetting:eq(2)').siblings('.tabSetting').removeClass('checked');
        $('#awardsSetting').show();
        $('#awardsSetting').siblings('.settingbox').hide();
    });
    $('.tabSetting:eq(2)').click(function () {
        $('.column:eq(4)').addClass('checked');
        $('.column:eq(4)').siblings('.column').removeClass('checked');
        $('#topBardSlide')[0].style.left='363px';
    });

    $('.scrollright').click(function () {
        $('.topBar').css({"left":"-320px"});
        $(this).hide();
        $('.scrollLeft').show();
    });
    $('.scrollLeft').click(function () {
        $('.topBar').css({"left":"0px"});
        $(this).hide();
        $('.scrollright').show();
    });

})



window.onscroll= function () {
    var topBarWrap=document.querySelector('.topBarWrap');
    var scrollHeight=document.documentElement.scrollTop||document.body.scrollTop;

    if(scrollHeight>=topBarWrap.offsetHeight){
        topBarWrap.style.position='fixed';
        $('.topBarWrap').css({'top':0,'z-index':100});
        $('.topBarSrollBox').css({'width':'808px','margin-right':'350px'});
        $('.scrollright').show();
        $('.titleBtnBox1').show();
    }else{
        topBarWrap.style.position='relative';
        //$('.topBarWrap').css({'top':0,'z-index':100});
        $('.topBarSrollBox').css({'width':'100%','margin-right':'0px'});
        $('.scrollIcon').hide();
        $('.titleBtnBox1').hide();
    }
}


