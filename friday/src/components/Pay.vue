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
            <img src="static/img/an.png" alt="" class="m1">
            <img src="static/img/支付宝.png" alt="" class="m2">
            <img src="static/img/an.png" alt="" class="m1">
            <img src="static/img/微信.png" alt="" class="m2">
            <img src="static/img/an.png" alt="" class="m1">
            <img src="static/img/银联.png" alt="" class="m2">
            <img src="static/img/an.png" alt="" class="m1">
            <img src="static/img/余额.png" alt="" class="m2">
          </div>
        </div>
      </div>
      <!--<End></End>-->
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
      }
    }
</script>

<style scoped>
  .m2{
    float: left;
    line-height: 100px;
  }
  .m1{
    margin-top: 10px;
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
    border-bottom:solid #ccc ;
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
    border: solid red;
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
