<template>
  <div>

  <div class="swiper-container lbt">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in src">
        <img :src="item.name" alt="" >
        <p>{{item.p1}}</p>
        <p>{{item.p2}}</p>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <!--<div class="swiper-button-prev"></div>-->
    <!--<div class="swiper-button-next"></div>-->
    <!-- 如果需要滚动条 -->
    <!--<div class="swiper-scrollbar"></div>-->
  </div>
  </div>
</template>

<script>
  import Swiper2 from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
    export default {
        name: "Jflb",
      data(){
        return {
          src:[],
        }
      },
      props:{
        inputName: {
          type: Array
        },
        slName:{
          type: Array
        }
      },
      created(){
          this.src='';
          if(this.inputName){
            this.src = this.inputName
          }else if (this.slName){
            this.src = this.slName
          }
        // this.axios.get("/api/PHP/123/myaladdin.php").then(res=>{
        //   //这里是ES6的写法，get请求的地址，是小编自己在网站上存放的php文件，后面将介绍其编写，也可以自己定义
        //      this.src=res.data;//获取数据
        // })
      },
      mounted(){

        var mySwiper2 = new Swiper2 ('.lbt', {
         loop: true,
          autoplay: {
            delay: 1000,//1秒切换一次
            disableOnInteraction: false,
          },
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            // bulletElement : 'span',
            // bulletClass : 'my-bullet',
            // bulletActiveClass: 'my-bullet-active',
          },
          // 如果需要前进后退按钮
          // navigation: {
          //   nextEl: '.swiper-button-next',
          //   prevEl: '.swiper-button-prev',
          // },

          // 如果需要滚动条
            // scrollbar: {
            //   el: '.swiper-scrollbar',
            // },
        })
      },

    }
</script>

<style lang="less" >
  .lbt {
    width: 1920px;
    height: 500px;
    /*overflow: hidden;*/
    position: relative;
    z-index: 1;
    margin: 0 auto;
  }
  .swiper-slide>img{
    height: 500px;
  }
  .swiper-pagination-bullet{
    width: 18px;
    height: 18px;
    border: 1px solid #a5a5a5;
    background-color: #ffffff;
    opacity: 0.8;
  }
  .swiper-pagination-bullet-active{
    background-color: #4b943d;
  }
  .swiper-slide>p{
    height: 60px;
    line-height: 60px;
    width: 500px;
    text-align: center;
    color: #498e3d;
    position: absolute;
    top: 160px;
    left: 0;
    right: 0;
    margin:0 auto;
    z-index: 99;
    font-size: 55px;
  }
  .swiper-slide>p:nth-of-type(2){
    font-weight: 200;
    font-size: 40px;
    top: 290px;
  }
</style>
