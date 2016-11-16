/**
 * Created by c on 2016/11/4.
 */
$(function(){

    var $index=0
     var timer= setInterval(function(){
       $index++;
       if ($index==6){
           $index=0
       }
       $('#tu img').eq($index).show().siblings().hide();
       $('#hua li').eq($index).css('background','cornflowerblue').siblings().css('background','black');
   },1000);
    $('#tu').on('mouseover',function(){
        clearInterval(timer)
    }).on('mouseout',function(){
        timer= setInterval(function(){
            $index++;
            if ($index==6){
                $index=0
            }
            $('#tu img').eq($index).show().siblings().hide();
            $('#hua li').eq($index).css('background','cornflowerblue').siblings().css('background','black');
        },1000);
    })
    $('#hua li').on('click',function(){
            var $index=$(this).index();
        $('#tu img').eq($index).show().siblings().hide();
        $('#hua li').eq($index).css('background','cornflowerblue').siblings().css('background','black');
    })
    var $search = $('input');
    $search.on('keypress', function (e) {
        if (e.which == 13) {
            alert($search.val());
        }
    });
    $search.on('focus', function () {
        if (this.value == this.defaultValue) {
            this.value = '';
        }

    }).on('blur', function () {
        if (this.value == '') {
            this.value = this.defaultValue;
        }

    });//文本框
    $('#skin li').on('click',function(){
        $(this).addClass('c').siblings().removeClass('c');
        $("#dh").removeClass().addClass('d'+$(this).index());
        $('#menu h2').removeClass().addClass('d'+$(this).index());
    })//换肤

  $(".t div").on("click",function(){
      var $index=4-$(this).index();
      $("#T").animate({
          left:-$index*782
      },1000)
  })

})