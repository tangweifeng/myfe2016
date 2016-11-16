/**
 * Created by c on 2016/11/4.
 */
$(function(){
    var $index=0;
    var $img= 0;
$('#x li').on('click',function(){
    $index=$(this).index();
    //小图
    $('#xiaotu div').eq($index).show().siblings().hide();
    $('#xiaotu div').eq($index).find('img').eq(0).show().siblings().hide();
    //下边
    $("#biao ul").eq($index).show().siblings().hide();
    //
    $('#big-pic div').eq($index).show().siblings().hide();
    $('#big-pic div').eq($index).find('img').eq(0).show().siblings().hide();
})
$('#biao li').on('click',function(){
   $img=$(this).index();
    $('#xiaotu .xiaotu').eq($index).show().siblings().hide();
    $("#xiaotu .xiaotu").eq($index).find('img').eq($img).show().siblings().hide();

    $('#big-pic div').eq($index).show().siblings().hide();
    $("#big-pic div").eq($index).find('img').eq($img).show().siblings().hide();

})
    $('#x li').eq(0).trigger('click');
//变图片*/





        $('#xiaotu').on('mousemove',function(event){

                $('#big-pic ').show();

                $('#drag').show();
            var   oSmallPic=document.getElementById('xiaotu');
            var   oDrag=document.getElementById('drag');
            var   oBigPic=document.getElementById('big-pic');
            var   oBigDiv = oBigPic.getElementsByTagName('div');
            var   oBigImg=oBigDiv[$index].getElementsByTagName('img')[$img];


            var iLeft =event.clientX - (oDrag.offsetWidth / 2)-200;
            var iTop =event.clientY - (oDrag.offsetHeight / 2)-105;

            if(iTop < 0){
                iTop = 0;
            }
            if(iTop > oSmallPic.offsetHeight - oDrag.offsetHeight){
                iTop = oSmallPic.offsetHeight - oDrag.offsetHeight;
            }
            if(iLeft < 0){
                iLeft = 0;
            }
            if(iLeft > oSmallPic.offsetWidth - oDrag.offsetWidth){
                iLeft = oSmallPic.offsetWidth - oDrag.offsetWidth;
            }
            oDrag.style.left = iLeft + "px";
            oDrag.style.top = iTop + "px";

            var fScaleX = iLeft / (oSmallPic.offsetWidth - oDrag.offsetWidth);
            var fScaleY = iTop / (oSmallPic.offsetHeight - oDrag.offsetHeight);

            oBigImg.style.top = -(oBigImg.offsetHeight - oBigPic.offsetHeight) * fScaleY + "px";
            oBigImg.style.left = -(oBigImg.offsetWidth - oBigPic.offsetWidth) * fScaleX + "px";
        })
        .on('mouseout',function(){
            $('#big-pic ').hide();

            $('#drag').hide();
        })
})