<template>
<div class="goods">
  <div class="tit">
    <p>{{arr[0].name}}</p>
    <p>
      <span>全国</span>
      <span v-if="arr[0].bs" class="five">礼拜五</span>
      <span>次日达</span>
      <span>自营</span>
    </p>
  </div>
  <div class="info">
    <div>
      <img :src="arr[0].src" alt="">
      <p>资深卖家</p>
    </div>
    <p class="intro">雀斑石榴持续热卖！云南蒙自石榴，原产波斯（今伊朗）一带，公元前二世纪时传
      入我国。是中国三大石榴之一，粒大皮薄，汁多味甜爽口。雀斑石榴持续热卖！云
      南蒙自石榴，原产波斯（今伊朗）一带，公元前二世纪时传入我国。是中国三大石
      榴之一，粒大皮薄，汁多味甜爽口。</p>
  </div>
  <div class="deal">
    <p class="price">
      <span>现价：￥{{Number(arr[0].price)*Number(arr[0].zk)|toFixed(1)}}</span>
      <span>原价：￥{{arr[0].price|toFixed(1)}}</span>
    </p>
    <p class="gg">请选择规格<span v-for="(item,i) in arr2" :class="{cho:i==iCho}" @click="cho(i)">{{item}}</span></p>
    <div class="num">数量：&nbsp;&nbsp;
      <p><span @click="add(0)"></span></p><input type="number" v-bind:value="num" @input="much" placeholder="1"><p><span @click="add(1)"></span></p>&nbsp;&nbsp;&nbsp;件&nbsp;&nbsp;&nbsp;
    <span class="car">加入购物车</span>
    <span class="buy">立即购买</span>
    </div>
  </div>
  <div class="collect">
    <p class="colle"><span :class="{c:bol}" @click="collet"></span>收藏此商品</p>
    <p class="share">分享到：
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </p>
  </div>
</div>
</template>

<script>
  import axios from  'axios'
    export default {
        name: "GoodsInfo",
      data(){
          return{
            arr:[{
              name:'',
              price:'',
              src:'',
              bs:'',
              zk:'',
              gg:'',
              yf:''
            }],
            arr2:['500g','1000g','1500g'],
            iCho:0,
            bol:false,
            num:'',
          }
      },
      methods:{
        cho(i){
          this.iCho = i;
        },
        collet(){
          this.bol=!this.bol;
        },
        max(){
          if($('.goods .num input').val()>=this.arr[0].num){
            $('.goods .num input').val(this.arr[0].num);
          }
          $('.goods .num input').val
        },
        much(){
          this.num = $('.goods .num input').val();
          if(this.num<1){
            this.num = '';
          }
          this.max();
        },
        add(bol){
          if (bol){
            this.num++;
          } else{
            this.num--;
            if (this.num<1){
              this.num =1;
            }
          }
          this.max();
        }
      },
      filters:{
          toFixed(num1,num2){
            return Number(num1).toFixed(num2);
          }
      },
      mounted(){
        axios.get('api/zhouwu/shangpin.php?type=0').then(res=>{
          this.$set(this.arr ,0, res.data[0]);
          console.log(this.arr);
        })
      }
    }
</script>

<style scoped>
.goods{
  width: 740px;
  height: 630px;
}
  .goods .tit{
    height: 114px;
    border-bottom: 1px #f4f4f4 solid;
  }
.goods .tit p:nth-of-type(1){
  line-height: 60px;
  font-size: 25px;
}
.goods .tit p:nth-of-type(2) span{
  display: inline-block;
  line-height: 26px;
  font-size: 16px;
  text-align: center;
  color: #fff;
  background-color: #498e3d;
  padding:  0 18px;
  margin-right: 30px;
}
.goods .tit p:nth-of-type(2) .five{
  background-color: #f08200;
}
  .goods .info{
    height: 180px;
    overflow: hidden;
    border-bottom: 1px #f4f4f4 solid;
  }
.goods .info div{
  width: 120px;
  height: 180px;
  float: left;
  margin-right: 33px;
  text-align: center;
}
.goods .info img{
  width: 100px;
  margin: 20px auto 10px;
}
.goods .info div p{
  height: 30px;
  font-size: 16px;
  line-height: 30px;
  background-color: #ffe313;
  border-radius: 18px;
}
.goods .info .intro{
  font-size: 16px;
  margin: 30px;
  line-height: 30px;
  color: #797979;
}
.goods .deal p{
  margin: 25px 0;
  color: #797979;
  font-size: 20px;
}
.goods .deal .price span:nth-of-type(1){
  font-size: 32px;
  color: #ff5757;
  margin-right: 30px;
}
.goods .deal .price span:nth-of-type(2){
  font-size: 20px;
  color: #797979;
  text-decoration: line-through;
}
.goods .deal .gg span{
  display: inline-block;
  width: 80px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  border: 1px #ccc solid;
  font-size: 16px;
  margin-left: 20px;
}
.goods .deal .gg .cho{
  background-color: #f4fff2;
  border: 1px #4b943d solid;
}
/*在谷歌下移除input[number]的上下箭头*/
.goods input[type='number']::-webkit-outer-spin-button,
.goods input[type='number']::-webkit-inner-spin-button{
  -webkit-appearance: none !important;
  margin: 0;
}
/*在firefox下移除input[number]的上下箭头*/
.goods input[type="number"]{-moz-appearance:textfield;}
.goods .num{
  font-size: 20px;
  color: #797979;
  position: relative;
}
  .goods .num p{
    display: inline-block;
    width: 33px;
    height: 33px;
    background-color: #f2f2f2;
    vertical-align: middle;
    border: 1px #ccc solid;
  }
.goods .num p span{
  display: block;
  width: 100%;
  height: 100%;
}
.goods .num p:nth-of-type(1) span{
  background: url('../../static/img/collect/collect.png') no-repeat;
  background-position: 9px -264px;
}
.goods .num p:nth-of-type(2) span{
  background: url('../../static/img/collect/collect.png') no-repeat;
  background-position: 9px -297px;
}
.goods .num input{
  width: 69px;
  height: 33px;
  font-size: 20px;
  text-align: center;
  color: #797979;
  border-top: 1px #ccc solid;
  border-bottom: 1px #ccc solid;
}
.goods .num > span{
  display: inline-block;
  width: 150px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 5px;
  background-color: #ffae4f;
  color: #fff;
  margin-left: 20px;
}
.goods .num .buy{
  background-color: #f08200;
}
  .goods .collect{
    font-size: 15px;
    color: #797979;
    margin-top: 40px;
  }
.goods .collect p,.goods .collect span{
  display: inline-block;
}
.goods .colle span{
  width: 25px;
  height: 25px;
  vertical-align: middle;
  background: url("../../static/img/collect/collect.png");
  background-position: 0px -40px;
}
.goods .colle .c{
  background-position: 0px 0px;
}
.goods .collect .share{
  margin-left: 40px;
}
.goods .share span{
  width: 30px;
  height: 30px;
  vertical-align: middle;
  margin-left: 10px;
  background: url("../../static/img/collect/collect.png");
}
.goods .share span:nth-of-type(1){
  background: url("../../static/img/collect/collect.png");
  background-position: 0px -77px;
}
.goods .share span:nth-of-type(2){
  background: url("../../static/img/collect/collect.png");
  background-position: 0px -115px;
}
.goods .share span:nth-of-type(3){
  background: url("../../static/img/collect/collect.png");
  background-position: 0px -153px;
}
.goods .share span:nth-of-type(4){
  background: url("../../static/img/collect/collect.png");
  background-position: 0px -191px;
}
.goods .share span:nth-of-type(5){
  background: url("../../static/img/collect/collect.png");
  background-position: 0px -229px;
}
</style>
