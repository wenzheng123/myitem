<template>
<div class="content">
  <Tou1></Tou1>
  <Tou2></Tou2>
<Jflb :inputName="name"></Jflb>
  <div class="content0" v-for="i in 3">
    <ul v-for="item in src">
      <li class="content1">
        <img :src="item.src" alt="">
      </li>
      <li class="content2">{{item.name}}</li>
      <li class="content3">
        {{item.introduce}}
      </li>
      <li class="content4">
        <div>积分 : <span> {{item.integral}}</span></div>
        <div>价值 : ¥ {{item.price}}</div>
      </li>
      <li class="content5">立即兑换</li>
    </ul>
  </div>
  <End></End>
</div>
</template>

<script>
import Jflb from '@/components/Jflb'
import End from "./End";
import Tou1 from "./Tou1";
import Tou2 from "./Tou2";
    export default {
        name: "Jifen",
      components:{
        Tou2,
        Tou1,
        End,
        Jflb
      },
      data(){
          return {
            src:[],
            name:[
              {name:'../../static/img/jifensc/jifensc.png',p1:'积分商城',p2:' 小  |  积  |  分  |  兑  |  超  |  值 '},
              {name:'../../static/img/jifensc/jifensc.png',p1:'积分商城',p2:' 小  |  积  |  分  |  兑  |  超  |  值 '},
              {name:'../../static/img/jifensc/jifensc.png',p1:'积分商城',p2:' 小  |  积  |  分  |  兑  |  超  |  值 '}
              ]
          }
      },
      created(){
        this.axios.get("/api/PHP/123/myaladdin.php").then(res=>{
          //这里是ES6的写法，get请求的地址，是小编自己在网站上存放的php文件，后面将介绍其编写，也可以自己定义
             this.src=res.data;//获取数据
             console.log(this.src)
        })
      },
      mounted(){

      },
    }
</script>
<style scoped>
.content0{
  width: 1280px;
  height: 100%;
  margin: auto;
  overflow: hidden;
  position: relative;
}
.content0>ul{
  width: 295px;
  height: 480px;
  position: relative;
  margin: 20px 0 0 20px;
  font-family: "MicrosoftYaHei";
  font-size: 18px;
  text-align: center;
  border: 1px solid #ececec;
  float: left;
}
  .content1{
    height: 300px;
    line-height: 300px;
  }
.content1>img{
  width: 261px;
  vertical-align: middle;
}
.content2{
  line-height: 40px;
}
.content3{
  line-height: 30px;
  font-size: 14px;
  color: #7a7a7a;
}
.content4{
  overflow: hidden;
  line-height: 40px;
}
.content4>div{
  width: 50%;
  float: left;
  text-align: center;
}
.content4>div:nth-of-type(2){
  margin-left: -20px;
}
.content4>div>span{
  color: #ff5757;
}
.content5{
  background-color: rgb(240, 130, 0);
  width: 150px;
  color: rgb(255, 255, 255);
  line-height: 36px;
  border-radius: 36px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 15px auto;
}
.content0>ul:hover {
  -webkit-transform: translateY(-5px);
  -moz-transform: translateY(-5px);
  -ms-transform: translateY(-5px);
  transform: translateY(-5px);
}
.content0>ul{
  -webkit-transition: -webkit-transform .3s;
  transition: -webkit-transform .3s;
  -moz-transition: transform .3s,-moz-transform .3s;
  transition: transform .3s;
  transition: transform .3s,-webkit-transform .3s,-moz-transform .3s;
}
</style>
