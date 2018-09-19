/**
 * Created by Administrator on 2018/9/12.
 */
$(function () {
    var num1=0;
  $('.scrollFixedTr .column4').click(function () {
      if(num1==0){
          $('.column4 .faiTable_poupBox').show();
          $(this).children('.padding').children('.icon').css({"background-position":"-758px -622px"});
          num1=1;
      }else{
          $('.column4 .faiTable_poupBox').hide();
          $(this).children('.padding').children('.icon').css({"background-position":"-722px -622px"});
          num1=0;
      }
  });

    var num2=0;
    $('.dropDownArea').click(function () {
        if(num2==0){
            $('.dropDownBox .optionsBox').show();
            $(this).children('.padding').children('.icon').css({"background":"url('../img/iconAll.png')-349px -782px no-repeat"});
            num2=1;
        }else{
            $('.dropDownBox .optionsBox').hide();
            $(this).children('.padding').children('.icon').css({"background":"url('../img/iconAll.png')-318px -782px no-repeat"});
            num2=0;
        }
    });

    $('.moreSelect').click(function () {
        $(this).next('.moreOptionBox').toggle();
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})













