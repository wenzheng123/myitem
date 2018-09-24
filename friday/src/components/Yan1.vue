<template>
  <div class="aa">
    <canvas id="ad" width="100" height="34"></canvas>
    <a id="ae" href="#">看不清楚</a>

  </div>
</template>

<script>
    export default {
        name: "Yan1",
      mounted(){


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
        document.getElementById("ae").onclick = function(e){
          e.preventDefault();
          drawPic();
        }

        /**绘制验证码图片**/
        function drawPic(){
          var canvas=document.getElementById("ad");
          var width=canvas.width;
          var height=canvas.height;
          var ctx = canvas.getContext('2d');
          ctx.textBaseline = 'bottom';

          /**绘制背景色**/
          ctx.fillStyle = randomColor(200,240); //颜色若太深可能导致看不清
          ctx.fillRect(0,0,width,height);
          /**绘制文字**/
          var sec = ""
          var str = '0123456789';
          for(var i=0; i<4; i++){
            var txt = str[randomNum(0,str.length)];
            sec  += txt

            ctx.fillStyle = randomColor(50,100);  //随机生成字体颜色
            ctx.font = randomNum(16,25)+'px SimHei'; //随机生成字体大小
            var x = 10+i*25;
            var y = randomNum(30,40);
            var deg = randomNum(-20, 20);
            //修改坐标原点和旋转角度
            ctx.translate(x,y);
            ctx.rotate(deg*Math.PI/180);
            ctx.fillText(txt, 0,0);
            //恢复坐标原点和旋转角度
            ctx.rotate(-deg*Math.PI/180);
            ctx.translate(-x,-y);
          }
          localStorage.yan1 = sec
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

      }
    }
</script>

<style scoped>
#ad{
  margin-left: -10px;
}
</style>
