/**
 * Created by c on 2016/11/4.
 */
$(function(){


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

    $('#biaotou li').on('click',function(){
        var  $index=$(this).index();
       $(this).addClass('selected').siblings().removeClass('selected');
        $('#nr div').eq($index).addClass('selected').siblings().removeClass('selected');
    })
    //选项卡

    $('#cc li').on('click',function(){
        var $index=$(this).index();
        var  a=$('#cc li').eq($index).text();
        $('#li5 .xzzz').text(a);
    })
    $('#shu').on('change',function(){
        var b=$(this).val();
        $('#li7 .x').text(b*200);
    })
    $('#x li').on('click',function(){
        $('#x li').eq($(this).index()).text();
        $('#li4 .x').text($('#x li').eq($(this).index()).text())
    })
    //变值

    //小星星

})