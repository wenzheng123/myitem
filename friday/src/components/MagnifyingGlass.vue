<template>
<div class="glass">
  <div class="preview">

    <div id="vertical" class="bigImg">

      <img src="static/img/mid/05.jpg" width="500" height="500" alt="" id="midimg" />

      <div style="display:none;" id="winSelector"></div>

    </div><!--bigImg end-->

    <div class="smallImg">

      <div class="scrollbutton smallImgUp disabled"></div>

      <div id="imageMenu">

        <ul>

          <li v-for="src in arr"><img :src="src" width="68" height="68" /></li>

        </ul>

      </div>

      <div class="scrollbutton smallImgDown"></div>

    </div><!--smallImg end-->

    <div id="bigView" style="display:none;"><img width="800" height="800" alt="" src="" /></div>

  </div>
</div>
</template>

<script>
    export default {
        name: "MagnifyingGlass",
      data(){
        return{
          arr:['static/img/small/01.jpg','static/img/small/02.jpg','static/img/small/03.jpg','static/img/small/04.jpg','static/img/small/05.jpg','static/img/small/06.jpg']
        }
      },
      mounted(){
        // 图片上下滚动
        $('#imageMenu li:eq(0)').attr('id','onlickImg');
        var count = $("#imageMenu li").length - 3; /* 显示 4 个 li标签内容 */

        var interval = $("#imageMenu li:first").width();
        var left =parseInt($("#imageMenu li:first").css('marginLeft'));
        console.log(left);
        var curIndex = 0;



        $('.scrollbutton').click(function(){

          if( $(this).hasClass('disabled') ) return false;



          if ($(this).hasClass('smallImgUp')) --curIndex;

          else ++curIndex;



          $('.scrollbutton').removeClass('disabled');

          if (curIndex == 0) $('.smallImgUp').addClass('disabled');

          if (curIndex == count-1) $('.smallImgDown').addClass('disabled');



          $("#imageMenu ul").stop(false, true).animate({"marginLeft" : -curIndex*(interval+left) + "px"}, 600);

        });

        // 解决 ie6 select框 问题

        $.fn.decorateIframe = function(options) {
          // $.browser.msie && $.browser.version < 7



            var opts = $.extend({}, $.fn.decorateIframe.defaults, options);

            $(this).each(function() {

              var $myThis = $(this);

              //创建一个IFRAME

              var divIframe = $("<iframe />");

              divIframe.attr("id", opts.iframeId);

              divIframe.css("position", "absolute");

              divIframe.css("display", "none");

              divIframe.css("display", "block");

              divIframe.css("z-index", opts.iframeZIndex);

              divIframe.css("border");

              divIframe.css("top", "0");

              divIframe.css("left", "0");

              if (opts.width == 0) {

                divIframe.css("width", $myThis.width() + parseInt($myThis.css("padding")) * 2 + "px");

              }

              if (opts.height == 0) {

                divIframe.css("height", $myThis.height() + parseInt($myThis.css("padding")) * 2 + "px");

              }

              divIframe.css("filter", "mask(color=#fff)");

              $myThis.append(divIframe);

            });



        }

        $.fn.decorateIframe.defaults = {

          iframeId: "decorateIframe1",

          iframeZIndex: -1,

          width: 0,

          height: 0

        }

        //放大镜视窗

        $("#bigView").decorateIframe();

        //点击到中图

        var midChangeHandler = null;



        $("#imageMenu li img").bind("click", function(){

          if ($(this).attr("id") != "onlickImg") {

            midChange($(this).attr("src").replace("small", "mid"));

            $("#imageMenu li").removeAttr("id");

            $(this).parent().attr("id", "onlickImg");

          }

        }).bind("mouseover", function(){

          if ($(this).attr("id") != "onlickImg") {

            window.clearTimeout(midChangeHandler);

            midChange($(this).attr("src").replace("small", "mid"));

            $(this).css({ "border": "3px solid #959595" });

          }

        }).bind("mouseout", function(){

          if($(this).attr("id") != "onlickImg"){

            $(this).removeAttr("style");

            midChangeHandler = window.setTimeout(function(){

              midChange($("#onlickImg img").attr("src").replace("small", "mid"));

            }, 1000);

          }

        });

        function midChange(src) {

          $("#midimg").attr("src", src).load(function() {

            changeViewImg();

          });

        }

        //大视窗看图

        function mouseover(e) {

          if ($("#winSelector").css("display") == "none") {

            $("#winSelector,#bigView").show();

          }

          $("#winSelector").css(fixedPosition(e));

          e.stopPropagation();

        }

        function mouseOut(e) {

          if ($("#winSelector").css("display") != "none") {

            $("#winSelector,#bigView").hide();

          }

          e.stopPropagation();

        }

        $("#midimg").mouseover(mouseover); //中图事件

        $("#midimg,#winSelector").mousemove(mouseover).mouseout(mouseOut); //选择器事件



        var $divWidth = $("#winSelector").width(); //选择器宽度

        var $divHeight = $("#winSelector").height(); //选择器高度

        var $imgWidth = $("#midimg").width(); //中图宽度

        var $imgHeight = $("#midimg").height(); //中图高度

        var $viewImgWidth = null;
        var $viewImgHeight = null;
        var $height = null; //IE加载后才能得到 大图宽度 大图高度 大图视窗高度



        function changeViewImg() {

          $("#bigView img").attr("src", $("#midimg").attr("src").replace("mid", "big"));

        }

        changeViewImg();

        $("#bigView").scrollLeft(0).scrollTop(0);

        function fixedPosition(e) {

          if (e == null) {

            return;

          }

          var $imgLeft = $("#midimg").offset().left; //中图左边距

          var $imgTop = $("#midimg").offset().top; //中图上边距

          var X = e.pageX - $imgLeft - $divWidth / 2; //selector顶点坐标 X

          var Y = e.pageY - $imgTop - $divHeight / 2; //selector顶点坐标 Y

          X = X < 0 ? 0 : X;

          Y = Y < 0 ? 0 : Y;

          X = X + $divWidth > $imgWidth ? $imgWidth - $divWidth : X;

          Y = Y + $divHeight > $imgHeight ? $imgHeight - $divHeight : Y;



          if ($viewImgWidth == null) {

            $viewImgWidth = $("#bigView img").outerWidth();

            $viewImgHeight = $("#bigView img").height();

            if ($viewImgWidth < 200 || $viewImgHeight < 200) {

              $viewImgWidth = $viewImgHeight = 800;

            }

            $height = $divHeight * $viewImgHeight / $imgHeight;

            $("#bigView").width($divWidth * $viewImgWidth / $imgWidth);

            $("#bigView").height($height);

          }

          var scrollX = X * $viewImgWidth / $imgWidth;

          var scrollY = Y * $viewImgHeight / $imgHeight;

          $("#bigView img").css({ "left": scrollX * -1, "top": scrollY * -1 });

          $("#bigView").css({ "top": 80, "left": $(".preview").offset().left + $(".preview").width() + 20 });



          return { left: X, top: Y };

        }
      }
    }
</script>

<style scoped>
  .preview{width:500px; height:465px; margin:50px 0px 0px 150px;}

  /* smallImg */

  .smallImg{position:relative; height:92px; margin-top:1px; background-color:#F1F0F0; padding:6px 5px; width:491px; overflow:hidden;float:left;
  margin-top:40px; }

  .scrollbutton{width:24px; height:90px; overflow:hidden; position:relative; float:left; cursor:pointer; }

  .scrollbutton.smallImgUp.disabled , .scrollbutton.smallImgUp{background:url(../../static/img/images/glasschange.png) no-repeat;
    background-position: 0px 25px;}

  .scrollbutton.smallImgDown.disabled , .scrollbutton.smallImgDown{background:url(../../static/img/images/glasschange.png) no-repeat; margin-left:465px; margin-top:-90px;
    background-position: 0px -75px;}



  #imageMenu {height:90px; width:440px; overflow:hidden; margin-left:0; float:left;}

  #imageMenu li {height:90px; width:100px; overflow:hidden; float:left; text-align:center;margin-left: 8px}

  #imageMenu li img{width:90px; height:90px;cursor:pointer;}

  #imageMenu li#onlickImg img, #imageMenu li:hover img{ width:84px; height:84px; border:3px solid #959595;}

  /* bigImg */

  .bigImg{position:relative; float:left; width:500px; height:500px; overflow:hidden;}

  .bigImg #midimg{width:500px; height:500px;}

  .bigImg #winSelector{width:235px; height:210px;}

  #winSelector{position:absolute; cursor:crosshair; filter:alpha(opacity=15); -moz-opacity:0.15; opacity:0.15; background-color:#000; border:1px solid #fff;}

  /* bigView */

  #bigView{position:absolute;border: 1px solid #959595; overflow: hidden; z-index:999;}

  #bigView img{position:absolute;}
</style>
