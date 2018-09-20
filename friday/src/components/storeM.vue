<template>
  <div class="storeM">
    <div class="s1">
      <p>{{obj.store}}</p>
    </div>
    <div class="s2">
      <p><span></span>营业时间:{{obj.time}}<span class="pr">{{obj.price}}</span></p>
      <p><span></span>{{obj.tel}}</p>
      <p><span></span>{{obj.site}}</p>
    </div>
    <div class="s3">
      <p>商家公告：</p>
      <p>{{obj.notice}}</p>
    </div>
    <div class="pf">
      <img src="static/img/store/2.png" alt="">
      <p>综合评分：<span class="f"><img src="static/img/store/3.png" alt="" :width="((obj.pf1/1+obj.pf2/1+obj.pf3/1)/3)/5*88+'px'" height="8"></span><span>{{(obj.pf1/1+obj.pf2/1+obj.pf3/1)/3}}分</span></p>
      <ul>
        <li>
          <p>描述</p>
          <p>{{obj.pf1}}分</p>
        </li>
        <li>
          <p>商品</p>
          <p>{{obj.pf2}}分</p>
        </li>
        <li>
          <p>服务</p>
          <p>{{obj.pf3}}分</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "storeM",
      data(){
          return{
            obj:{
              store:'礼拜五旗舰店',
              time:'全天24小时',
              price:'￥62/人',
              tel:'18699563265',
              site:'浙江省温岭市人民西路281左侧',
              notice: '本店有最新优惠活动，本店有最新优惠活动本店有最新优惠活动活动，到店男士享受8这优惠本店19.18有最新优惠活动...',
              pf1:'4.5',
              pf2:'4.5',
              pf3:'4.5'
            }
          }
      }
    }
</script>

<style scoped>
.storeM{
  width: 750px;
  height: 350px;
  color: #333333;
  position: relative;
}
.storeM .s1{
  width: 440px;
  height: 70px;
  border-bottom: 1px #f4f4f4 solid;
}
.storeM .s1 p{
  line-height: 70px;
  font-size: 30px;
}
.storeM .s2{
  width: 440px;
  height: 160px;
  border-bottom: 1px #f4f4f4 solid;
  padding: 30px 0;
  color: #858585;
}
.storeM .s2 p {
  font-size: 20px;
}
.storeM .s2 span{
  display: inline-block;
  width: 22px;
  height: 22px;
  vertical-align: middle;
  background: url("../../static/img/store/1.png");
}
.storeM .s2 p:nth-of-type(2) span{
  background-position: 0 -30px;
}
.storeM .s2 p:nth-of-type(3) span{
  background-position: 0 -58px;
}
.storeM .s2 p:nth-of-type(1) .pr{
  background: #fff;
  width: 100px;
  height: 28px;
  color: #f08200;
  margin-left: 10px;
}
.storeM .s3{
  width: 440px;
  padding-top: 30px;
}
.storeM .s3 p:nth-of-type(1){
     font-size: 22px;
}
.storeM .s3 p:nth-of-type(2){
  font-size: 15px;
  color: #858585;
}
.storeM .pf{
  width: 300px;
  height: 350px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #f4fff2;
}
.storeM .pf > img{
  float: right;
}
.storeM .pf > p{
  position: absolute;
  left: 20px;
  top: 110px;
  font-size: 20px;
}
.storeM .pf > p span:nth-of-type(1){
  display: inline-block;
  width: 88px;
  height: 8px;
  font-size: 0px;
  vertical-align: 2px;
  margin-right: 10px;
  background-color: #d3d3d3;
}
.storeM .pf > p span:nth-of-type(2){
  color: #f08200;
}
.storeM .pf ul{
  display: flex;
  position: absolute;
  top: 160px;
  width: 100%;
  height: 60px;
  overflow: hidden;
}
.storeM .pf ul li{
  flex: 1;
  border-right: 1px #d3d3d3 dotted;
  text-align: center;
  line-height: 30px;
  flex: 20px;
  position: relative;
  left: 1px;
}
.storeM .pf ul li p{
  margin: 0;
}
.storeM .pf ul li p:nth-of-type(2){
  color: #f08200;
}
</style>
