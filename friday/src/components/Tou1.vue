<template>
  <div class="box">
     <div class="top">
       <div class="top0">
      <div class="left">所在城市: <span>北京朝阳区</span></div>
       <div class="right">
         <div class="right_1">
         <p v-for="item in arr">{{item}}<span>|</span></p></div>
         <div class="right_2">
           <img src="static/img/电话.png" alt="">
           <span>400-800-8820</span>
         </div>
       </div>
       </div>
     </div>
  </div>
</template>

<script>
  import Vue from "vue"
    export default {
        name: "Tou1",
         data(){
          return{
            aa:"登录",
            arr:[
              "我的订单",
              "我的消息",
              "我的商家",
            ],

          }
         },
      mounted(){
          this.arr.unshift(this.aa)
      }
    }
</script>

<style scoped>
  .right_2{
    float: right;
    margin: -35px 0;
  }
  .right_1 p span{
    margin-left: 14px;
  }
  .right_1 p{
    margin-left:14px;
  }
  .right_1{
    margin: 0 150px;
    color: #666666;
    display: flex;
    justify-content: space-around;
  }
  .right{
    float: right;

  }
  .left{
    float: left;
  }
  .top0{
    width: 1280px;
    height: 36px;
    margin: 0 auto;
   line-height: 36px;
  }
.top{
  width: 100%;
  background: #eeeeee;
}
</style>
