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
         <div id="end" @click="goshop">
           <div class="show" v-if="inputNum">{{inputNum}}</div>
           <img  src="../../static/img/购物车.png" alt="">
           购物车
         </div>
       </div>
       <ul class="top4">
         <li class="bol" v-for="item in arr2" @click="item.z3"><router-link :to="item.z2" >{{item.z1}}</router-link> </li>
         <!--<img src="" alt="">-->
       </ul>
       <all-classify class="zz"></all-classify>
     </div>
   </div>
</template>

<script>

    import AllClassify from "./AllClassify";
    export default {
        name: "Tou2",
      components: {AllClassify},
      props:{
        inputNum:Number,
        end:String,
        required: true,
        },
        data(){
          return{
            arr2:[
              {z1:"全部分类",z2:"###",z3:this.bol},
              {z1:"首页",z2:"/shouye",z3:this.bol1},
              {z1:"同城",z2:"/TongC",z3:this.bol1},
              {z1:"礼拜五",z2:"/high",z3:this.bol1},
              {z1:"积分商城",z2:"/Jifen",z3:this.bol1},
              {z1:"导航+",z2:"/Map",z3:this.bol1},
            ],
            index:0,
          }
        },
        watch:{
        inputNum(newVal,oldVal){
          console.log(newVal,oldVal)
          $('.show').html(newVal)

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
          },
          bol1(){
          }

      },
    }
</script>

<style scoped>
.zz{
  margin-top: -8px;
}
.top3 .show {
  width: 50px;
  height: 40px;
  color: #ffffff;
  text-align: center  ;
 background: url("../../static/img/shouye/beijingse.png") no-repeat left top/100% 100%;
  border: 0px solid;
  position: absolute;
  top: -35px;
}
.input1 {
  display: none;

}
  /*中间*/
  .top4 .allClassify{
    position: absolute;
    left: 0;
    top: 50px;
    z-index: 999;
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
    position: absolute;
    right: 0;
    top: 50px;
  }
  .top3 div{
    line-height: 40px;

    border:2px solid #e5e5e5;
    margin-left: 20px;
    position: relative;
    float: left;
    width: 127px;
    height: 40px;
    background: #f8f8f6;
    color: #666666;
  }
.top3 div img{
  margin: 0 10px;
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
  width: 100%;
  border-bottom: solid #e8e8e8 1px;
  background-color: #fff;
  position: fixed;
  top: 46px;
  z-index: 999;
}
.box a{
  text-decoration: none;
}
</style>
