<template>
    <div class="box">
      <Tou1></Tou1>
      <div class="two">
      <div class="one">
      <img src="../../static/img/end1.png" alt="">
        <div class="two1">
          <div class="two1_1" v-for="item in arr">
            &nbsp;&nbsp;&nbsp;<span>{{item.z1}}</span>
            &nbsp;&nbsp;&nbsp;<span>{{item.z2}}</span>
          </div>
        </div>
    </div>

      </div>
      <div class="one0">

        <div class="one1">
          <img src="../../static/img/对号.png" alt="">
          <p class="one2">支付成功</p>
          <div class="one1_1">
            <router-link to="/">
              <p>查看订单</p>
            </router-link>
            <router-link to="/">
            <p>返回首页</p>
            </router-link>
          </div>
          <p class="one3">订单编号： 20150901144912ah4941</p>
        </div>
      </div>
      <End></End>
    </div>
</template>

<script>
  import Tou1 from "@/components/Tou1"
  import End from "@/components/End"
    export default {
        name: "Pay3",
      data(){
        return{
          arr:[
            {z1:"我的购物车",z2:">"},
            {z1:"确认订单信息",z2:">"},
            {z1:"订单提交成功",z2:""},
          ]
        }
      },
      mounted(){
        $(".two1_1").eq(2).css("color","#f08200")
      },
      components:{
        Tou1,
        End
      }
    }
</script>

<style scoped>
  .two1{
    float: right;
    margin-top: -70px;
  }
  .two1_1{
    float: left;
    font-size: 19px;
  }
  .one3{
    font-size: 18px;
    color: #666666;
  }
  .one1_1 a:nth-child(2) p{
    background: #498e3d;
    float: right;
  }
  .one1_1  a:nth-child(1) p{
    background: #f08200;
  }
  .one1_1 p{
    float: left;
    width: 170px;
    height: 45px;
    color: #ffffff;
    font-size: 18px;
    line-height: 45px;
    border-radius: 5px;
  }
 .one1_1{
  margin: 60px 0;
   overflow: hidden;
   width: 380px;
 }
 .one2{
   font-size: 30px;
   color: #f08200;
 }
 .one1 img{
   margin: 150px 0 40px 0;
 }
  .one1{
    overflow: hidden;
    width: 380px;
    height: 638px;
    margin: 0 auto;
    text-align: center;
  }
  .two{
     border-bottom:1px solid #ccc;
  }
  .one img{
    margin : 25px 0 40px  0;
    /*float: left;*/
  }
  .one0,.one{
    width: 1280px;
    margin: 0 auto;
  }
</style>
