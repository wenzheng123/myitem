<template>
  <div class="storeC">
    <div class="fl">
      <div class="a1">
        <span>分类：</span>
        <span class="a2">全部</span>
        <ul>
          <li><router-link to="###">餐饮</router-link></li>
          <li><router-link to="###">酒店</router-link></li>
          <li><router-link to="###">休闲</router-link></li>
          <li><router-link to="###">电影</router-link></li>
          <li><router-link to="###">汽车装饰</router-link></li>
          <li><router-link to="###">家政服务</router-link></li>
        </ul>
      </div>
      <div class="a3">
        <p @click="pf">评分最高</p>
        <p @click="upDown">价格<span :class="{upDown:bol}"></span></p>
        <p @click="xl">销量</p>
      </div>
    </div>
    <div class="store">
      <div v-for="(item,index) in arr" v-if="index>(c-1)*12-1&&index<c*12">
        <img :src="item.src" alt="">
        <p>{{item.name}}</p>
        <p><span v-for="i in 5" :class="{good:i<=item.good}"></span>￥{{item.price|toFixed(0)}}/人</p>
        <p>{{item.site}}</p>
      </div>
    </div>
    <nav aria-label="Page navigation" class="page-nav-outer" id="PageNavId"></nav>
  </div>

</template>

<script>
  import fenPage from '../../static/chajian'
  import axios from 'axios'
    export default {
        name: "StoreClassify",
      data(){
          return{
            arr:[],
            bol:false,
            c:1,
          }
      },
      methods:{
          getData(){
            axios.get('/api/PHP/data/storefl.php').then((res)=>{
              this.arr = res.data;
            })
          },
        upDown(){
            this.bol = !this.bol;
            this.jg(this.bol);
        },
        pf(){
          this.arr.sort(function (a,b) {
            return b.good-a.good;
          });
        },
        xl(){
          this.arr.sort(function (a,b) {
            return b.xl-a.xl;
          });
        },
        jg(bol){
            // var arr = [];
            if (bol){
              this.arr.sort(function (a,b) {
                return a.price-b.price;
              });
            }else{
              this.arr.sort(function (a,b) {
                return b.price-a.price;
              });
            }
        }
      },
      mounted(){
        fenPage.page();
        $('.a1 a').eq(0).css('color','#498e3d');
          $('.a1 a').click(function () {
            $('.a1 a').css('color','#666666');
            $(this).css('color','#498e3d')
          });
          $('.a3 p').eq(1).css({
            color:'#498e3d',
            borderColor:'#498e3d'
          });
        $('.a3 p').click(function(){
          $('.a3 p').css({
            color:'#666',
            borderColor:'#e5e5e5'
          });
          $(this).css({
            color:'#498e3d',
            borderColor:'#498e3d'
          });
        });
          this.getData();
         $(()=>{
          $('#PageNavId').click( ()=> {
               this.c = $('.active a').html();
              })

          }
          )

      }
    }
</script>

<style scoped>
  .storeC{
    border-bottom: 1px #e5e5e5 solid;
  }
.fl{
  width: 1280px;
  margin: auto;
  height: 120px;
}
.a1{
  width: 100%;
  height: 60px;
  border-bottom: 1px #e5e5e5 solid;
  font-size: 16px;
  color: #666666;
  position: relative;
}
.a1 span{
  line-height: 60px;
}
.a1 ul{
  display: flex;
  justify-content: space-around;
  width: 500px;
  height: 30px;
  line-height: 30px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 140px;
  margin: auto;
}
.a1 ul li{
  background-color: #fff;
}
.a1 .a2{
  display: inline-block;
  background-color: #498e3d;
  width: 55px;
  height: 30px;
  line-height: 30px;
  vertical-align: middle;
  text-align: center;
  color: #fff;
  margin-left: 20px;
}
  .a1 a{
    text-decoration: none;
    color: #666666;
  }
  .a3 p{
    float: right;
    padding: 0 15px;
    border: 1px #e5e5e5 solid;
    margin-left: 40px;
    font-size: 16px;
    color: #666666;
    line-height: 30px;
    margin-top: 15px;
  }
.a3 p span{
  display: inline-block;
  width: 15px;
  height: 15px;
  vertical-align: middle;
  background: url("../../static/img/common/updown.png") no-repeat;
  background-position: 6px 1px;
}
.a3 p .upDown{
  background-position: 6px -18px;
}
.store{
  width: 1280px;
  margin: auto;
}
  .store div{
    width: 305px;
    height: 300px;
    background-color: #f8f6f7;
    margin: 0 20px 25px 0;
    display: inline-block;
  }
.store div:nth-of-type(4n){
  margin-right: 0;
}
.store p{
  text-align: center;
  margin: 0;
  color: #666666;
}
  .store p:nth-of-type(1){
line-height: 50px;
    font-size: 25px;
  }
.store p:nth-of-type(2){
  font-size: 20px;
  color: #ec6a17;
}
.store p:nth-of-type(2) span{
  display: inline-block;
  width: 19px;
  height: 19px;
  background: url("../../static/img/collect/collect.png");
  background-position: 0px -18px;
  -webkit-background-size: 100%;
  background-size: 100%;
}
  .store p:nth-of-type(2) .good{
    background-position: 0px 6px;
  }
.store p:nth-of-type(3){
  font-size: 16px;
  color: #6f6f6f;
  line-height: 50px;
}
  #PageNavId{
    margin-bottom: 40px;
  }
</style>
