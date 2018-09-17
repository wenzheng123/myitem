<template>
  <div class="lb">
    <!--<ul class="lb1">-->
      <!--<li class="lbb" v-for="i in 4">-->
        <!--<img src="../../static/img/shouye/mihoutao.png" alt="">-->
        <!--<p>新西兰佳沛黄金奇异果</p>-->
        <!--<p>6个装</p>-->
        <!--<div>礼拜五价 : <span> ¥ 28.80</span></div>-->
      <!--</li>-->
      <!--<div class="ball">-->
        <!--<span v-for="(i,index) in 4" :class="{color:change==index}" @click="changeC(index)"></span>-->
      <!--</div>-->
    <!--</ul>-->
    <div class="swiper-container lbl">
      <div class="swiper-wrapper">
        <div class="swiper-slide lbb">
        <img src="../../static/img/shouye/mihoutao.png" alt="">
        <p class="p1">新西兰佳沛黄金奇异果</p>
        <p class="p1">6个装</p>
        <div>礼拜五价 : <span> ¥ 28.80</span></div>
        </div>
        <div class="swiper-slide lbb">
          <img src="../../static/img/shouye/yangrou.png" alt="">
          <p class="p1">新西兰佳沛黄金奇异果</p>
          <p class="p1">6个装</p>
          <div>礼拜五价 : <span> ¥ 28.80</span></div>
        </div>
        <div class="swiper-slide lbb">
          <img src="../../static/img/shouye/mihoutao.png" alt="">
          <p class="p1">新西兰佳沛黄金奇异果</p>
          <p class="p1">6个装</p>
          <div>礼拜五价 : <span> ¥ 28.80</span></div>
        </div>
        <div class="swiper-slide lbb">
          <img src="../../static/img/shouye/caomei.png" alt="">
          <p class="p1">新西兰佳沛黄金奇异果</p>
          <p class="p1">6个装</p>
          <div>礼拜五价 : <span> ¥ 28.80</span></div>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div  class="swiper-pagination lbl1"></div>
    </div>
  </div>
</template>

<script>
  import Swiper1 from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
    export default {
        name: "Shouyelb",
      data(){
          return {
            change:-1,
          }
      },
      methods:{
        changeC(index){
         this.change = index
        }
      },
      mounted(){
        var mySwiper1 = new Swiper1 ('.lb .lbl', {
          loop:true,
          autoplay: {
            delay: 1000,//1秒切换一次
            disableOnInteraction: false,
          },
          slidesPerView: 4,//一行显示4个
          spaceBetween : 20,
//spaceBetween : '10%',按container的百分比
          // 如果需要分页器
          pagination: {
            el: '.lbl1',
            clickable: true,
            renderBullet: function (index, className) {
              return '<span style="width: 8px;height: 8px;background-color:#666666" class="' + className + '"></span>';
            },
            // type: 'bullets',
            // clickable: true,
            // bulletClass : 'my-bullet',
            // bulletActiveClass: 'my-bullet-active',
          },
        })
      }
    }
</script>

<style scoped>
  .my-bullet{
    width: 8px;
    height: 8px;
    background-color: #ffffff;
    opacity: 0.8;
  }
  .my-bullet-active{
    width: 10px;
    height: 10px;
    background-color: #4b943d;
  }
.lbl{
  width: 1280px;
  height: 520px;
  font-size: 18px;
  margin: 20px auto 0;
}
.swiper-slide{
  width: 305px;
  height: 433px;
  text-align: center;
  background-image: url("../../static/img/shouye/mengban.png");
}
.lbb img {
  width: 256px;
  height: 215px;
  display: inline-block;
  margin: 50px auto;
}
.lbb>.p1{
  width: 305px;
  height: 30px;
  font-size: 18px;
  position:static;
  line-height: 1.667;
  color: rgb(51, 51, 51);
}
.swiper-slide>div{
  color: rgb(240, 130, 0);
  line-height: 1.667;
}
.swiper-slide>div>span{
  color: #ff5757;
}
.lbl1{
  top:480px;
}
 /*.lbb{*/
  /*width: 305px;*/
  /*height: 433px;*/
  /*font-size: 18px;*/
  /*text-align: center;*/
  /*background-image: url("../../static/img/shouye/mengban.png");*/
/*}*/
/*.lbb img{*/
  /*margin: 60px auto;*/
/*}*/
/*.lbb p{*/
  /*line-height: 1.667;*/
  /*color: rgb(51, 51, 51);*/
/*}*/
/*.lbb>div{*/
  /*color: rgb(240, 130, 0);*/
  /*line-height: 1.667;*/
/*}*/
/*.lbb>div>span{*/
  /*color: #ff5757;*/
/*}*/
  /*.ball{*/
    /*clear: both;*/
    /*height: 90px;*/
    /*line-height: 90px;*/
    /*text-align: center;*/
  /*}*/
/*.ball>span{*/
  /*width: 8px;*/
  /*height: 8px;*/
  /*display: inline-block;*/
  /*border-radius: 50%;*/
  /*margin-left: 20px;*/
  /*background-color: rgb(176, 176, 176);*/
/*}*/
/*.ball .color{*/
  /*width: 10px;*/
  /*height: 10px;*/
  /*background-color: rgb(73, 142, 61);*/
/*}*/
/*.lbl{*/
  /*width: 1280px;*/
  /*margin: 20px auto 0;;*/
/*}*/
</style>
