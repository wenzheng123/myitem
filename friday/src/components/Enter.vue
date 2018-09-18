<template>
 <div class="box">
   <div class="top"></div>
   <div class="content">
    <div class="one0">
     <div class="one1">
       <span>登录</span><span>账号密码登录<span class="demo1"></span></span>
       <input type="text" placeholder="请输入手机号" v-model="me">
       <span class="demo2"></span>
        <p class="me1"><span class="demo3"></span> 手机号码不正确，请重新输入</p>
       <input type="text" placeholder="验证码">
       <canvas id="canvas" width="79" height="34"></canvas>
       <a href="#" id="changeImg">换一张</a>
       <div class="two">
       <input type="text" v-model="me2" placeholder="手机验证码">
       <p @click="huoQu">获取验证码</p>
       <input type="checkbox" style="width: 14px;height: 14px"  ><strong>自动登录</strong>
       <p>忘记密码?</p>
       </div>
     </div>
      <div class="one2">
        <p>登录</p>
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
   </div>
 </div>
</template>

<script>
    export default {
        name: "Enter",
      data(){
          return{
          me:"",
            me2:"",
            index:1
          }
      },
      mounted(){
      this.yan();

      },
      methods:{
          yan(){
            /**生成一个随机数**/
            function randomNum(min,max){
              return Math.floor( Math.random()*(max-min)+min);
            }
            /**生成一个随机色**/
            function randomColor(min,max){
              var r = randomNum(min,max);
              var g = randomNum(min,max);
              var b = randomNum(min,max);
              return "rgb("+r+","+g+","+b+")";
            }
            drawPic();
            document.getElementById("changeImg").onclick = function(e){
              e.preventDefault();
              drawPic();
            }

            /**绘制验证码图片**/
            function drawPic(){
              var canvas=document.getElementById("canvas");
              var width=canvas.width;
              var height=canvas.height;
              var ctx = canvas.getContext('2d');
              ctx.textBaseline = 'bottom';

              /**绘制背景色**/
              ctx.fillStyle = randomColor(180,240); //颜色若太深可能导致看不清
              ctx.fillRect(0,0,width,height);
              /**绘制文字**/
              var str = 'ABCEFGHJKLMNPQRSTWXY123456789';
              for(var i=0; i<4; i++){
                var txt = str[randomNum(0,str.length)];
                ctx.fillStyle = randomColor(50,160);  //随机生成字体颜色
                ctx.font = randomNum(15,40)+'px SimHei'; //随机生成字体大小
                var x = 10+i*25;
                var y = randomNum(25,45);
                var deg = randomNum(-45, 45);
                //修改坐标原点和旋转角度
                ctx.translate(x,y);
                ctx.rotate(deg*Math.PI/180);
                ctx.fillText(txt, 0,0);
                //恢复坐标原点和旋转角度
                ctx.rotate(-deg*Math.PI/180);
                ctx.translate(-x,-y);
              }
              /**绘制干扰线**/
              for(var i=0; i<8; i++){
                ctx.strokeStyle = randomColor(40,180);
                ctx.beginPath();
                ctx.moveTo( randomNum(0,width), randomNum(0,height) );
                ctx.lineTo( randomNum(0,width), randomNum(0,height) );
                ctx.stroke();
              }
              /**绘制干扰点**/
              for(var i=0; i<100; i++){
                ctx.fillStyle = randomColor(0,255);
                ctx.beginPath();
                ctx.arc(randomNum(0,width),randomNum(0,height), 1, 0, 2*Math.PI);
                ctx.fill();
              }
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
    margin: 20px 8px;
  }
 .two p:nth-of-type(2){
   position: absolute;
   right: 8px;
   top: 68px;
   color: #f00;
 }
  .two p:nth-of-type(1){
    color: #ffffff;
    width: 100px;
    height: 30px;
    background: #498e3d;
    text-align: center;
    line-height: 30px;
    position: absolute;
    right: 8px;
    top: 28px;
  }
  .two{
    line-height: 40px;
    position: relative;
    margin-bottom: 15px;
  }

  #canvas{
    margin: 6px 10px 0 20px;
  }
  #changeImg{
    font-size: 10px;
  }

  .one1 input:nth-of-type(2){
    padding: 0 10px;
    width:115px;
    height: 44px;
    border:2px solid #ccc;
    margin-top: 15px;
  }
  .one1 input:nth-of-type(1){
    padding: 0 10px;
    margin-top: 20px;
    width:286px;
    height: 44px;
    border:2px solid #ccc;
  }
  .one1 span:nth-of-type(2){
    font-size: 16px;
    margin-left: 130px;
    color: #498e3d;
  }
  .one1 span:nth-of-type(1){
    font-size: 24px;
  }
  .demo1{ background-position:0 0;}
  .demo2{ background-position:-20px 0;
    position: absolute;
    top: 58px;
    right: 17px;
    opacity: 0;
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
  .demo3{ background-position:-37px 0;}
  .demo1,.demo2,.demo3{
    margin-top: 10px;
    display:inline-block;
    width:16px;
    height:16px;
    margin-left: 6px;
    background: transparent url("../../static/img/jl2.png") no-repeat;
  }
  /*图灵*/
  .one0{
    width: 310px;
    margin: 30px  auto 20px;
    position: relative;
  }
  .content  {
    position: absolute;
    top: 185px;
    left: 760px;
    width:397px;
    height: 510px;
    background: #ffffff;
    border: solid #ccc;
    overflow: hidden;
  }
 .top{
   width: 100%;
   height: 100%;
   background: rgba(0,0,0,0.6);
   /*background: #000000;*/
 }
  .box{
    width: 100%;
    height: 100%;
  }
</style>
