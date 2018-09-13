<template>
   <div class="box">
     <div class="top1">
       <img src="../../static/img/end1.png" class="m2" alt="">
       <div class="top2">
         <div class="top2_1">
           <input type="text" placeholder="请输入关键字进行搜索">
           <img src="static/img/搜索.png" alt="">
         </div>
         <p>热门：   奇异果       牛排       山竹       牛油果</p>
       </div>
       <div class="top3">
         <p>
           <img src="static/img/tou1.png" alt="">
           个人中心
         </p>
         <p>
           <img src="static/img/购物车.png" alt="">
           购物车
         </p>
       </div>
       <ul class="top4" v-for="item in arr2">

         <li>{{item.z1}}<span>{{item.z2}}</span>  </li>

       </ul>
     </div>
   </div>
</template>

<script>
    export default {
        name: "Tou2",
      data(){
          return{
            arr2:[
              {z1:"全部分类",z2:"|"},
              {z1:"首页",z2:"|"},
              {z1:"同城",z2:"|"},
              {z1:"礼拜五",z2:"|"},
              {z1:"积分商城",z2:"|"},
              {z1:"导航+"},
            ]
          }
      }
    }
</script>

<style scoped>
  .top4{
    margin: 40px ;
  }
  .top4 li span{
    margin-left:60px;
    color: #e8e8e8;
  }
  .top4 li{
    float: left;
    margin-right: 60px;
    font-size: 20px;
    color: #696969;
  }
  .top3{
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 50px;
  }
  .top3 p img{
    margin-top: 10px;
  }
  .top3 p{

    border:2px solid #e5e5e5;
    margin-left: 20px;
    float: left;
    width: 127px;
    height: 40px;
    background: #f8f8f6;
    color: #666666;
    text-align: center;
  }
  .top2 p{
    margin-top: 2px;
    color: #666666;
  }
  .top2{
    position: absolute;
    left: 474px;
    top: 50px;
  }
  input{
    font-size: 17px;
    margin: 2px;
    width: 455px;
    height: 32px;
  }
  .top2_1 img{
    margin-bottom: -3px;
  }
  .top2_1{
    width: 498px;
    height: 40px;
    background: #4b943d;
  }
  .m2{
    margin-top: 25px;
  }
  .top1 {
    margin: 0 auto;
    width: 1280px;
    height: 180px;
    position: relative;
  }
.box {
  border-bottom: solid #ccc;
}
</style>
