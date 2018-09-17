<template>
  <div class="box">
      <a href="#" class="button orange addcar">加入购物车</a>
      <i id="end"></i>

    </div>
</template>

<script>
import {realconsole} from "../../static/jquery.fly.min"
    export default {
        name: "Lian",
      mounted(){


            $(function() {
              var offset = $("#end").offset();  //结束的地方的元素
              $(".addcar").click(function(event){   //是$(".addcar")这个元素点击促发的 开始动画的位置就是这个元素的位置为起点
                var addcar = $(this);
                var img = addcar.parent().find('img').attr('src');
                var flyer = $('<img  src="/static/img/杏子.png">');
                flyer.fly({
                  start: {
                    left: event.pageX,
                    top: event.pageY
                  },
                  end: {
                    left: offset.left+10,
                    top: offset.top+10,
                    width: 0,
                    height: 0
                  },

                });
              });

            });
          }

    }
</script>

<style scoped>


  .cart i{width:35px;height:35px;display:block; background:url(/static/img/杏子.png) no-repeat;}




</style>
