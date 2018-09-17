<template>
    <div class="con">
      <Tou1></Tou1>
      <Tou2></Tou2>
      <Jflb :slName="name"></Jflb>
      <ul class="conNav">
        <li class="conNav1" v-for="item in data">
          <div class="jl"></div>
          <div class="nav0">
            <p>{{item.p1}}</p>
            <p>{{item.p2}}</p>
          </div>
          <div class="nav1">
            <img :src="item.url" alt="">
          </div>
        </li>
      </ul>
      <ul class="conNav2">
        <li>
          <img class="img" src="../../static/img/shouye/zhong.png" alt="">
          <img class="img" src="../../static/img/shouye/zi.png" alt="">
          <img class="img" src="../../static/img/shouye/yu.png" alt="">
        </li>
        <li>
          <img class="img" src="../../static/img/shouye/kaishi.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
          <span>5天</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>15</span>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
          <span>35</span>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
          <span>20</span>
          <a href="###">更多></a>
        </li>
      </ul>
      <Shouyelb></Shouyelb>
    </div>
</template>

<script>
    import Jflb from "./Jflb";
    import Tou1 from "./Tou1";
    import Tou2 from "./Tou2";
    import Shouyelb from "./Shouyelb";
    export default {
        name: "shouye",
      components:{
        Shouyelb,
        Tou2,
        Tou1,
        Jflb
      },
      data(){
          return {
            data:[
              {url:'../../static/img/shouye/yangrou.png',p1:'内蒙古草原',p2:'羔羊羊精肉'},
              {url:'../../static/img/shouye/ningmeng.png',p1:'新西兰柠檬',p2:'鲜橙靓皮 柠香清新'},
              {url:'../../static/img/shouye/yangrou1.png',p1:'内蒙古草原',p2:'羔羊羊精肉'},
              {url:'../../static/img/shouye/caomei.png',p1:'新鲜草莓',p2:'留住新鲜'},
            ],
            name:[
              {name:'../../static/img/shouye/sylb.png',p1:'',p2:''},
              {name:'../../static/img/shouye/sylb.png',p1:'',p2:''},
              {name:'../../static/img/shouye/sylb.png',p1:'',p2:''},
              {name:'../../static/img/shouye/sylb.png',p1:'',p2:''},
              {name:'../../static/img/shouye/sylb.png',p1:'',p2:''},
            ]
          }
      },
      mounted(){
          $('.conNav1:first').css( 'margin-left',0)
      $('.jl:odd').css('background-position','0 -50px')
      }
    }
</script>

<style scoped>
  .conNav{
    width: 1280px;
    margin: 20px auto 0;
    position: relative;
    overflow: hidden;
  }
  .conNav1{
    width: 305px;
    height: 140px;
    float: left;
    margin-left: 20px;
    position: relative;
    background-color: rgb(242, 242, 242);
  }
  .jl{
    width: 53px;
    height: 49px;
    background: url("../../static/img/shouye/syjl.png");
    position: absolute;

  }
  .nav0{
    height: 70px;
    font-size: 20px;
    color: rgb(51, 51, 51);
    line-height: 1.8;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 30px;
    margin: auto 0;
  }
  .nav1>img{
    width: 150px;
    vertical-align: middle;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto 0;
  }
  .conNav2{
    width: 1220px;
    height: 100px;
    padding: 0 30px;
    text-align: center;
    line-height: 100px;
    margin: 20px auto 0;
    border-bottom: 1px solid rgb(73, 142, 61);
  background-color: #ebffe8;
  }
  .img{
    vertical-align: middle;
  }
  .conNav2>li:nth-of-type(1){
    float: left;
  }
  .conNav2>li:nth-of-type(1) img{
    margin-right: 20px;
  }
  .conNav2>li:nth-of-type(2){
    float: right;
    color: rgb(240, 130, 0);
    font-size: 20px;
  }

  .conNav2>li:nth-of-type(2)>span{
    width: 60px;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    color: rgb(255, 255, 255);
    background-color: rgb(240, 130, 0);
    border-radius: 5px;
  }
  .conNav2>li:nth-of-type(2)>a{
    font-size: 18px;
    margin-left: 20px;
    color: rgb(102, 102, 102);
  }

</style>
