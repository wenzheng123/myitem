<template>
<div class="confirmOrder">
  <tou1></tou1>
  <div class="cartNav0">
    <div class="cartNav">
      <img src="../../static/img/end1.png" alt="">
      <div class="cartNav1">
        <span >我的购物车</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="color">确认订单信息</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>订单提交成功</span>
      </div>
    </div>
  </div>
  <div class="con">
  <div class="info">
  <p class="info_1">收货人信息</p>
    <ul class="info_2">
      <li>
        <span class="color">*</span>
        <span>收货人姓名：</span>
        <input class="input_1" type="text" placeholder="可以收货人姓名">
      </li>
      <li>
        <div style="float: left">
        <span class="color">*</span>
        <span>所在地区:</span>
        </div>
        <link-age style="float: left;margin-left: -10px"></link-age>
      </li>
      <li>
        <span class="color">*</span>
        <span>详细地址：</span>
        <input class="input_2" type="text" placeholder="用于接收货物的详细地址 ">
      </li>
      <li>
        <span class="color">*</span>
        <span>联系电话：</span>
        <input type="text" placeholder="推荐使用手机号">
         <span>或固定电话:</span>
        <input type="text" placeholder="区号"> -
        <input type="text" placeholder="电话号码">
      </li>
      <li>
        <p class="info_3">确认并设为默认地址</p>
      </li>
    </ul>
  </div>
    <div class="goodsInfo">
      <p class="info_1">商品信息</p>
      <table class="goodsInfo_1">
        <col width="40%"></col>
        <col width="10%"></col>
        <col width="10%"></col>
        <col width="20%"></col>
        <col width="10%"></col>
        <tr class="goodsInfo_2">
          <th class="indent">爱果果水果店</th>
          <th>规格</th>
          <th>单价</th>
          <th>数量</th>
          <th>金额</th>
        </tr>
        <tr class="goodsInfo_3">
          <td class="indent">
            <img class="goodsImg" src="../../static/img/car/lizhi.png" alt="">
            <span>云南蒙自石榴 8个装</span>
          </td>
          <td class="color2">8个装</td>
          <td class="color2">¥569</td>
          <td>
            <div class="tdNum">
            <span @click="numChange(-1)" class="button1">-</span>
            <span class="num" contenteditable="ture">1</span>
            <span @click="numChange(1)" class="button1">+</span>
            </div>
          </td>
          <td>
            ¥{{total()}}
          </td>
        </tr>
        <!--<div>运费 ¥5.0 商品金额 ¥108.0 商家合计 ¥108.0</div>-->
      </table>
      <div class="goodsInfo_4">
        <span>运费</span>
        <span class="color">¥5.0</span>
        <span>商品金额</span>
        <span class="color">¥108.0 </span>
        <span>商家合计</span>
        <span class="color">¥108.0</span>
      </div>
    </div>
    <div class="bill">
      <p class="billP">开票信息</p>
      <div class="bill2">
      <input type="radio" name="info" value="不需要"> <span>不需要</span>
      <input type="radio" name="info" value="个人"> <span>个人</span>
      <input type="radio" name="info" value="单位"> <span>单位</span>
      </div>
      <div class="bill3">
        发票抬头: <input type="text"> <span class="color">*</span>请填写后认真核对发票信息
      </div>
    </div>
    <div class="addOrder">
      <p class="addOrder1">添加订单备注</p>
      <input maxlength="45" type="text" placeholder="限45个字，请填写有关商品、支付、发票等信息">
    </div>
    <div class="orderTime">
      <p class="orderTime1">次日达·礼拜五专享</p>
      <div class="orderTime2">
        <span>选择送达时间:</span>
        <span class="xiugai">2016年9月18日</span><span class="xiugai1">12:00~3:00</span>
        <button class="orderTimeBtn" @click="timeBtn">点击修改</button>
        <div class="revise">
        <table class="revise1" border="1">
          <tr >
            <td>
              10:00-13:00
            </td>
            <td>
              11:00-14:00
            </td>
            <td>
              12:00-15:00
            </td>
            <td>
              13:00-16:00
            </td>
            <td>
              14:00-17:00
            </td>
          </tr>
          <tr>
            <td>
              15:00-18:00
            </td>
            <td>
              16:00-19:00
            </td>
            <td>
              17:00-20:00
            </td>
            <td>
              18:00-21:00
            </td>
            <td>
              19:00-22:00
            </td>
          </tr>
        </table>
          <div class="revise2">
          <button class="reviseBtn" @click="revise(0)">取消</button>
          <button class="reviseBtn" @click="revise(1)">确定</button>
          </div>
        </div>
      </div>
    </div>
    <div class="pay">
      <div>
      <div class="pay1">
        <span>实付金额:</span>
        <span class="color">¥2977</span>
      </div>
      <div class="pay2">
        <span>订单完成后可获得积分:</span>
        <span class="color3" >300积分</span>
      </div>
      <button  class="payBtn">提交订单</button>
      </div>
    </div>
  </div>
  <end></end>
</div>
</template>

<script>
    import Tou1 from "./Tou1";
    import End from "./End";
    import LinkAge from "./LinkAge";
    export default {
        name: "ConfirmOrder",
      components:{
        LinkAge,
        End,
        Tou1

      },
      data(){
          return {
            xiugai:''
          }
      },
      methods:{
        timeBtn(){
          // $('.xiugai').attr('contenteditable',true)
          // $('.xiugai').css('border','2px solid #e9e9e9')
          $('.revise').css('display','block')
          $('.revise1').on('click','td',($event)=>{
             this.xiugai = $event.target.innerHTML
            $($event.target).css('backgroundColor','#f18a10')
            $('.revise1 td').not($($event.target)).css('backgroundColor','#ffffff')
          })
        },
        revise(changN){
          if(changN == 0){
            $('.revise').css('display','none')
          }else if(changN == 1){
            $('.xiugai1').html(this.xiugai)
            $('.revise').css('display','none')
          }
        },
        total(){
          console.log($('.num').text())
          var total = $('.num').text()*569
          console.log(total)
          return total
        },
        numChange(numChange){
          var num =$('.num').text()
          console.log(num)
            if ( numChange == 1 ) {
            console.log(1)
              num++;
            } else if ( numChange == -1 ) {
              console.log(2)
              num--;
            }
            if ( num <= 1 ) {
              num = 1;
            }
          $('.num').text(num)
        }
      },
      mounted(){

          $('.info_2>li').not($('.info_2>li:first')).css('text-indent','16px')
      }
    }
</script>

<style scoped>
  .revise{
    width: 550px;
    height: 167px;
    margin-top: 50px;
    overflow: hidden;
    display: none;
    position: relative;
    background:url("../../static/img/car/beijing.png");
  }
  .revise1{
    width: 500px;
    margin: 30px auto 0;
    background-color: #ffffff;
  }
  .revise1 td{
    border: 1px solid #d3d3d3;
  }
  .color3{
    color: #f18a10;
  }
  .revise2{
    width: 230px;
    position: absolute;
    left: 0;
    right: 0;
    margin:20px auto;
  }
  .revise2 button:nth-of-type(2){
    margin-left: 30px;
  }
  .reviseBtn{
    width: 90px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 5px;
    color: #ffffff;
    background-color: #999999;
  }
  .reviseBtn:hover{
    background-color: #f08200;
  }
  .bill{
    margin-top: 20px;
    font-family: "MicrosoftYaHei";
    color: rgb(102, 102, 102);
    border-top: 1px solid #e9e9e9;
    border-bottom:  1px solid #e9e9e9;
  }
  .billP{
    font-size: 18px;
    line-height: 60px;
  }
  .bill2{
    font-size: 14px;
    line-height: 15px;
  }
  .bill2 input:nth-of-type(1){
    margin-left: 0;
  }
.bill2 input{
  width: 18px;
  height: 18px;
  margin-top: -5px;
  margin-left: 40px;
}
  .bill2 span{
    margin-left: 10px;
  }
.bill3{
  height: 70px;
  font-size: 14px;
  line-height: 70px;
}
.bill3 input{
  line-height: 35px;
}
.bill3 span{
  margin-left: 20px;
}
.addOrder{
  margin:20px 0;

}
.addOrder1{
  font-size: 18px;
}
.addOrder input{
  width: 630px;
}
.orderTime{
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
}
  .orderTime1{
    font-size: 18px;
    color: rgb(73, 142, 61);
    line-height: 60px;
  }
  .orderTime2{
    font-size: 16px;
    color: rgb(102, 102, 102);
    margin-bottom: 20px;
  }
  .orderTimeBtn{
    padding-left: 30px;
    margin-left: 30px;
    color: rgb(73, 142, 61);
    background: url("../../static/img/car/telll.png") no-repeat left center/20px 22px;
  }
  .pay{
    overflow: hidden;
    font-size: 18px;
    color: rgb(102, 102, 102);
  }
  .pay>div{
    float: right;
  }
  .pay1{
   margin-top: 35px;
  }
  .pay2{
    font-size: 16px;
    margin-top: 30px;
    color: rgb(51, 51, 51);
  }

  .payBtn{
    font-size: 20px;
    margin-top: 40px;
    width: 150px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #f08200;
    color: #ffffff;
  }




  .goodsImg{
    width: 80px;
    height: 80px;
  }
  .goodsInfo{
    width: 1280px;
  }
  .goodsInfo_1{
    width: 1280px;
    color: rgb(102, 102, 102);
    border: 1px solid #e9e9e9;
    text-align: center;
  }
  .goodsInfo_1>tr{
    border-bottom: 1px solid #e9e9e9;
  }
  .goodsInfo_2{
    height: 45px;
    background-color: #f2f2f2;
  }
  .color2{
    color: rgb(153, 153, 153);
  }
  .tdNum{
    width: 103px;
    font-size: 0;
    margin: 0 auto;
    border: 1px solid #e9e9e9;
  }
  .button1{
    width: 28px;
    height: 28px;
    font-size: 18px;
    display: inline-block;
  }
  .num{
    width: 45px;
    height: 28px;
    font-size: 18px;
    border-left: 1px solid #e9e9e9;
    border-right: 1px solid #e9e9e9;
    display: inline-block;
  }
  .goodsInfo_2>th{
    text-align: center;
  }
  tr .indent{
    padding-left: 50px;
    text-align: left;
  }
  .goodsInfo_3{
    height: 120px;
  }
  .indent img{
    margin-right: 20px;
  }
  .goodsInfo_4{
    width: 1280px;
    height: 80px;
    font-size: 18px;
    color: rgb(102, 102, 102);
    line-height: 80px;
    text-align: right;
    padding-right: 40px;
    border: 1px solid #e9e9e9;
    border-top: 0px solid #e9e9e9;
  }
  .goodsInfo_4 span{
    margin-left: 20px;
  }








  .con{
    width: 1280px;
    margin: 0 auto 40px;
  }
  .info{
    border-bottom: 1px solid #e9e9e9;
    padding-bottom: 15px;
  }
  .info_1{
    font-family: "MicrosoftYaHei";
    color: rgb(102, 102, 102);
    line-height: 60px;
    border-bottom: 1px solid #e9e9e9;
  }
  .color{
    color: rgb(236, 106, 23);
  }
  .info_2>li{
     height: 39px;
     line-height: 39px;
     margin-top: 30px;
    font-size: 18px;
    font-family: "MicrosoftYaHei";
   }
  input{
    font-size: 16px;
    text-indent: 10px;
    line-height: 35px;
    color: rgb(153, 153, 153);
    border: 1px solid #e9e9e9;
  }
  input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: rgb(153, 153, 153);
    /* placeholder字体大小  */
    font-size: 16px;
  }
  .input_1{
    width: 335px;
  }
  .input_2{
    width: 464px;
  }
  .info_3{
    width: 205px;
    height: 40px;
    font-size: 16px;
    margin-left: 120px;
    color: rgb(255, 255, 255);
    text-align: center;
    font-family: "MicrosoftYaHei";
    background-color: rgb(240, 130, 0);
    border-radius: 5px;
  }







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
</style>
