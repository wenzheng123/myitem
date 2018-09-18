<template>
    <div class="introduction">
      <div class="con">
        <router-link to="/intro1"><span :class="{cho:bol}" @click="goCho(0)">商品详情</span></router-link>
        <router-link to="/intro2"><span :class="{cho:!bol}" @click="goCho(1)">商品评价</span></router-link>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Introduction",
      data(){
          return{
            bol:true,
          }
      },
      methods:{
          goCho(bol){
            if (bol){
              this.bol = false;
            } else {
              this.bol = true;
            }

          }
      }
    }
</script>

<style scoped>
.introduction{
  width: 1280px;
  border: 1px #e4e4e4 solid ;
}
.introduction .con{
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  background-color: #f4f4f4;
  border: 1px #e4e4e4 solid;
}
.con a{
  color: #000;
}
.con span{
  display: inline-block;
  width: 125px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  position: relative;
  top: -1px;
  left: -2px;
}
.con .cho{
    color: #498e3d;
  border: 1px #e4e4e4 solid;
  border-top: 2px #498e3d  solid;
  border-bottom: 1px #fff  solid;
  background-color: #fff;
  }
</style>
