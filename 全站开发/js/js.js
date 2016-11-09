/**
 * Created by c on 2016/11/2.
 */
$(function() {
    $('#span').on('click', function () {
        alert($('#search .input').val());
    });
    var $search = $('#search .input');
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

    });

    var $index = 0;
    $('#xiaoyu').click(function () {
        $index++;
        if($index==3){
            $index=0;
        }
        $('img').eq($index).show().siblings().hide();
    })


    $('#dayu').on('click',function(){
        $index--;
        if ($index==-1){
            $index=2;
        }
        $('img').eq($index).show().siblings().hide();
    })
    var timer=setInterval(function(){
        $index++;
        if($index==3){
            $index=0;
        }
        $('img').eq($index).show().siblings().hide();
    },1000)
    $('#pictuer').on('mouseover',function(){
        clearInterval(timer)
    }).on('mouseout',function(){
         timer=setInterval(function(){
            $index++;
            if($index==3){
                $index=0;
            }
            $('img').eq($index).show().siblings().hide();
        },1000)
    })

    $i=3;
    $('#c3').on('click',function(){
        $i++;
        $('#c2 img').eq($i).show().eq($i-4).hide();
    })

})