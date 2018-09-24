<template>
    <div class="con">
      <Tou1 ></Tou1>
      <Tou2 :inputNum="num1"></Tou2>
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
          <span>{{time[0]}}天</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>{{time[1]}}</span>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
          <span>{{time[2]}}</span>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
          <span>{{time[3]}}</span>
          <a href="###">更多></a>
        </li>
      </ul>
      <Shouyelb></Shouyelb>
      <div v-for="(item,index) in shop">
      <ul class="conNav3" >
        <li>
          <img class="img" src="../../static/img/shouye/zhong.png" alt="">
          <span class="navSpan1">{{item.type}}</span>
          <span class="navSpan2">采集新疆优质水果生产基地,品质一流</span>
        </li>
        <li>更多></li>
      </ul>
      <ul class="con3">
        <li v-for="(item1,index1) in item.list" >
          <img class="navImg" :src="item1.src" alt="">
          <p class="conP">{{item1.name}}</p>
          <p class="conP1">{{item1.intro}}</p>
          <div class="conD">
            <span>¥{{item1.zhekou}}</span>
            <span>¥{{item1.price}}</span>
            <img @click="add();addCart(item1);" src="../../static/img/bus.png" alt="">
          </div>
        </li>
      </ul>
      </div>
      <end></end>
    </div>
</template>

<script>
  import {countDown} from "../assets/server/countDown";
    import Jflb from "./Jflb";
    import Tou1 from "./Tou1";
    import Tou2 from "./Tou2";
    import Shouyelb from "./Shouyelb";
    import End from "./End";
    export default {
        name: "shouye",
      components:{
        End,
        Shouyelb,
        Tou2,
        Tou1,
        Jflb
      },

      data(){
          return {
            num1:0,
            aa:'end',

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
            ],
            time:[],
            shop:[
              {type:'新鲜水果',list:[]},
              {type:'水产海鲜',list:[]},
              {type:'肉类禽蛋',list:[]},
              {type:'蛋奶速食',list:[]},
            ],
          }
      },
      methods:{
          addCart(item1){
          console.log(item1)
            this.axios.get("/api/PHP/123/car.php",{params:{
              state:2,sid:item1.id,type:item1.type,src:item1.src,name:item1.name,guige:item1.guige,price:item1.zhekou
              }}).then(res=>{
              //这里是ES6的写法，get请求的地址，是小编自己在网站上存放的php文件，后面将介绍其编写，也可以自己定义
              res.data;//获取数据
              console.log(res.data)
            })
          },
          add(){
            ++this.num1;
            console.log(this.num1)
          },
        tArr(){
          var m = 0;
          var flag = true;
          this.$set(this.arr1,m,[]);
          this.$set(this.arr1[0],0,this.arr[0]);
          for (var i = 1; i < this.arr.length; i++){
            flag = true;
            for (var j = 0; j < this.arr1.length; j++){
              if(this.arr[i].time == this.arr1[j][0].time){
                this.$set(this.arr1[j],this.arr1[j].length,this.arr[i]);
                flag = false;
                break;
              }
            }
            if(flag){
              m++;
              this.$set(this.arr1,m,[]);
              this.$set(this.arr1[m],0,this.arr[i]);
            }
          }
        }

      },
      created(){
        this.axios.get("/api/PHP/123/shouye.php",{params:{state:1,type:'新鲜水果'}}).then(res=>{
          //这里是ES6的写法，get请求的地址，是小编自己在网站上存放的php文件，后面将介绍其编写，也可以自己定义
          res.data;//获取数据
         this.shop[0].list=res.data
        })

        this.axios.get("/api/PHP/123/shouye.php",{params:{state:1,type:'水产海鲜'}}).then(res=>{
          //这里是ES6的写法，get请求的地址，是小编自己在网站上存放的php文件，后面将介绍其编写，也可以自己定义
          res.data;//获取数据
          this.shop[1].list=res.data
        })
        this.axios.get("/api/PHP/123/shouye.php",{params:{state:1,type:'肉类禽蛋'}}).then(res=>{
          //这里是ES6的写法，get请求的地址，是小编自己在网站上存放的php文件，后面将介绍其编写，也可以自己定义
          res.data;//获取数据
          this.shop[2].list=res.data
        })
        this.axios.get("/api/PHP/123/shouye.php",{params:{state:1,type:'蛋奶速食'}}).then(res=>{
          //这里是ES6的写法，get请求的地址，是小编自己在网站上存放的php文件，后面将介绍其编写，也可以自己定义
          res.data;//获取数据
          this.shop[3].list=res.data
        })
     console.log(this.shop)
      },
      mounted(){
          $('.conNav1:first').css( 'margin-left',0)
          $('.jl:odd').css('background-position','0 -50px')
          $('.con3:last').css('margin-bottom','40px')
          this.time = countDown('2018-10-7 0:0:0');
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
    width: 1280px;
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
  .conNav3{
    width: 1280px;
    height: 100px;
    padding: 0 30px;
    font-size: 18px;
    text-align: center;
    line-height: 100px;
    margin: 20px auto 0;
    border-bottom: 1px solid rgb(73, 142, 61);
    background-color: #ebffe8;
  }
  .conNav3>li:nth-of-type(1){
    float: left;
  }
  .navSpan1{
    margin-left: 20px;
    font-size: 32px;
    color: #7fb476;
  }
  .navSpan2{
    margin-left: 20px;
    font-size: 24px;
    font-weight: 200;
    color: #999999;
  }
  .conNav3>li:nth-of-type(2){
    float: right;
  }
  .con3{
    width: 1280px;
    height: 100%;
    overflow: hidden;
    margin: 20px auto 0;
  }

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

  .navImg{
    width: 208px;
    height: 200px;
    margin-top: 20px;
    margin-bottom: 50px;
  }
  .con3 p{
    text-align: left;
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
