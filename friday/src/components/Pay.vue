<template>
    <div class="box">
<Tou1></Tou1>
      <div class="content">
        <div class="one0">
        <div class="one">
          <img src="../../static/img/end1.png" alt="">
          <p>我的购物车 <span> > </span> 确认订单 <span> > </span> <strong>订单提交成功</strong> </p>
        </div>
        </div>
        <!--第二个-->
        <div class="one1">
        <div class="one2">
          <img src="static/img/对号.png" alt="">
          <p>订单已提交，请于24小时内完成支付 <span class="tz">（逾期订单将被取消）</span></p>
        </div>
          <div class="one3">
            <span><img src="static/img/location.png" alt=""></span>
         送货至： 但小兵 北京 北京市 昌平区 天通苑明天第一城4号楼101 固定电话010-21541589
          </div>
          <div class="one4">
            <p>应付金额：<B>165.90</B>   （在线支付） <br> <span>支付平台</span> </p>
            <p>订单编号：425954156947</p>
          </div>
          <div class="one5">
            <div class="one5_1" v-for="(item,index) in arr">
            <img src="static/img/an.png" alt="" class="m1" @click="white(index)">
            <img :src="item.m2" alt="" class="m2">
            </div>
          </div>
          <div class="one6">
            <div class="one6_1">
              <p>使用电脑支付</p>
              <img src="static/img/CCTV.png" alt="">
              <p>立即支付</p>
            </div>
            或
            <div class="one6_2">
              <p>使用支付宝钱包扫一扫付款</p>
              <img src="static/img/code1.png" alt="">
            </div>
          </div>

        <div class="one7">
          <img src="static/img/iphone.png" alt="">
         <div class="one7_1">
          <p>使用微信扫一扫付款</p>
          <img src="static/img/code2.png" alt="">
        </div>
        </div>
        </div>
      </div>
      <End></End>
    </div>
</template>

<script>
  import Tou1 from "@/components/Tou1";
  import End from "@/components/End";
    export default {
        name: "Pay",
      components:{
          Tou1,
        End
      },
      data(){
          return{
            arr:[
              {m2:"static/img/支付宝.jpg"},
              {m2:"static/img/微信.png"},
              {m2:"static/img/银联.png"},
              {m2:"static/img/余额.png"},
            ],
            index:1
          }
      },

      methods:{
          white(index){
              $(".m1").eq(index).attr("src","static/img/white.png")

              $(".m1").not($(".m1").eq(index)).attr("src","static/img/an.png")

          }
      }
    }
</script>

<style scoped>
  .one7_1 p{
    margin: 60px 0 42px 30px;
  }
  .one7_1{
    position: absolute;
    right: 295px;
    top: 0;
  }
  .one7 img:nth-child(1){
    height: 280px;
    margin: 60px 0 0 256px;
    padding-right: 113px;
    border-right: 1px solid #ccc;
  }
  .one7{
    margin: 40px auto;
    position: relative;
    height: 398px;
    font-size: 18px;
    color: #666666;
    border:1px solid #ccc;
  }
  .one6_2{
    line-height: 100px;
    position: absolute;
    right: 300px;
    top: 40px;
  }
  .one6_1 p:nth-of-type(2){
    width: 170px;
    height: 45px;
    background: #f08200;
   line-height: 45px;
    color: #ffffff;
    border-radius: 10px;
  }
  .one6_1{
    position: absolute;
    left: 300px;
    top: 40px;
    line-height: 90px;
  }
  .one6{
    position: relative;
    height: 398px;
    text-align: center;
    font-size: 18px;
    color: #666666;
    line-height: 398px;
    border:1px solid #ccc;
  }
  /*三*/
  .m2{
    float: left;
    margin-top: 45px;
  }
  .m1{
    margin-top: 52px;
    margin-left: 38px;
    margin-right: 13px;
    float: left;
    line-height: 100px;
  }
  /*支付*/
  .one5{
    overflow: hidden;
    line-height: 200px;
    height: 120px;

  }
  .one4 B{
    color: #f00;
    font-size: 20px;
  }
  .one4 p:nth-child(2){
    position: absolute;
    right: 217px;
    top: 0;
  }
  .one4 p:nth-child(1) span{
   line-height: 100px;
  }
  .one4{
    margin-top: 40px;
    border-bottom: 2px solid #ccc;
    height: 107px;
    position: relative;
    font-size: 18px;
    color: #666666;
  }
  .one3 span{
    line-height: 45px;
    text-align: center;
    display: inline-block;
    width: 38px;
    height: 38px;
  }
  .one3{
    color: #727472;
    font-size: 14px;
    height: 36px;
    background: #f4fff2;
    border:2px solid #ccc;
  }
  .tz{
    color: #f08200;
  }
  .one2 img{
    margin: 80px 0 60px 0;
  }
  .one2{
    text-align: center;
    height: 323px;
    font-size: 24px;
  }
  .one1{
    margin: 0 auto;
    width: 1280px;
  }
  /*第二部分*/
  .one p strong{
    color: #f08200;
  }
  .one p span{
    color: #666666;
    margin: 0 40px;
  }
  .one p{
    font-weight: 200;
    position: absolute;
    right: 0;
    top: 60px;
    font-size: 20px;
  }
  .one img{
    margin-top: 25px;
  }
  .one{
    position: relative;
    width: 1280px;
    height: 132px;
    margin: 0 auto;
  }
  .one0{
    width: 100%;
    border-bottom:1px solid #ccc;
  }

</style>
