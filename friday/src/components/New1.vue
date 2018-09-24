<template>
  <div class="box">
<div class="content">
  <div class="one">
    <div class="one1">
      <span>登录</span><span>手机验证登录 <img src="../../static/img/new2.png" alt=""></span>
      <input type="text" placeholder="请输入手机号" v-model="me">
      <span class="demo2"></span>
      <p class="me1"><span class="demo3"></span> 手机号码不正确，请重新输入</p>
      <input type="password" placeholder="密码" v-model="me3">
      <input type="text" placeholder="验证码" v-model="me4">
      <div class="two4_1">
        <div class="two4">
          <Yan></Yan>
        </div>
      </div>
      <div class="two">
        <input type="checkbox" style="width: 14px;height: 14px" class = "aa"><strong>自动登录</strong>
        <p  @click="chong"> <u> 忘记密码?</u></p>
      </div>
    </div>
    <div class="one2">
      <p @click="enter">登录</p>
      <p>会员注册</p><br>
      <span>提示：未注册用户将直接成为礼拜五用户</span>
    </div>
    <div class="one3">
      <div class="one3_1"></div>
      <p>用合作网站登录</p>

      <div class="one4">
        <span class="demo4"></span><span class="demo5"></span>
      </div>
    </div>
  </div>


</div>
  </div>
</template>

<script>

import axios from 'axios'
  import Yan from "@/components/Yan"
  import index from "../router";

    export default {
        name: "New1",
      components:{
          Yan,

      },
      data(){
        return{
          me:"",
          me2:"",
          me3:"",
          me4:'',
          index:1,
          arr:[]
        }
      },

      methods:{

        enter(){
          if (this.me4 != localStorage.yan){
              alert("验证码错误")
            this.me4 = ""
          }else
          // 正则手机号判断
          if(this.me && /^[1][3,4,5,7,8][0-9]{9}$/.test(this.me)){
            // 数据库的调用
            axios.get('/api/PHP/two.php',{params:{
                type:4,
                name:this.me,
                password:this.me3,
              }}).then((aa)=>{
              console.log(aa.data);
              if(aa.data == 0){
                alert("账户未注册,请前往注册")
              }if(aa.data[0].password == this.me3){
                alert("登录成功")
                this.$router.push({
                  path:"/shopping"
                })
              }else{
                alert("密码错误")
              }
            })

          } else{
            alert("手机号错误")
            this.me = "";
            this.me3 = "";
            this.me4= ""
          }




        },

        chong(){
          console.log(2222)
          if(this.me == ""){
           alert("请输入手机号")
            console.log(33333)
          }else{
            console.log(55555)
            $(".one").css("display","none")
            $(".reset").css("display","block")
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

  .one1 input:nth-of-type(4){
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
  .one1 input:nth-of-type(3){
    padding: 0 10px;
    width:115px;
    height: 44px;
    border:2px solid #ccc;
    margin-top:9px;
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
    top: 58px;
    right: 17px;
    opacity: 0;
  }
  .demo3{ background-position:-37px 0;}
  .one{
    width: 310px;
    margin: 30px  auto 20px;
    position: relative;
z-index: 999;
  }
</style>
