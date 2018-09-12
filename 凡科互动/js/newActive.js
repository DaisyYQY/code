/**
 * Created by Administrator on 2018/9/6.
 */
$(function () {
    var mySwiper = new Swiper ('#swiper2', {
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

    $.get("json/data1.json",function (data) {
        var topSpan = document.querySelectorAll('.newCategoryItem>.column');
        //console.log(topSpan);
        $.each(data,function (i) {
            var oList = data[i];
            //console.log(data[i].staticPic);
            var oCon = $('<div class="hdModel"> ' +
                '<div class="actPic"> ' +
                '<img class="static" src="'+oList.staticPic+'" alt=""> ' +
                '<img class="hover" src="'+oList.hoverPic+'" alt=""> ' +
                '</div> ' +
                '<div class="isHot"></div> ' +
                '<div class="actDescript"> ' +
                '<div class="actName"> ' +
                '<span class="ng-binding">'+oList.binding+'</span> ' +
                '</div> ' +
                '<div class="actImg"></div> ' +
                '</div> ' +
                '</div>');

            $(".activeContent").append(oCon);

        });

        for (let j = 0; j < topSpan.length; j++) {
            typeName = $(topSpan[j]).children().html();

            $(topSpan[j]).click(function () {
                typeName=$(this).children('').html()
                //console.log(typeName);
                $(".activeContent").html('');

                for (var k = 0; k < data.length; k++) {
                    //console.log(data[k].type);
                    if (data[k].type == typeName) {
                        var oCon = $('<div class="hdModel"> ' +
                            '<div class="actPic"> ' +
                            '<img class="static" src="'+data[k].staticPic+'" alt=""> ' +
                            '<img class="hover" src="'+data[k].hoverPic+'" alt=""> ' +
                            '</div> ' +
                            '<div class="isHot"></div> ' +
                            '<div class="actDescript"> ' +
                            '<div class="actName"> ' +
                            '<span class="ng-binding">'+data[k].binding+'</span> ' +
                            '</div> ' +
                            '<div class="actImg"></div> ' +
                            '</div> ' +
                            '</div>');
                        $(".activeContent").append(oCon);
                    }
                    if (typeName == '全部') {
                        console.log(data.staticPic);
                        var oCon = $('<div class="hdModel"> ' +
                            '<div class="actPic"> ' +
                            '<img class="static" src="'+data[k].staticPic+'" alt=""> ' +
                            '<img class="hover" src="'+data[k].hoverPic+'" alt=""> ' +
                            '</div> ' +
                            '<div class="isHot"></div> ' +
                            '<div class="actDescript"> ' +
                            '<div class="actName"> ' +
                            '<span class="ng-binding">'+data[k].binding+'</span> ' +
                            '</div> ' +
                            '<div class="actImg"></div> ' +
                            '</div> ' +
                            '</div>');
                        $(".activeContent").append(oCon);
                    }
                }
            });




        }


        var topSpan1 = document.querySelectorAll('.newCategoryBox3 .slideBox>.column');

        for (let j1 = 0; j1 < topSpan1.length; j1++) {
            //typeName1 = $(topSpan1[j1]).children().html();

            $(topSpan1[j1]).click(function () {
                typeName1=$(this).children('').html()
                //console.log(typeName1);
                $(".activeContent").html('');

                for (var k1 = 0; k1 < data.length; k1++) {
                    //console.log(data[k1].festival);
                    if (data[k1].festival == typeName1){
                        //console.log(data[k1].staticPic);
                        var oCon = $('<div class="hdModel"> ' +
                                '<div class="actPic"> ' +
                                '<img class="static" src="'+data[k1].staticPic+'" alt=""> ' +
                                '<img class="hover" src="'+data[k1].hoverPic+'" alt=""> ' +
                                '</div> ' +
                                '<div class="isHot"></div> ' +
                                '<div class="actDescript"> ' +
                                '<div class="actName"> ' +
                                '<span class="ng-binding">'+data[k1].binding+'</span> ' +
                                '</div> ' +
                                '<div class="actImg"></div> ' +
                                '</div> ' +
                                '</div>');
                            $(".activeContent").append(oCon);
                        }
                    if (typeName1 == '全部节日') {
                        //console.log(data.staticPic);
                        if (data[k1].type == '节日') {
                            var oCon = $('<div class="hdModel"> ' +
                                '<div class="actPic"> ' +
                                '<img class="static" src="' + data[k1].staticPic + '" alt=""> ' +
                                '<img class="hover" src="' + data[k1].hoverPic + '" alt=""> ' +
                                '</div> ' +
                                '<div class="isHot"></div> ' +
                                '<div class="actDescript"> ' +
                                '<div class="actName"> ' +
                                '<span class="ng-binding">' + data[k1].binding + '</span> ' +
                                '</div> ' +
                                '<div class="actImg"></div> ' +
                                '</div> ' +
                                '</div>');
                            $(".activeContent").append(oCon);
                        }
                    }
                }

            });
        }



        var topSpan2 = document.querySelectorAll('.newCategoryBox4 .slideBox>.column');
        for (let j2 = 0; j2 < topSpan2.length; j2++) {

            $(topSpan2[j2]).click(function () {
                typeName2=$(this).children('').html()
                $(".activeContent").html('');

                for (var k2 = 0; k2 < data.length; k2++) {
                    //console.log(data[k1].festival);
                    if (data[k2].activeType == typeName2){
                        //console.log(data[k1].staticPic);
                        var oCon = $('<div class="hdModel"> ' +
                            '<div class="actPic"> ' +
                            '<img class="static" src="'+data[k2].staticPic+'" alt=""> ' +
                            '<img class="hover" src="'+data[k2].hoverPic+'" alt=""> ' +
                            '</div> ' +
                            '<div class="isHot"></div> ' +
                            '<div class="actDescript"> ' +
                            '<div class="actName"> ' +
                            '<span class="ng-binding">'+data[k2].binding+'</span> ' +
                            '</div> ' +
                            '<div class="actImg"></div> ' +
                            '</div> ' +
                            '</div>');
                        $(".activeContent").append(oCon);
                    }
                    if (typeName2 == '全部') {
                        //console.log(data.staticPic);
                        if (data[k2].type == '游戏营销') {
                            var oCon = $('<div class="hdModel"> ' +
                                '<div class="actPic"> ' +
                                '<img class="static" src="' + data[k2].staticPic + '" alt=""> ' +
                                '<img class="hover" src="' + data[k2].hoverPic + '" alt=""> ' +
                                '</div> ' +
                                '<div class="isHot"></div> ' +
                                '<div class="actDescript"> ' +
                                '<div class="actName"> ' +
                                '<span class="ng-binding">' + data[k2].binding + '</span> ' +
                                '</div> ' +
                                '<div class="actImg"></div> ' +
                                '</div> ' +
                                '</div>');
                            $(".activeContent").append(oCon);
                        }
                    }
                }

            });




        }


    },"json");

    $('.activeContent').on('mouseenter','.hdModel',function () {
        $(this).addClass('active');
    });

    $('.activeContent').on('mouseleave','.hdModel',function () {
        $(this).removeClass('active');
    });

    $('.newCategoryItem>.column').click(function () {
        $('.newCategoryItem>.column').removeClass('active');
        $(this).addClass('active');
    });

    $('.Festival').click(function () {
        $('.newCategoryBox3').toggle();
    });

    $('.moreselect').click(function () {
        $('.moreFestival').toggle();
    });

    $('.moreFestival>.column').click(function () {
        $('.moreFestival>.column').removeClass('active');
        $(this).addClass('active');
    });

    $('.newCategoryItem>.column').not($('.Festival')).click(function () {
        $('.newCategoryBox3').hide();
    });

    $('.newCategoryBox3 .slideBox>.column').not($('.moreselect')).click(function () {
        $('.moreFestival').hide();
    });

    $('.newCategoryItem>.column').not($('.game')).click(function () {
        $('.newCategoryBox4').hide();
    });

    $('.game').click(function () {
        $('.newCategoryBox4').toggle();
    });

    $('.newCategoryBox3 .slideBox>.column').click(function () {
        $('.newCategoryBox3 .slideBox>.column').removeClass('active');
        $(this).addClass('active');
    });

    $('.hdModel').click(function () {
        $('.modal').show();
    });

    $(".activeContent").on("click",".hdModel", function () {
        //var oId=$(this).attr("name");
        //
        //$("#swiper1 .swiper-wrapper").html("");
        //
        //$.get("json/miweidea.json", function (data) {
        //
        //    $.each(data[oId-1].pic,function (j) {
        //        var oCon1 = $('<div class="swiper-slide"><img src="'+data[oId-1].pic[j].pic1+'" alt=""></div>');
        //        $("#swiper1 .swiper-wrapper").append(oCon1);
        //    })
        //    $(".project-title").html(data[oId-1].title);
        //    $(".project-descr").html(data[oId-1].brand);
        //
        //},"json");
        //$(".mask").show();
        //$("#project-modal").show();
        $(window.parent.document).find(".mask").show();
        $(window.parent.document).find("#project-modal").show();
    });

    $(".leftImgCont").on("click",".startBtn" ,function () {
        $(".leftImgCont").hide();
        $('.gameiframe').attr({'src':'//hd.faisco.cn/7020498/XW6aET6Twaht9EOSX7_qHA/load.html?style=38&testPlayAid=17495346&testPlaySign=93d64669fabc658579315eae1219c84d'});
        $('.gameframe').removeClass('hide');
    });

    $("body").on("click",".mask" ,function () {
        $('.gameframe').addClass('hide');
        $(".leftImgCont").show();
        $(".mask").hide();
        $("#project-modal").hide();
        $('.gameiframe').attr({'src':''});
    });

    $(".poupContent").on("click",".closeBtn" ,function () {
        $('.gameframe').addClass('hide');
        $(".leftImgCont").show();
        $(".mask").hide();
        $("#project-modal").hide();
        $('.gameiframe').attr({'src':''});
    });

    $('.poupContent').on('click','.showqrCodeBtn',function () {
        var a=$('.qrCodeText').html()
        if(a=='扫码'){
            $('.qrCodeText').html('收起');
            $('.maskBg').show();
        }else if(a=='收起'){
            $('.qrCodeText').html('扫码');
            $('.maskBg').hide();
        }
    });

    //$('.staticClass').click(function () {
    //    $('.staticClass')[0].style.position='fixed';
    //    $('.staticClass').css({'top':0,'z-index':100});
    //});


})
$(window).scroll(function () {
    console.log(1);
    if($(window).scrollTop>=200){
        $('.staticClass')[0].style.position='fixed';
        $('#activeTwo').css({'top':0,'z-index':100});
    }else{
        $('#activeTwo').position('relative');
    }
});


//window.onscroll= function () {
//    console.log(1);
//    var activeTwo=document.querySelector('#activeTwo');
//    var scrollHeight=document.documentElement.scrollTop||document.body.scrollTop;
//    if(scrollHeight>=10){
//        $('.staticClass')[0].style.position='fixed';
//        //activeTwo.style.position='fixed';
//        $('.staticClass').css({'top':0});
//    }else{
//        $('.staticClass')[0].style.position='relative';
//        //$('#activeTwo').position('relative');
//        //activeTwo.style.position='relative';
//    }
//}


























