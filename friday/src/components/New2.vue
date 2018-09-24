<template>
  <div class="box">
    <div class="five">
      <div class="one1">

        <input type="text" placeholder="请输入手机号" v-model="me">
        <span class="demo2"></span>
        <p class="me1"><span class="demo3"></span> 手机号码不正确，请重新输入</p>
        <input type="password" placeholder="请输入密码（6-20位号码字符）" v-model="me3">
        <input type="password" placeholder="请再次输入密码确认" v-model="me4">
        <input type="text" placeholder="验证码" v-model="me5">
        <div class="two4_1">
          <div class="two4">
            <Yan2></Yan2>
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
        <p @click="enter">注册</p>
        <p @click = "ent">登录</p>
      </div>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Yan2 from "@/components/Yan2"
  import index from "../router";
  export default {
    name: "New2",
    components:{
      Yan2
    },
    data(){
      return{
        me:"",
        me2:"",
        me3:"",
        me4:"",
        me5:"",
        index:1
      }
    },

    methods:{
      // 登录
      ent(){
        this.me=""
        $(".one0").css({
          display:'block',
          zIndex:1
        })
        $(".five").css("display","none")
      },

      enter() {
        if (this.me && /^[1][3,4,5,7,8][0-9]{9}$/.test(this.me)) {
               console.log("手机号正确")
        }else {
          alert("手机号错误");
          this.me = "";
          this.me3 = "";
          this.me4 = "";
          this.me2 = "";
          this.me5 = ""
        }
      if(this.me3 == "" && this.me4 == "") {
        alert("密码不能为空")
      }else if (this.me5 != localStorage.yan2){
        alert("验证码错误")
      }else if(this.me2 == ""){
          alert("手机验证码错误")
      }else
        if(this.me4 == this.me3){
        axios.get('/api/PHP/two.php', {
          params: {
            type: 3,
            name: this.me,
            password: this.me3,

          }
        }).then((response) => {
          console.log(response.data, 1);
          if (response.data == 0) {
            alert("注册成功")
            // 登录
            $(".one0").css({
              display:'block',
              zIndex:1
            })
            $(".five").css("display","none")

            this.me = "";
            this.me3 = "";
            this.me4 = "";
            this.me2 = "";
            this.me5 = ""
          } else {
            alert("该账户已存在")
          }
        })
      }else{
        alert("密码不一致,请重新输入")
      }
        },




      chong(){
        $(".five").css("display","none")
        $(".reset").css("display","block")
      },
      new1(){
        $(".five").css("display","none")
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
  .five{
    width: 310px;
    margin: 30px  auto 20px;
    position: relative;
    z-index: 999;
  }
  .box{
    width: 390px;
    height: 500px;
    background: #ffffff;
  }
</style>
