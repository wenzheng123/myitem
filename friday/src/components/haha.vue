<template>
  <div id="purchasingShoppingCart">
    <header>
      <p>购物车</p>
      <div v-if="this.state==0"
           class="edit"
           @click="edit()">编辑
      </div>
      <div v-else class="edit"
           @click="edit()">完成
      </div>
    </header>

    <ul class="good-list">
      <li v-for="(good,index) in goods" :key="index">
        <label class="ql-ipt">
          <input type="checkbox"
                 class="comman-ipt"
                 @click="select(good.id)"><i></i>
          </input>
        </label>
        <a @click="toDetail(good.id)">
          <img class="good-img"
               v-bind:src="'http://120.78.133.190'+good.pic"></img>
          <div class="good-info">
            <p class="good-title">{{good.name}}</p>
            <p class="good-detail">{{good.description}}</p>
            <p class="good-price">￥{{good.price}}</p>
          </div>
        </a>
        <div class="good-num-container">
          <div class="good-num">
            <div class="add" @click="add(good.id)">+</div>
            <div class="num" goodId="">{{good.goodsNum}}</div>
            <div class="minus" @click="minus(good.id)">-</div>
          </div>
        </div>
      </li>
    </ul>

    <div class="bottom">
      <!--label class="ql-ipt final-input">
        <input type="checkbox" class="fin-ipt"><i></i></input>
      </label-->
      <p class="bottom-text">已选 ( <span class="bottom-span">{{totNum}}</span> )</p>
      <p class="tot-price">￥<span class="bottom-price">{{totPrice}}</span></p>
      <button v-if="this.state==0"
              class="sub-btn"
              v-bind:class="{ green: selectIds.length }"
              @click="subOrDel()">下单
      </button>
      <button v-else
              class="sub-btn"
              v-bind:class="{ green: selectIds.length }"
              @click="subOrDel()">删除所选
      </button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "haha",
      data () {
        return {
          goods: [],
          state: 0,        //0:选择状态，1:编辑状态
          selectIds: [],
          readyToOrder: 0, //有选中的商品，可以下单
          totPrice: 0.00,
          totNum: 0
        }
      },
      created () {
        /**
         *请求购物车列表
         */
        var cartObject = {
          "buyerId": 1
        };
        this.$http.post('/shoppingCart/shoppingCartList', cartObject).then(res => {
          console.log(res);
          this.goods = res.data.shoppingCartList;
          // 为商品赋选中状态初始值
          this.goods.forEach(function(element) {
            Vue.set(element,'selected',0);
          });
        }).catch(error => {
          console.log(error);
        });
      },
      methods: {
        /*
         *点击购物车条目跳转至商品详情
         */
        toDetail(id) {
          this.$router.push({
            path: "/storeDetail",
            query: {
              goodId: id
            }
          })
        },
        /**
         *选中一件商品
         */
        select(id) {
          var index = 0;
          /* 记录该商品在goods中的下标*/
          for(var i=0;i<this.goods.length;i++) {
            if(this.goods[i].id == id) {
              index = i;
            }
          }
          /* 记录selectIds */
          if(this.goods[index].selected == 0) {
            this.selectIds.push(id);
            console.log(this.selectIds);
            this.goods[index].selected = 1;

            this.totNum += this.goods[index].goodsNum;
            this.totPrice += this.goods[index].goodsNum * this.goods[index].price;
          } else {
            var j = this.selectIds.indexOf(id);
            this.selectIds.splice(j, 1);
            console.log(this.selectIds);
            this.goods[index].selected = 0;

            this.totNum -= this.goods[index].goodsNum;
            this.totPrice -= this.goods[index].goodsNum * this.goods[index].price;
          }
        },
        /*
         *商品数量减少
         */
        minus(id) {
          /* front-end */
          var num = 0;           //改后的数量
          for(var i=0;i<this.goods.length;i++) {
            if(this.goods[i].id == id) {
              this.goods[i].goodsNum--;
              this.totNum--;
              this.totPrice -= this.goods[i].price;
              num = this.goods[i].goodsNum;
            }
          }
          /* back-end */
          var numObject = {
            id: id,
            goodsNum: num
          };
          this.$http.post('/shoppingCart/shoppingCartUpdate', numObject).then(res => {
            console.log(res);
          }).catch(error => {
            console.log(error);
          });
        },
        /*
         *商品数量增加
         */
        add(id) {
          /* front-end */
          var num = 0;           //改后的数量
          for(var i=0;i<this.goods.length;i++) {
            if(this.goods[i].id == id) {
              this.goods[i].goodsNum++;
              this.totNum++;
              this.totPrice += this.goods[i].price;
              num = this.goods[i].goodsNum;
            }
          }
          /* back-end */
          var numObject = {
            id: id,
            goodsNum: num
          };
          this.$http.post('/shoppingCart/shoppingCartUpdate', numObject).then(res => {
            console.log(res);
          }).catch(error => {
            console.log(error);
          });
        },
        /**
         *点击编辑按钮
         */
        edit() {
          /* 编辑/编辑完成 */
          if(this.state == 0) {
            this.state = 1;
          } else {
            this.state = 0;
          }
        },
        /**
         *底部按钮
         *删除或下单
         */
        subOrDel() {
          var sidObject ={
            ids: JSON.parse(JSON.stringify(this.selectIds).replace(/\"/g, ""))
          };
          if(this.state == 0) {
            this.$http.post('/shoppingCart/placeOrder', sidObject).then(res => {
              console.log(res);
              //下单商品暂存
              localStorage.setItem("goods",JSON.stringify(res.data.data));
              localStorage.setItem("price",this,totPrice);

            }).catch(error => {
              console.log(error);
            });
          } else {
            this.$http.post('/shoppingCart/shoppingCartRemove', sidObject).then(res => {
              console.log(res);
            }).catch(error => {
              console.log(error);
            });
          }
          /* 重新请求商品列表 */
          var cartObject = {
            "buyerId": 1
          };
          this.$http.post('/shoppingCart/shoppingCartList', cartObject).then(res => {
            console.log(res);
            this.goods = res.data.shoppingCartList;
            // 为商品赋选中状态初始值
            this.goods.forEach(function(element) {
              Vue.set(element,'selected',0);
            });

            /*
            *局部刷新?
            *清空input的记录，恢复到一切都不选中的状态
            *总价总数恢复0
            *
            */

            this.$router.push({
              path: "/purchasingOrder",
              query: {

              }
            })
          }).catch(error => {
            console.log(error);
          });
        }
      }
    }
</script>

<style scoped>
  #purchasingShoppingCart {
    background-color: #fafafa;
  }
  /* header */
  header {
    height:0.74rem;
    width: 100%;
    color: #ffffff;
    position: fixed;
    top:0;
    font-size: 0.26rem;
    z-index: 2;  /*使fixed覆盖在absolute上层，一直可见*/
    background-color: #5f6d61;
  }
  header p {
    text-align: center;
    padding-top: 0.24rem;
  }
  .edit {
    position: absolute;
    right: 0;
    top: 0.24rem;
    right: 0.28rem;
  }


  /* 商品列表 */
  .good-list {
    width: 100%;
    position: absolute;
    top: 0.74rem;
    background-color: #fafafa;
    margin-bottom: 1.74rem;
  }
  .good-list li {
    height: 1.96rem;
    width: 100%;
    background-color: #ffffff;
    border-bottom: 0.02rem solid #dddddd;
    margin-bottom: 0.12rem;
  }
  .good-img {
    box-sizing: border-box;
    height: 1.12rem;
    width: 1.26rem;
    position: absolute;
    left: 0.70rem;
    margin-top: 0.36rem;
    border: 0.02rem solid #dddddd;
  }
  .good-info {
    position: absolute;
    left: 2.22rem;
    margin-top: 0.36rem;
    width: 2.50rem;
    height: 1.12rem;
  }
  .good-title {
    font-size: 0.24rem;
    position: absolute;
    top: 0;
    margin-bottom: 0.14rem;
  }
  .good-detail{
    color: #cccccc;
    font-size: 0.16rem;
    position: absolute;
    top: 0.45rem;
  }
  .good-price {
    color: #e51a19;
    font-size: 0.16rem;
    position: absolute;
    bottom: 0;
  }
  .good-num-container {
    position: absolute;
    right: 0.44rem;
    margin-top: 0.36rem;
    width: 1.3rem;
    height: 1.12rem;
  }
  .good-num {
    box-sizing: border-box;
    width: 1.20rem;
    height:0.30rem;
    position: absolute;
    bottom: 0;
    margin-top: 1.22rem;
    border: 0.01rem solid #8e8561;
    text-align: center;
  }
  .add {
    position: absolute;
    right: 0;
    width: 0.36rem;
  }
  .add span {
    color: #8e8561;
    font-size: 0.28rem;
    position: absolute;
    bottom: -0.32rem;
    right:0.08rem;
    text-align: center;
  }
  .num {
    height:0.28rem;
    box-sizing: border-box;
    position: absolute;
    right: 0.36rem;
    border-left: 0.01rem solid #8e8561;
    border-right: 0.01rem solid #8e8561;
    width: 0.48rem;
  }
  .minus {
    position: absolute;
    right: 0.84rem;
    width: 0.36rem;
  }
  .minus span {
    color: #8e8561;
    font-size: 0.28rem;
    position: absolute;
    bottom: -0.32rem;
    right:0.10rem;
    text-align: center;
  }

  /* input */
  .ql-ipt input[type='radio'] + i, input[type='checkbox'] + i {
    position: absolute;
    left: 0.18rem;
    margin-top: 0.72rem;
  }
  .ql-ipt input[type='radio']:checked + i,
  input[type='checkbox']:checked + i {
    /* background-color: #8e8561;; */
    background-position: 0 0;
  }
  .final-input input[type='checkbox'] + i {
    margin-top: 0.38rem;
  }

  /* bottom part 即下单处 */
  .bottom {
    height: 1.06rem;
    width: 100%;
    border-top: 0.02rem solid #dddddd;
    position: fixed;
    bottom: 0rem;
    background-color: #ffffff;
  }
  .bottom-text {
    position: absolute;
    left: 0.70rem;
    margin-top: 0.40rem;
    font-size: 0.26rem;
  }
  .bottom-text span {
    font-size: 0.26rem;
  }
  .tot-price {
    margin-top: 0.40rem;
    position: absolute;
    right: 2.00rem;
    color: #e51a19;
  }
  .sub-btn {
    width: 1.76rem;
    height: 1.06rem;
    background-color: #dee2de;  /*#8e8561*/
    border: none;
    position: absolute;
    right: 0;
    color: #ffffff;
    font-size: 0.24rem;
  }
  .green {
    background-color: #8e8561;
  }


  /* 字体大小 */
  .cd-f1 {
    font-size: 0.32rem;         /* 32/640 */
  }
  .cd-f2 {
    font-size: 0.3rem;          /* 30/640 */
  }
  .cd-f3 {
    font-size: 0.28rem;         /* 28/640 */
  }
  .cd-f4 {
    font-size: 0.26rem;         /* 26/640 */
  }
  .cd-f5 {
    font-size: 0.24rem;         /* 24/640 */
  }
  .cd-f6 {
    font-size: 0.22rem;         /* 22/640 */
  }
  .cd-fmin {
    font-size: 0.20rem;
  }

  /* 颜色 */
  .answer-right {
    background-color: #003814;
  }
  .answer-wrong {
    background-color: #570100;
  }
  .answer-no-choice {
    background-color: #929292;
  }
  .color-base {
    color: #bfa355;
  }

  /* button */
  .ql-btn {
    display: block;
    width: 1.46rem;
    height: 0.44rem;
    line-height: 0.44rem;
    font-size: 0.24rem;
    margin-left: 0.4rem;
    text-align: center;
    border-radius: 0.04rem;
    /* border: 0.01rem solid #f2f2f2; */
    background-color: transparent;
    border: none;
    outline: none;
  }
  .ql-btn:focus {
    color: #adaaaa;
  }
  .ql-btn-default {
    color: #fff;
    border: none;
    /* background-color: #bfa355; */
    background-color: #564932;
  }

  /* radio & checkbox */
  .ql-ipt input[type='radio'], .ql-ipt input[type='checkbox'] {
    position: absolute;
    left: -555em;
  }
  .ql-ipt input[type='radio'] + i, .ql-ipt input[type='checkbox'] + i {
    display: inline;
    float: left;
    width: 0.38rem;
    height: 0.38rem;
    /*background: url('../../assets/images/icon_input.png') no-repeat;*/
    /*background-size: auto 0.38rem;*/
    /*background-position: -0.39rem 0;*/
  }
  .ql-ipt input[type='radio']:checked + i,
  .ql-ipt input[type='checkbox']:checked + i {
    /* background-color: #8e8561;; */
    background-position: 0 0;
  }
</style>
