/**
 * Created by Administrator on 2018/9/5.
 */
$(function () {
    $('.btnRight').click(function () {
        $('.btnBox').hide();
    });

    $('.input>input').focus(function () {
        $('.btnBox').show();
    });

    $('.input>input').blur(function () {
        $('.btnBox').hide();
    });

    //$('.btnBox').click(function () {
    //    $('.btnBox').show();
    //});
    var mySwiper = new Swiper ('#swiper1', {
        //direction: 'vertical',
        initialSlide :0,
        observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents: true,//修改swiper的父元素时，自动初始化swiper
        loop: true,

        autoplay:{
            delay: 3000,//1秒切换一次
            disableOnInteraction: false,
        },

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable :true,
        }
    })

    var a;
    $('.leftAsideTab').mouseenter(function () {

        $('.leftAsideTab').removeClass('active');
        $(this).addClass('active');
        a = $(this).index()
        $('.tab1').removeClass('active');
        $('.tab1:eq('+a+')').addClass('active');
    });

    var b=0;
    $('.manageInfo').mouseenter(function () {
        b = $(this).index()
        $('.bottBox').hide();
        $('.bottBox:eq('+b+')').show();
    });

    $('.manageBox').mouseleave(function () {
        $('.bottBox').hide();
    });
    
    $('.moreTBox').mouseenter(function () {
        $('.hdQuestions').show();
    });

    $('.moreTBox').mouseleave(function () {
        $('.hdQuestions').hide();
    });
    $('.moreTBox1').mouseenter(function () {
        $('.hdQrCode').show();
    });

    $('.moreTBox1').mouseleave(function () {
        $('.hdQrCode').hide();
    });

    var arr=['newActive.html','myActive.html','cavIndex.html','myInfo.html','giftCenter.html','employee.html','staffLog.html','payService.html'];
    $('.leftUtil').click(function () {
        $('.leftUtil').removeClass('active');
        $(this).addClass('active');
        var num0=$(this).index();
        $('#manageFramePage').attr({'src':arr[num0]});
    });

    $('.mask').click(function () {
        $('.mask').hide();
        $('#project-modal').hide();
    });

    $('#project-modal').on('click','.main-Btn', function () {
        $('.mask').hide();
        $('#project-modal').hide();
        $("#manageFramePage").attr("src",'create.html');
    });

    $("#project-modal").on("click",".startBtn" ,function () {
        var num=$(this).parent().parent().parent().attr("name");
        console.log(num);
        $.get("json/data1.json",function (data) {
            $.each(data,function (i) {
                console.log(num);
                var oList21 = data[i];
                var oId=oList21.id;
                if(oId==num){
                    $(".leftImgCont").hide();
                    $('.gameiframe').attr({'src':oList21.iframeSrc});
                    $('.gameframe').removeClass('hide');
                }
            })
        })

    });

    $("#project-modal").on("click",".closeBtn" ,function () {
        $('.gameframe').addClass('hide');
        $(".leftImgCont").show();
        $(".mask").hide();
        $("#project-modal").hide();
        $('.gameiframe').attr({'src':''});
    });

    $('#project-modal').on('click','.showqrCodeBtn',function () {
        var a=$('.qrCodeText').html()
        if(a=='扫码'){
            $('.qrCodeText').html('收起');
            $('.maskBg').show();
        }else if(a=='收起'){
            $('.qrCodeText').html('扫码');
            $('.maskBg').hide();
        }
    });




})











