<template>
  <div class="box">
    <Tou1 :inputName = "name"></Tou1>
    <div class="four1">
      <div class="four">
        <img src="../../static/img/end1.png" alt="">
        <p>会员登录</p>
      </div>
    </div>
    <div class="three">
      <div class="content">
      <div class="one0">
        <div class="one1">
          <span>登录</span><span @click="new1">账号密码登录<span class="demo1"></span>
        </span>
          <input type="text" placeholder="请输入手机号" v-model="me">
          <span class="demo2"></span>
          <p class="me1"><span class="demo3"></span> 手机号码不正确，请重新输入</p>

          <input type="text" v-model="me6" placeholder="验证码">
          <div class="two4_1">
          <div class="two4">
         <Yan1></Yan1>
          </div>

          </div>
          <div class="two">
            <input type="text" v-model="me2" placeholder="手机验证码">
            <p @click="huoQu" >获取验证码</p>
            <input type="checkbox" style="width: 14px;height: 14px"  ><strong>自动登录</strong>
            <p  @click="chong"> <u> 忘记密码?</u></p>
            </div>
        </div>
        <div class="one2">
          <p @click = "enter">登录</p>
          <p>会员登录</p><br>
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
        <div class="reset">
            <div class="one1">
              <span>重置密码</span>
              <input type="text" placeholder="请输入手机号" v-model="me">
              <span class="demo2"></span>
              <p class="me1"><span class="demo3"></span> 手机号码不正确，请重新输入</p>

              <input type="text" placeholder="验证码">
              <div class="two4_1">
                <div class="two4">
                  <Yan></Yan>
                </div>
              </div>
              <input class="input5" type="password" placeholder="请输入密码（6-20位号码字符）" v-model="me3"> <input class="input5" type="password" placeholder="请再次输入密码" v-model="me4">



              <div class="two8">
                <input type="text" v-model="me2" placeholder="手机验证码">
                <p @click="huoQu">获取验证码</p>
              </div>
            </div>
            <div class="one8">
              <p @click="new2" >提交</p>

            </div>
          </div>
        <New1 class="new1"></New1>
        <New2 class="new2"></New2>
        </div>

      </div>
    <End class="end"></End>
    </div>
</template>

<script>
  import axios from 'axios'
  import End from "@/components/End"
  import  Yan from "@/components/Yan"
  import  Yan1 from "@/components/Yan1"
  import  Tou1 from "@/components/Tou1"
  import  New1 from "@/components/New1"
  import  New2 from "@/components/New2"

    export default {
        name: "New",
      components:{
          Tou1,
        Yan,
        Yan1,
        New1,
        New2,
        End
      },
      data(){
        return{
          me:"",
          me2:"",
          me3:"",
          me4:"",
          me6:"",
          index:1,
           name:""
        }
      },

      methods:{
        enter(){
          // 正则手机号判断
          if(this.me && /^1[3|4|5|8]\d{9}$/.test(this.me)){
            // 数据库的调用
            axios.get('/api/PHP/two.php',{params:{
                type:2,
                name:this.me,
              }}).then((aa)=>{
              console.log(aa.data);
              if(aa.data == 0){
                alert("账户未注册,请前往注册");
                $(".reset").css("display","none");
                $(".new2").css("display","block")
                console.log(123)
                this.me = ""
                this.me2 = ""
                this.me6 = ""
              }else{
                alert("登录成功")
                this.name = this.me
                $(".name,.name1").css("display","block")

                this.$router.push({
                  path:"/shopping"
                })
              }
            })

          } else{
            alert("手机号错误")
            this.me = "";
            this.me2 = ""
            this.me6 = ""
          }
        },

        new1(){
          $(".new1").css("display","block")
          $(".one0").css("display","none")
          console.log(111)
        },
        new2(){

            $(".reset").css("display","none")
            $(".one0").css("display","block")
            console.log(2222)
        },
          chong(){
            if(this.me == ""){
              alert("请输入手机号")
            }else {

              $(".one0").css("display", "none")
              $(".reset").css("display", "block")
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

/*第一个登录页面*/
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
  .one8 p{
    margin-top: 20px;
    width: 307px;
    height: 45px;
    background: #f08200;
    border-radius: 10px;
    text-align: center;
    color: #ffffff;
    line-height: 45px;
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
  .two p:nth-of-type(2),.two8 p:nth-of-type(2){
    position: absolute;
    right: 8px;
    top: 68px;
    color: #f00;

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
    top: 26px;
  }
  .two strong{
    position: absolute;
    bottom: -4px;
  }
  .two8{
    margin-top:-20px ;
  }
  .two,.two8{
    line-height: 40px;
    position: relative;
    margin-bottom: 15px;
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
  .one1 input:nth-of-type(2){
    padding: 0 10px;
    width:115px;
    height: 44px;
    border:2px solid #ccc;
    margin-top:9px;
  }
.input5{
  padding: 0 10px;
  margin-top: 25px;
  width:310px;
  height: 44px;
  border:2px solid #ccc;
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

  .demo1,.demo2,.demo3{
    margin-top: 10px;
    display:inline-block;
    width:16px;
    height:16px;
    margin-left: 6px;
    background: transparent url("../../static/img/jl2.png") no-repeat;
  }
  .demo1{ background-position:0 0;}
  .demo2{ background-position:-20px 0;
    position: absolute;
    top: 58px;
    right: 17px;
    opacity: 0;
  }
  .demo3{ background-position:-37px 0;}
  /*图灵*/
.reset{
  width: 310px;
  margin: 30px  auto 20px;
  position: relative;
  display: none;
  z-index: 22;
}
  .one0{
    width: 310px;
    margin: 30px  auto 20px;
    position: relative;

  }
  .new2{
    position: absolute;
    left: 0px;
    top: 0;
    display: none;
  }
  .new1{
    position: absolute;
    right: 40px;
    top: 0;
    display: none;
  }
  .content  {
    width:397px;
    height: 500px;
    background: #ffffff;
    position: relative;
    border-top:1px  solid #ccc;
    border-bottom:1px  solid #ccc;
    float: right;
    margin-right: 320px;

  }



  /*大图*/
  .three{
    width: 1920px;
    height: 500px;
    margin: 40px auto;
    background: url("../../static/img/new.png") ;
    overflow: hidden;

    z-index: 3333;
  }
  /*第二个*/
  .four p{
    width: 160px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border-left: 1px solid #ccc;
    font-weight: 200;
    position: absolute;
    left: 430px;
    top: 60px;
    font-size: 20px;
  }
  .four img{
    margin-top: 25px;
  }
  .four{
    position: relative;
    width: 1280px;
    height: 132px;
    margin: 0 auto;
  }
  .four1{
    width: 100%;
    border-bottom:1px solid #ccc;
  }
</style>
