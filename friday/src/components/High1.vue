<template>
    <div class="box">
      <Tou1></Tou1>
      <Tou2></Tou2>
    <div class="one0">
      <div class="one">
        <span>您的当前位置：</span>
        <span>首页 > </span>
        <span class="tz"> &nbsp;专题</span>
      </div>
      <div class="one1">
      <img src="/static/img/high1.png" alt="">
      <img src="/static/img/high2.png" alt="">
      <img src="/static/img/high3.png" alt="">
      </div>
    </div>
      <End class="end"></End>

    </div>
</template>

<script>
  import Tou1 from "@/components/Tou1"
  import Tou2 from "@/components/Tou2"
  import End from "@/components/End"
    export default {
        name: "High1",
      components:{
        Tou1,
        Tou2,
        End
      }
    }
</script>

<style scoped>
  .end{
    margin-top: 40px;
  }
  .one1 img{
    width: 100%;
    margin-top: 20px;
  }
  .one span:nth-of-type(1){
    margin-left: 20px;
  }
  .one{
    height: 54px;
    background: #f4f4f4;
    line-height: 54px;
    color: #666666;
    margin-top: 20px;
  }
 .one0{
   width: 1280px;
   margin: 0 auto;
 }
</style>
