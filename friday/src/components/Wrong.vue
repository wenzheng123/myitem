<template>
  <div class="wrong">
    <img src="static/img/404/404.png" alt="">
    <p><span class="previous" @click="pre">返回上一页面</span><span class="homePage" ><router-link to="###">返回网站首页</router-link></span></p>
  </div>

</template>

<script>
    export default {
        name: "Wrong",
      methods:{
          pre(){
            window.history.go(-1);
          }
      }

    }
</script>

<style scoped>
  .wrong{
    width: 1280px;
    position: relative;
    text-align: center;
    margin: auto;
  }
  .wrong img{
    margin-top: 200px;
  }
  .wrong p{
    width: 440px;
    overflow: hidden;
    margin: 100px auto;
  }
  .wrong span{
    display: inline-block;
    cursor: pointer;
    color: #fff;
    font-size: 20px;
    line-height: 45px;
    width: 170px;
    border-radius: 5px;
  }
  .wrong .previous{
    background-color: #f08200;
    float: left;
  }
  .wrong .homePage{
    background-color: #498e3d;
    float: right;
  }
  .wrong a{
    display: block;
    color: #fff;
    width: 100%;
    height: 100%;
    text-decoration: none;
  }
</style>
