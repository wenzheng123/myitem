<template>
  <div class="box">
    <Tou1></Tou1>
    <div class="top">
      <div class="one">
        <img src="../../static/img/end1.png" alt="">
        <p>找回密码</p>
      </div>
    </div>
    <div class="two">
      <img src="../../static/img/new.png" alt="">
    </div>
    <End class="two1"></End>
  </div>
</template>

<script>
  import Tou1 from "@/components/Tou1"
  import End from "@/components/End"
    export default {
        name: "New",
      components:{
          Tou1,
        End
      }
    }
</script>

<style scoped>
 .two1{
   margin-top: -5px;
 }
  .two img{
    width: 100%;
  }
  .two{
    width: 100%;
    height: 40%;
    margin: 0 auto;

  }
  .one p{
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
  .one img{
    margin-top: 25px;
  }
  .one{
    position: relative;
    width: 1280px;
    height: 132px;
    margin: 0 auto;
  }
</style>
