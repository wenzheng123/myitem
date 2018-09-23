<template>
  <li v-for="sg in shuiguo">
    <img class="navImg" :src="sg.src" alt="">
    <p class="conP">{{sg.name}}</p>
    <p class="conP1">{{sg.intro}}</p>
    <div class="conD">
      <span>¥{{sg.zhekou}}</span>
      <span>¥{{sg.price}}</span>
      <img @click="add()" src="../../static/img/bus.png" alt="">
    </div>
  </li>
</template>

<script>
    export default {
        name: "MMM",
      mounted(){
        $('.con3:last').css('margin-bottom','40px')
      }
    }
</script>

<style scoped>
  .con3 li{
    width: 305px;
    height: 432px;
    padding: 0 20px;
    margin-left: 20px;
    text-align: center;
    float: left;
    border: 1px solid #ececec;
  }
  .con3 li:nth-of-type(1){
    margin-left: 0;
  }
  .con3 p{
    text-align: left;
  }
  .navImg{
    width: 208px;
    height: 200px;
    margin-top: 20px;
    margin-bottom: 50px;
  }
  .conP{
    font-size: 18px;
    color: rgb(51, 51, 51);
    line-height: 1.667;
  }
  .conP1{
    font-size: 14px;
    color: #a3a3a3;
  }
  .conD{
    font-size: 24px;
    line-height: 1.25;
    text-align: left;

  }
  .conD>span:nth-of-type(1){
    color: rgb(255, 87, 87);
  }
  .conD>span:nth-of-type(2){
    margin-left: 15px;
    text-decoration: line-through;
    font-size: 14px;
    color: #a3a3a3;
  }
  .conD img{
    float: right;
  }
</style>
