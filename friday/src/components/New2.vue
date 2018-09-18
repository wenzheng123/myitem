<template>
  <div class="conten">
    <div class="one0">
      <div class="one1">

        <input type="text" placeholder="请输入手机号" v-model="me">
        <span class="demo2"></span>
        <p class="me1"><span class="demo3"></span> 手机号码不正确，请重新输入</p>
        <input type="password" placeholder="请输入密码（6-20位号码字符）">
        <input type="password" placeholder="请再次输入密码确认">
        <input type="text" placeholder="验证码">
        <div class="two4_1">
          <div class="two4">
            <Yan1></Yan1>
          </div>
        </div>
        <div class="two">
          <input type="text" v-model="me2" placeholder="手机验证码">
          <p @click="huoQu">获取验证码</p>
        </div>
      </div>
      <div class="new2">
        <img @click="huan" class="new1" src="../../static/img/new4.png" alt=""><span>我已阅读并同意《礼拜五用户协议》</span>
      </div>
      <div class="one2">
        <p>注册</p>
        <p>登录</p>
      </div>

    </div>
  </div>
</template>

<script>
  import Yan1 from "@/components/Yan1"
  import index from "../router";
  export default {
    name: "New2",
    components:{
      Yan1
    },
    data(){
      return{
        me:"",
        me2:"",
        index:1
      }
    },

    methods:{
      chong(){
        $(".one0").css("display","none")
        $(".reset").css("display","block")
      },
      new1(){
        $(".one0").css("display","none")
      },
     huan(){
        this.index++
       if(this.index % 2 == 0){
         $(".new1").attr("src","../../static/img/new3.png")
       }else{
         $(".new1").attr("src","../../static/img/new4.png")
       }

     },
      huoQu(){
        this.index++
        if(this.index % 2 == 0 ) {
          for (var i = 0; i < 6; i++) {
            this.me2 += Math.floor(Math.random() * 10)
          }
        }else{
          this.me2=""
        }
      }

    },

    watch:{
      me(newme,oldme){
        if(newme.length == 11){
          $(".demo2").css("opacity",1)
        }else if(newme.length > 11){
          $(".me1").css("display","block")
          $(".demo2").css("opacity",0)
        } else{
          $(".demo2").css("opacity",0)
          $(".me1").css("display","none")
        }

      }
    }
  }
</script>

<style scoped>
  .new2 span{
    float: left;

  }
  .new2 img{
    float: left;
    margin:2px  10px;
  }
  .new2{
    overflow: hidden;
    color: #666666;
    margin-bottom: 10px;
  }
  .two p:nth-of-type(1),.two8 p:nth-of-type(1){
    color: #ffffff;
    width: 100px;
    height: 30px;
    font-weight:100;
    background: #498e3d;
    text-align: center;
    line-height: 30px;
    position: absolute;
    right: 8px;
    top: 28px;
  }
  .two4_1{
    position: relative;
  }
  .two4{
    width: 175px;
    position: absolute;
    top: -40px;
    right:0;
    font-size: 15px;
  }

  .me1{
    display: none;
    color: #f00;
    height: 15px;
  }
  /*input的判断*/
  .one4 {
    margin:17px 0 0 100px;
  }
  .one3 p{
    position: absolute;
    top: -10px;
    right: 96px;
    width: 130px;
    text-align: center;
    background: #ffffff;
  }
  .one3_1{
    width: 100%;
    margin-top: 15px;
    border-top:2px dashed #ccc;
  }
  .one3{
    margin-top: 24px;
    position: relative;
  }
  .one2 span {
    color: #ccc;

  }
  .one2 p:nth-of-type(2){
    background: #498e3d;
    margin-left:30px;
    margin-bottom: 10px;
  }
  .one2 p:nth-of-type(1){
    background: #f08200;
  }

  .one2 p{
    border-radius: 8px;
    text-align: center;
    line-height: 46px;
    float: left;
    color: #ffffff;
    font-size: 18px;
    width: 136px;
    height: 46px;
  }
  .one2{
    overflow: hidden;
  }
  /*登录*/

  .one1 input:nth-of-type(5){
    margin: 20px 2px;
  }
  .two p{
    position: absolute;
    right: 8px;
    top: 10px;
    color: #f00;

  }

  .two strong{
    position: absolute;
    bottom: -10px;
  }

  .two{
    line-height: 40px;
    position: relative;
    margin-bottom: 15px;
  }
  .one1 input:nth-of-type(4){
    padding: 0 10px;
    width:115px;
    height: 44px;
    border:2px solid #ccc;
    margin-top:9px;
  }
  .one1 input:nth-of-type(3){
    padding: 0 10px;
    margin-top: 20px;
    width:310px;
    height: 44px;
    border:2px solid #ccc;
    position: relative;
  }
  .one1 input:nth-of-type(2){
    padding: 0 10px;
    margin-top: 20px;
    width:310px;
    height: 44px;
    border:2px solid #ccc;
    position: relative;
  }
  .one1 input:nth-of-type(1){
    padding: 0 10px;
    margin-top: 20px;
    width:310px;
    height: 44px;
    border:2px solid #ccc;
    position: relative;
  }
  .one1 span:nth-of-type(2){
    font-size: 16px;
    margin-left: 130px;
    color: #498e3d;
  }
  .one1 span:nth-of-type(1){
    font-size: 24px;
  }

  .demo4,.demo5{
    margin-top: 10px;
    display:inline-block;
    width:32px;
    height:36px;
    margin-left: 6px;
    background: transparent url("../../static/img/jl2.png") no-repeat;
  }
  .demo5{ background-position:-79px 0;}
  .demo4{ background-position:-49px 0;}

 .demo2,.demo3{
    margin-top: 10px;
    display:inline-block;
    width:16px;
    height:16px;
    margin-left: 6px;
    background: transparent url("../../static/img/jl2.png") no-repeat;
  }

  .demo2{ background-position:-20px 0;
    position: absolute;
    top: 24px;
    right: 17px;
    opacity: 0;
  }
  .demo3{ background-position:-37px 0;}
  .one0{
    width: 310px;
    margin: 30px  auto 20px;
    position: relative;
    z-index: 999;
  }
</style>
