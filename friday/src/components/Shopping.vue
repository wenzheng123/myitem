<template>
  <div class="box">
    <Tou1></Tou1>
    <Tou2 :end="name"></Tou2>
    <div class="top" id="end"></div>
    <div class="content">

      <div class="one">
        <div class="one_1" v-for="item in arr">
          <p>{{item.z1}} <span>{{item.z2}}</span> </p>
        </div>
      </div>
      <div class="one2">
        <div class="one2_1">
          <p>排序:</p>
          <p class="tz2" >销售</p>
          <p class="tz3">价格</p>
          <p class="tz1">评分最高</p>
        </div>
        <div class="one2_2">
          <p class="tz4">筛选:</p>
          <p class="tz5">全国</p>
          <p class="tz6" >次日达</p>
        </div>
      </div>
      <div class="one3" v-for="i in 2">
        <div class="one3_1" v-for="item in arr1">
          <img :src="item.img1" alt="">
          <p>{{item.name}}</p>
          <p >{{item.js}}</p>
          <p><span class="p1">{{item.price}}</span> <span class="p2"> {{item.yprice}}</span></p>
          <img class="aa" @click="addProduct" :src="item.img" alt="" >
        </div>

      </div>

    </div>
  </div>
</template>

<script>
  import Tou1 from  "@/components/Tou1"
  import Tou2 from  "@/components/Tou2"
  import {realconsole} from "../../static/jquery.fly.min"
    export default {
        name: "Shopping",
      components:{
          Tou1,
        Tou2
      },
      data(){
          return{
            arr:[
              {z1:"您的当前位置 :",z2:""},
              {z1:"首页",z2:">"},
              {z1:"全部商品",z2:">"},
              {z1:"苹果",z2:">"},
              {z1:"阿克苏"},
            ],
            arr1:[],
            name:"end"
          }
      },

      methods:{
        gets(){
          $.get("/api/PHP/two.php",function (data) {
            console.log(data)
            this.arr1 = data
          }.bind(this))
        },

        addProduct(event){
          var offset = $('#end').offset();
          var flyer = $('<img class="u-flyer" src="../../static/img/bus.png"/>');

          var top = $(window).scrollTop();

          console.log(event.pageX, event.pageY, $(window).scrollTop());

          flyer.fly({
            start: {
              left: event.pageX,
              top: event.pageY - top
            },
            end: {
              left: offset.left,
              top: offset.top - top,
              width: 20,
              height: 20,
              opacity: 0
            }
          });
          $('.u-flyer').delay(800).animate(
            {opacity: 0},10
          );
          console.log(111)
        }

      },

      mounted () {
        this.gets();
        // 购物车
      }
    }
</script>

<style scoped>
 .top{
   width: 127px;
   height: 40px;
   position: absolute;
   top: 88px;
   right: 353px;

 }
  .one3_1 {
    overflow: hidden;
    margin-right: 10px;
    margin-top: 20px;
  }
  .one3_1 img:nth-of-type(2){
    float: right;
    margin: -37px 20px 0 250px;

  }
  .p2{
    font-size: 18px;
    text-decoration:line-through;
    margin-left: 17px;
  }
  .p1{
    font-size: 24px;
    color: #f00;
  }
  .one3_1 p:nth-of-type(2){
    font-size: 14px;
    color: #666666;
    margin: 15px 0 20px 19px;
  }
  .one3_1 p:nth-of-type(1){
    font-size: 18px;
  }
  .one3_1 p{
    margin-left: 19px;
  }
 .one3_1 img:nth-of-type(1){
   height: 297px;
   width: 100%;
 }
  .one3_1{
    width: 304px;
    height: 433px;
    border: 1px solid #ccc;
  }
  .one3{
    display: flex;
    justify-content: space-between;
    overflow: hidden;
  }
  .tz6{
    width: 80px;
    height: 25px;
    background: #ccc;
    color: #666666;
    text-align: center;
    line-height: 25px;
  }
  .tz5{
    width: 65px;
    height: 27px;
    background: #498e3d;
    text-align: center;
    color: #ffffff;
    line-height: 27px;
    margin: 0 40px;
  }
  .tz4{
    color: #666666;
  }
  .one2_2 p{
    float: left;
    font-size: 16px;
  }
  .one2_2{
    position: absolute;
    right: 0;
    top: 20px;
  }
  .tz3{
    width: 77px;
    height: 26px;
    text-align: center;
    color: #498e3d;
    border:2px solid #498e3d;
  }
  .tz2{
    width: 62px;
    height: 26px;
    border: 1px solid #ccc;
    text-align: center;
    margin: 0 40px 0 63px;
  }
  .tz1{
    margin-left: 40px;
    width: 98px;
    height: 26px;
    border: 1px solid #ccc;
    text-align: center;
  }
  .one2_1 p{
    float: left;
    font-size: 16px;
    margin-top: 20px;
  }
  .one2_1{
    position: absolute;
    left: 0;
    top: 0;

  }
  .one2 {
    position: relative;
    height: 70px;
  }
  .one_1 p span{
    margin: 0 10px;
  }
  .one_1 p{
    float: left;
    font-size: 14px;
    color: #666666;
    line-height: 54px;
  }
  .one{
    height: 54px;
    background: #f4f4f4;
    margin-top: 20px;
  }
  .content{
    width: 1280px;
    margin: 0 auto;
  }
</style>
