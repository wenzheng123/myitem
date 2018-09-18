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
         <div>
           <img src="../../static/img/tou1.png" alt="">
           个人中心
         </div>
         <div :id="inputName" @click="goshop">
           <img  src="../../static/img/购物车.png" alt="">
           购物车<span class="show"></span>
         </div>
       </div>
       <ul class="top4">
         <li class="bol" v-for="item in arr2" @click="item.z3"><router-link :to="item.z2" >{{item.z1}}</router-link> </li>
         <img src="" alt="">
       </ul>
       <router-view class="allClassify"></router-view>


     </div>

   </div>
</template>

<script>
    export default {
        name: "Tou2",
      props:{
        inputName: String,
        inputNum: Number,
        required: true,
      },
      data(){
          return{
            arr2:[
              {z1:"全部分类",z2:"/allclassify",z3:this.bol},
              {z1:"首页",z2:"/shouye",z3:this.bol1},
              {z1:"同城",z2:"###",z3:this.bol1},
              {z1:"礼拜五",z2:"###",z3:this.bol1},
              {z1:"积分商城",z2:"/Jifen",z3:this.bol1},
              {z1:"导航+",z2:"###",z3:this.bol1},
            ],
            index:0
          }
      },
      watch:{
        inputNum(newVal,oldVal){
          console.log(newVal,oldVal)
          $('.show').html('(' + newVal + ')')
          $('.show').css('color','red')
          if(newVal>=100){
            $('#end img').css('margin',0)
          }
        }
      },
      mounted(){
        $(".allClassify").css("display","none")
      },
      methods:{
          goshop(){
            this.$router.push({path:'/cart'})
          },
          bol(){
            this.index++
            if(this.index % 2 ==0){
              $(".allClassify").css("display","none")
            }else{
              $(".allClassify").css("display","block")
            }

            console.log(111)
          },
          bol1(){
          }

      }
    }
</script>

<style scoped>
.show{
  float: right;
}
  /*中间*/
  .top4 .allClassify{
    position: absolute;
    left: 0;
    top: 50px;
    z-index: 99999999;
  }
  .top4{
    width: 1020px;
    height: 50px;
    display: flex;
    align-items: center;
    margin-top: 35px;
    overflow: hidden;
  }
  .top4 li{
    flex: 1;
    font-size: 20px;
    text-align: center;
    border-right: 1px #e8e8e8 solid;
    position: relative;
    left: 1px;
  }
  .top4 li a{
    color: #696969;
  }
  .top3{
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 50px;
  }

  .top3 div{
    border:2px solid #e5e5e5;
    margin-left: 15px;
    float: left;
    width: 127px;
    height: 40px;
    line-height: 40px;
    background: #f8f8f6;
    color: #666666;
  }
.top3 div img{
  vertical-align: middle;
  margin: 0 8px;
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
  .top2_1{
    position: relative;
  }
  input{
    font-size: 17px;
    width: 435px;
    height: 36px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 2px;
    margin: auto;
    padding: 0 10px;
  }
  .top2_1 img{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 10px;
    margin: auto;
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
  border-bottom: solid #e8e8e8 1px;
}
</style>
