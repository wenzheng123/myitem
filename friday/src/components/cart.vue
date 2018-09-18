<template>
<div class="cart">
  <tou1></tou1>
  <div class="cartNav0">
  <div class="cartNav">
    <img src="../../static/img/end1.png" alt="">
    <div class="cartNav1">
      <span class="color">我的购物车</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>确认订单信息</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>订单提交成功</span>
    </div>
  </div>
  </div>
  <div class="con">
   <!--<div class="con1">-->
     <!--<img src="../../static/img/car/bigCar.png" alt="">-->
     <!--<div class="con1_1">-->
       <!--<p>您的购物车是空的</p>-->
       <!--<p @click="quHome">去首页看看</p>-->
     <!--</div>-->
   <!--</div>-->
    <div class="con2">
      <div class="con2_1">
        <img src="../../static/img/bus.png" alt="">
        <span>购物车</span>
      </div>
      <div class="con2_2">
        <ul class="con2_3">
          <div class="tr1">
            <div>
              <img src="../../static/img/car/yes.png" alt="">
              <span>爱果果水果店</span>
            </div>
            <div>规格</div>
            <div>单价</div>
            <div>数量</div>
            <div>金额</div>
            <div>操作</div>
          </div>
          <li class="tr2">
            <div>
              <img src="../../static/img/car/no.png" alt="">
              <img src="../../static/img/car/lizhi.png" alt="">
              <span>云南蒙自石榴 8个装</span>
            </div>
              <div>8个装</div>
              <div>￥569</div>
              <div>
                <div class="td">
                <button>-</button>
                <span>1</span>
                <button>+</button>
                </div>
              </div>
              <div>￥569</div>
              <div>删除</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <end></end>
</div>
</template>

<script>
    import Tou1 from "./Tou1";
    import Tou2 from "./Tou2";
    import End from "./End";
    export default {
        name: "cart",
      components:{
        End,
        Tou2,
        Tou1

      },
      methods:{
        quHome(){
          this.$router.push({path:'/shouye'})
        }
      },
      mounted(){
          $('.tr1>div').not($('.tr1>div:first')).css('margin-left','140px')
        $('.tr2>div').not($('.tr2>div:first')).css('margin-left','133px')
      }
    }
</script>

<style scoped>
  .cartNav1 .color{
    color: rgb(240, 130, 0);
   }
  .cartNav0{
    width: 100%;
    height: 130px;
    overflow: hidden;
    border-bottom: 1px solid #e4e4e4;
  }
  .cartNav{
    width: 1280px;
    line-height: 100px;
    margin: 0 auto;
  }
  .cartNav1{
    height: 130px;
    float: right;
    color: #a1a1a1;
    line-height: 130px;
    font-size: 20px;
    text-align: left;
  }
  .cartNav1>span{
    color: rgb(51, 51, 51);
  }
  .con{
  height: 490px;
  position: relative;
}
  .con1{
    width: 330px;
    height: 130px;
    text-align: center;
    line-height: 100px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
.con1_1{
  float: right;
  line-height: 3;
  font-size: 20px;
  color: rgb(102, 102, 102);
  }
.con1_1 p:nth-of-type(2){
  width: 170px;
  height: 45px;
  line-height: 45px;
  font-size: 18px;
  background-color: rgb(236, 106, 23);
  color: rgb(255, 255, 255);
  border-radius: 5px;
}
  .con2{
    width: 1280px;
    margin: 0 auto;
  }
  .con2_1{
    font-size: 18px;
    color: rgb(102, 102, 102);
    line-height: 60px;
  }
  .con2_1>img{
    width: 22px;
    height: 20px;
    margin-top: -5px;
    vertical-align: middle;
  }
  .con2_1>span{
    line-height:18px;
    margin-left: 15px;
  }
  .con2_3{
    width: 1280px;
  }
  .tr1{
    height: 45px;
    line-height: 45px;
    padding: 0 50px 0 20px;
   background-color: #f2f2f2;
  }
  .tr1>div{
    float: left;
  }
  .tr1>div:nth-of-type(1){
    width: 310px;
  }
  .tr1>div:nth-of-type(1) span{
    margin-left: 20px;
  }
  .tr2{
    height: 120px;
    line-height: 120px;
    border-bottom: 1px solid #e4e4e4;
  }
  .tr2>div{
    float: left;
  }
  .tr2>div:nth-of-type(1) img{
    margin-left: 20px;
  }
  .tr2>div:nth-of-type(1) span{
    margin-left: 20px;
  }
  .td{
    width: 100px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    font-size: 0;
  }
  .tr2>div:nth-of-type(4) button{
    width: 28px;
    font-size: 18px;
    border: 1px solid #e4e4e4;
    background-color: #f2f2f2;
  }
  .tr2>div:nth-of-type(4) span{
    width: 40px;
    height: 26px;
    margin-top: 10px;
    font-size: 18px;
    display: inline-block;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
  }

</style>
