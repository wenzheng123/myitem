<template>
    <div class="end">
      <div class="end1">
        <ul class="end1_1">
          <li><div class="demo1"></div> <span>优鲜保障</span>
          <li><div class="demo7"></div> <span>全程监控</span></li>
          <li><div class="demo3"></div> <span>礼拜五特惠</span></li>
          <li><div class="demo4"></div> <span>基地直供</span></li>
          <li><div class="demo5"></div> <span>准时送达</span></li>
        </ul>
      </div>
      <div class="end2">
        <div class="end2_1">
          <div class="end2_2">
          <img src="../../static/img/end1.png" class="m1" alt="">
          <p>服务时间 ： 08：-22:00
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src="../../static/img/电话.png" alt="">
            <span class="tz">400-800-8820</span> </p>
        </div>

        <div class="end2_3" v-for="item in arr" >
          <img src="../../static/img/end2.png" alt="">
          <p>{{item}}</p>
        </div>
          <div class="end2_4" v-for="item in arr1">
            <ul class="ul1">
              <li>{{item.z1}}</li>
              <li class="tz1">{{item.z2}}</li>
              <li class="tz1">{{item.z3}}</li>
              <li class="tz1">{{item.z4}}</li>
            </ul>
          </div>

        </div>
      </div>
      <div class="end3">
        <p>版权所有 © 礼拜五  保留所有权利 | 沪ICP备12042163</p>
        <p class="tz">礼拜五  纵享品质</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "End",
      data(){
          return{
            arr:[
              "礼拜五官方微信",
              "礼拜五APP"
            ],
            arr1:[
              {z1:"关于礼拜五",z2:"新用户注册",z3:"在线下单",z4:"支付方式"},
              {z1:"配送说明",z2:"运费说明",z3:"配送方式",z4:"发票说明"},
              {z1:"售后服务",z2:"退换货说明",z3:"服务保障承诺",z4:"验货与签收"},
              {z1:"加盟礼拜五",z2:"加盟条款",z3:"公司简介",z4:"服务协议"}
            ]
          }
      }
    }
</script>

<style scoped>
  .end3 p:nth-child(1){
    margin-top: 20px;
  }
  .end3{
    text-align: center;
    height: 80px;
    margin: 0 auto;
    width: 1280px;
  }
  .ul1 {
    float: left;
  }
  .tz1{
    color: #999999;
    margin-top:10px ;
    font-size: 14px;
  }
  .ul1 li:nth-of-type(2){
    margin-top: 23px;
  }
  .ul1 li:nth-of-type(1){
    font-weight:500;
    color: #333333;
  }
  .end2_4 {
    overflow: hidden;
    margin: 30px 0 0 39px;

  }
  .end2_3 p{
    margin-top: 16px;
  }
  .end2_3{
    color: #666666;
    margin:20px 0 20px 40px;
    text-align: center;
  }
  .end2_3,.end2_2,.end2_4{
    float: left;
  }
  .tz{
    color: #f08200;
  }
.m1{
  margin: 30px 0 40px 0;
}
  .end2_1{
    position: relative;
    padding: 0 30px;
    width: 1280px;
    height: 200px;
    margin: 20px auto;


  }
  .end2{
    border-bottom: 2px solid #ccc;
  }
  /*二维码*/
 .end1_1 li span{
   float: right;
   margin: 20px 50px 0 0 ;
 }
  .end1_1 li{
    text-align: center;
    width: 250px;
    height: 66px;
    border-right: 2px solid #ccc;
    margin: 20px auto;
    float: left;
    font-size: 20px;
  }
 .demo1,.demo7,.demo3,.demo4,.demo5{
    margin-top: 10px;
    display:inline-block;
    width:45px;
    height:45px;
    background: transparent url("../../static/img/jl.png") no-repeat;
  }
  .demo1{ background-position:0 0;}
 .demo7{ background-position:-55px 0 ;}
 .demo3{ background-position:-108px 0;}
 .demo4{ background-position:-160px 0;}
 .demo5{ background-position:-216px 0;}
  /*精灵图*/
  .end1_1{
    width: 1280px;
    height: 107px;
    margin: 0 auto;
  }
.end1{
  border-top:1px solid #ccc;
  border-bottom:2px solid #ccc;
}

</style>
