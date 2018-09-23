<template>
<div class="cart">
  <tou1></tou1>
  <div class="cartNav0">
  <div class="cartNav">
    <img src="../../static/img/end1.png" alt="">
    <div class="cartNav1">
      <span class="color">我的购物车</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>确认订单信息</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>订单提交成功</span>
    </div>
  </div>
  </div>
  <div class="con">
   <div class="con1">
     <div class="conn">
     <img src="../../static/img/car/bigCar.png" alt="">
     <div class="con1_1">
       <p>您的购物车是空的</p>
       <p @click="quHome">去首页看看</p>
     </div>
     </div>
   </div>
    <div class="con2">
      <div class="con2_1">
        <img src="../../static/img/bus.png" alt="">
        <span>购物车</span>
      </div>
      <div class="con2_2">
        <table class="con2_3" v-for="(item,index) in arr">
          <col width="30%"></col>
          <col width="10%"></col>
          <col width="10%"></col>
          <col width="15%"></col>
          <col width="10%"></col>
          <col width="25%"></col>
          <tr class="tr1" style="text-align: center">
            <th>
              <img @click="chooseAll(item,index)" :src="item.bol?src1:src2" alt="">
              <span>{{item.name}}</span>
            </th>
            <th>规格</th>
            <th>单价</th>
            <th>数量</th>
            <th>金额</th>
            <th>操作</th>
          </tr>
          <tr class="tr2" v-for="(item1,index1) in item.list">
            <td>
              <img @click="choose(item1,index,index1)" :src="item1.bol?src1:src2" alt="">
              <img class="spsrc" :src="item1.src" alt="">
              <span>{{item1.name}}</span>
            </td>
              <td >{{item1.guige}}</td>
              <td >￥{{item1.price}}</td>
              <td>
                <div class="td">
                <button @click="numChange(index,index1,-1)">-</button>
                  <input type="number" class="count"  v-model="item1.num" />
                  <button @click="numChange(index,index1,1)">+
                </button>
                </div>
              </td>
              <td>￥{{unit(item1.num,item1.price)}}</td>
              <td @click="del(index,index1)" style="color: #498e3d;text-align: center">删除</td>
          </tr>
          <tr class="tr3">

            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>
              <span>商品金额</span>
              <span style="color: red;" class="total">¥{{total(index)}}</span>
            </td>
          </tr>
        </table>
        <ul class="con3">
          <li class="con3_1">
            <span @click="chooseAllShop">全选</span>
            <span @click="dellAllShop">批量删除</span>
          </li>
          <li class="con3_2">
            <span>商品总计 : </span>
            <span>¥{{totalAll()}}</span>
            <span @click="confirm">立即购买</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <end></end>
</div>
</template>

<script>
    import Tou1 from "./Tou1";
    import Tou2 from "./Tou2";
    import End from "./End";
    export default {
        name: "cart",
      components:{
        End,
        Tou2,
        Tou1
      },
      data(){
          return {
            bol:'',
            bol1:true,
            src1:'../../static/img/car/no.png',
            src2:'../../static/img/car/yes.png',
            num:0,
            arr1:[],
            arr:[],
            car:[],
            car1:[],
            goodsObj1:[],
            list1:[],
            // goodsObj:[
            //   {
            //     name:'爱果果水果店',
            //     bol:true,
            //     list:[
            //       {url:'../../static/img/car/lizhi.png',name:'云南蒙自石榴 8个装',guige:'8个装',price:569,num:1,bol:true,},
            //       {url:'../../static/img/car/lizhi.png',name:'云南蒙自石榴 8个装',guige:'8个装',price:569,num:1,bol:true,},
            //     ]
            //   },
            //   {
            //     name:'爱果果水果店',
            //     bol:true,
            //     list:[
            //       {url:'../../static/img/car/lizhi.png',name:'云南蒙自石榴 8个装',guige:'8个装',price:569,num:1,bol:true,},
            //       {url:'../../static/img/car/lizhi.png',name:'云南蒙自石榴 8个装',guige:'8个装',price:569,num:1,bol:true,},
            //       {url:'../../static/img/car/lizhi.png',name:'云南蒙自石榴 8个装',guige:'8个装',price:569,num:1,bol:true,},
            //     ]
            //   }
            // ]
          }
      },
      watch:{
        val(newVal,oldVal){
          console.log(newVal/1,oldVal/1)
        },
      },
      methods:{
          //全选所有商店
        chooseAllShop(){
          this.bol1 = !this.bol1
          this.arr.forEach((goodsObj,index,arr)=> {
            goodsObj.list.forEach((list,index,arr)=> {
              if(this.bol1 == true){
                goodsObj.bol = true;
                list.bol = true;
              }else{
                goodsObj.bol = false;
                list.bol = false;
              }
            })
          })
        },
        //删除全部商品
        dellAllShop(){
          var state = 0;
          this.arr.forEach((goodsobj,index,arr)=>{
            if(goodsobj.bol==true){
              state++
            }
          })
          console.log(state)
          if(state==this.arr.length){
            alert('请选择宝贝哦!')
            return;
          }else{
          for(var i=0;i<this.arr.length;i++){
            if (confirm("确认删除吗?")) {
              for (var i = this.arr.length - 1; i >= 0; i--) {
                if (this.arr[i].bol == false) {
                  this.arr.splice(i, 1)
                }
              }
            }
            if (this.arr.length == 0) {
              console.log(this.bol)
              this.bol = false
            }
          }
            return;
          }
        },
          //删除单个
        del(index,index1){
          if(confirm("确认删除吗")){
            this.arr[index].list.splice(index1,1)
          }
          else{
            return;
          }
        },
        //全选价格
        totalAll(){
          var totalAllNum = 0;
          this.arr.forEach((goodsObj,index,arr)=>{
            totalAllNum += this.total(index)
          })
          //console.log($('.total').text())
          return totalAllNum
        },
          //店铺全选
        chooseAll(item,index){
          item.bol = !item.bol
          var list = this.arr[index].list,
            len = list.length;
          if(item.bol==true){
            for (var i = 0; i < len; i++ ) {
              list[i].bol = true;
            }
          }else{
            for (var i = 0; i < len; i++ ) {
              list[i].bol = false;
            }
          }
        },
        //计算每个店铺总价
        total(index){
          var totalNum = 0,
            list = this.arr[index].list;
          list.forEach(function(item, index, arr) {
            if ( list[index].bol == false ) {
              var unit1 = list[index].num*list[index].price
              totalNum += unit1/1
            }
        }.bind(this));
          return totalNum
        },
        //单个金额
        unit(num,price){
          return (num*price).toFixed(1)/1
        },
        aa(item1,index){
          if(item1.bol == false){
            this.num++
          }
          console.log(this.num,this.arr[index].list.length)
          if (this.num == this.arr[index].list.length){
            this.num = 0
            return  false
          }

        },
          //单选
        choose(item1,index,index1){
          item1.bol = !item1.bol
          if(item1.bol == true){
            this.arr[index].bol = true
            this.bol1 =true
           }else{
          // 判断是否选择当前店铺的全选
          var flag = 0;
          console.log(this.arr[index].list.length)
          for (var i = 0; i < this.arr[index].list.length; i++ ) {
            if (this.arr[index].list[i].bol == false) {
              flag++;
            }
          }
          if (flag==this.arr[index].list.length) {
            this.arr[index].bol = false
          }
          }
        },
        numChange(index,index1,numChange){
          var goods = this.arr[index].list[index1],
            _this = this;
          if ( numChange == 1 ) {
            goods.num++;
          } else if ( numChange == -1 ) {
            goods.num--;
          }
          if ( goods.num <= 1 ) {
            goods.num = 1;
          }
        },
        quHome(){
          this.$router.push({path:'/shouye'})
        },
        confirm(){
          this.$router.push({
            path:'/ConfirmOrder',
          })
        }
      },
      updated() {

      },
      created(){
        // goodsObj:[
        //   {name:'',bol:true,list:[]}
        // ],

      },
      mounted(){
        this.axios.get('/api/PHP/123/car.php',{params:{state:0}}).then(function (res) {
          for(var i in res.data){
            res.data[i].bol = true;
          }
          this.arr = [];
          for(var i in res.data){
            if(this.arr.length === 0){
              var  obj = {name:res.data[i].type,list:[],bol:true};
              obj.list.push(res.data[i]);
              this.arr.push(obj)
            }else {
              var bol = true;
              for(var k in this.arr){
                if(res.data[i].type === this.arr[k].name){
                  this.arr[k].list.push(res.data[i]);
                  bol =false;
                  break;
                }
              }
              if(bol){
                var  obj = {name:res.data[i].type,list:[],bol:true};
                obj.list.push(res.data[i]);
                this.arr.push(obj)
              }
            }
          }
           console.log(this.arr)
          if(this.arr.length == 0){
                $('.con1').css('display','block')
            $('.tr1>th').not($('.tr1>th:first')).css('text-align','center')
            $('.tr2>td').not($('.tr2>td:first')).css('text-align','center')
              }else{
                $('.con2').css('display','block')
            $('.tr1>th').not($('.tr1>th:first')).css('text-align','center')
            $('.tr2>td').not($('.tr2>td:first')).css('text-align','center')
              }
        }.bind(this));
        // this.axios.get("/api/PHP/123/car.php",{params:{state:0}}).then(res=>{
        //   //这里是ES6的写法，get请求的地址，是小编自己在网站上存放的php文件，后面将介绍其编写，也可以自己定义
        //   res.data;//获取数据
        //   console.log(res.data);
        //   this.car = res.data;
        //   for(var i=0;i<this.car1.length;i++){
        //     this.$set(this.goodsObj1,i,{name:this.car1[i],bol:true,list:[]})
        //   }
        //
        //   console.log(this.goodsObj1)
        //   if(res.data.length == 0){
        //     $('.con1').css('display','block')
        //   }else{
        //     $('.con2').css('display','block')
        //   }
        // })


      }
    }
</script>

<style scoped>
  .spsrc{
    width: 80px;
    height: 80px;
    padding: 5px;
    overflow: hidden;
    border: 1px solid #e4e4e4;
  }
  .cartNav1 .color{
    color: rgb(240, 130, 0);
   }
  .cartNav0{
    width: 100%;
    height: 130px;
    margin-top: 50px;
    overflow: hidden;
    border-bottom: 1px solid #e4e4e4;
  }
  .cartNav{
    width: 1280px;
    line-height: 100px;
    margin: 0 auto;
  }
  .cartNav1{
    height: 130px;
    float: right;
    color: #a1a1a1;
    line-height: 130px;
    font-size: 20px;
    text-align: left;
  }
  .cartNav1>span{
    color: rgb(51, 51, 51);
  }
  .con{
    height: 100%;
    min-height: 490px;
    margin-bottom: 100px;
    overflow: hidden;
  }
  .con1{
  height: 490px;
    position: relative;
    display: none;
   }
  .conn{
    width: 330px;
    height: 130px;
    text-align: center;
    line-height: 100px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
.con1_1{
  float: right;
  line-height: 3;
  font-size: 20px;
  color: rgb(102, 102, 102);
  }
.con1_1 p:nth-of-type(2){
  width: 170px;
  height: 45px;
  line-height: 45px;
  font-size: 18px;
  background-color: rgb(236, 106, 23);
  color: rgb(255, 255, 255);
  border-radius: 5px;
}
  .con2{
    width: 1280px;
    margin: 0 auto;
    display: none;
    text-align: left;
  }
  .con2_1{
    font-size: 18px;
    color: rgb(102, 102, 102);
    line-height: 60px;
  }
  .con2_1>img{
    width: 22px;
    height: 20px;
    margin-top: -5px;
    vertical-align: middle;
  }
  .con2_1>span{
    line-height:18px;
    margin-left: 15px;
  }
  .con2_3{
    width: 1280px;
    font-size: 18px;
    margin-bottom: 20px;
    border: 1px solid #e4e4e4;
  }
  .tr1{
    height: 45px;
    line-height: 45px;
   background-color: #f2f2f2;
  }
  .tr1 img{
    margin-left: 20px;
  }
  .tr1 th{
    text-align: center;
  }
  .tr1>th:nth-of-type(1){
    float: left;
  }
  .tr1>th:nth-of-type(1)>span{
    margin-left: 20px;
  }
  .tr2{
    height: 120px;
    line-height: 120px;
    border-bottom: 1px solid #e4e4e4;
  }
  .tr2>td:nth-of-type(1){
    float: left;
  }
  .tr2>td:nth-of-type(1)>img{
    margin-left: 20px;
  }
  .tr2>td:nth-of-type(1)>span{
    margin-left: 20px;
  }
  .tr2>td:nth-of-type(2){
    color: #a7a7a7;
    text-align: center;
  }
  .tr2>td:nth-of-type(3){
    color: #a7a7a7;
    text-align: center;
  }
  .tr2>td:nth-of-type(4){
    text-align: center;
  }
  .tr2>td:nth-of-type(5){
    text-align: center;
  }
  .tr3{
    text-align: center;
  }
  .tr3 span{
    font-size: 18px;
    line-height: 80px;
  }
  .td{
    font-size: 0;
    line-height: 28px;
  }
  .td button{
    width: 28px;
    height: 28px;
    font-size: 18px;
    border: 1px solid #e4e4e4;
    background-color: #f2f2f2;
  }
  .td .count{
    width: 40px;
    height: 28px;
    font-size: 18px;
    text-align: center;
    margin-top: -13px;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
  }
  .con3{
    height: 120px;
    line-height: 120px;
  }
  .con3_1{
    font-size: 14px;
    float: left;
    color: rgb(73, 142, 61);
    margin-left: 20px;
  }
  .con3_1>span:nth-of-type(2){
    margin-left: 40px;
  }
   .con3_2{
     float: right;
     font-size: 18px;
     color: rgb(102, 102, 102)
   }
  .con3_2>span:nth-of-type(2){
    color: #ff5757;
  }
  .con3_2>span:nth-of-type(3){
    width: 150px;
    height: 50px;
    font-size: 20px;
    display: inline-block;
    border-radius: 5px;
    line-height: 50px;
    text-align: center;
    margin-left: 30px;
    color: rgb(255, 255, 255);
    background-color: rgb(240, 130, 0);
  }

</style>
